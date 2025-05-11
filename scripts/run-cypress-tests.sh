#!/bin/bash

npm ci

set +e
npx cypress run --browser chrome --env allure=true
EXIT_CODE=$?
set -e

allure generate allure-results --clean -o allure-report

exit $EXIT_CODE