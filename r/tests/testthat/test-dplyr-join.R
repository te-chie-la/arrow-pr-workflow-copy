# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

skip_if_not_available("dataset")

library(dplyr)

left <- example_data
# Error: Invalid: Dictionary type support for join output field
# is not yet implemented, output field reference: FieldRef.Name(fct)
# on left side of the join
# (select(-fct) also solves this but remove once)
left$fct <- NULL
left$some_grouping <- rep(c(1, 2), 5)

left_tab <- Table$create(left)

to_join <- tibble::tibble(
  some_grouping = c(1, 2),
  capital_letters = c("A", "B"),
  another_column = TRUE
)
to_join_tab <- Table$create(to_join)



test_that("left_join", {
  expect_message(
    expect_dplyr_equal(
      input %>%
        left_join(to_join) %>%
        collect(),
      left
    ),
    'Joining, by = "some_grouping"'
  )
})

test_that("left_join `by` args", {
  expect_dplyr_equal(
    input %>%
      left_join(to_join, by = "some_grouping") %>%
      collect(),
    left
  )
  expect_dplyr_equal(
    input %>%
      left_join(
        to_join %>%
          rename(the_grouping = some_grouping),
        by = c(some_grouping = "the_grouping")
      ) %>%
      collect(),
    left
  )

  # TODO: allow renaming columns on the right side as well
  skip("ARROW-14184")
  expect_dplyr_equal(
    input %>%
      rename(the_grouping = some_grouping) %>%
      left_join(
        to_join,
        by = c(the_grouping = "some_grouping")
      ) %>%
      collect(),
    left
  )
})


test_that("join two tables", {
  expect_identical(
    left_tab %>%
      left_join(to_join_tab, by = "some_grouping") %>%
      collect(),
    left %>%
      left_join(to_join, by = "some_grouping") %>%
      collect()
  )
})

test_that("Error handling", {
  expect_error(
    left_tab %>%
      left_join(to_join, by = "not_a_col") %>%
      collect(),
    "all(names(by) %in% names(x)) is not TRUE",
    fixed = TRUE
  )
})

# TODO: test duplicate col names
# TODO: casting: int and float columns?

test_that("right_join", {
  expect_dplyr_equal(
    input %>%
      right_join(to_join, by = "some_grouping") %>%
      collect(),
    left
  )
})

test_that("inner_join", {
  expect_dplyr_equal(
    input %>%
      inner_join(to_join, by = "some_grouping") %>%
      collect(),
    left
  )
})

test_that("full_join", {
  expect_dplyr_equal(
    input %>%
      full_join(to_join, by = "some_grouping") %>%
      collect(),
    left
  )
})

test_that("semi_join", {
  expect_dplyr_equal(
    input %>%
      semi_join(to_join, by = "some_grouping") %>%
      collect(),
    left
  )
})

test_that("anti_join", {
  expect_dplyr_equal(
    input %>%
      anti_join(to_join, by = "some_grouping") %>%
      collect(),
    left
  )
})