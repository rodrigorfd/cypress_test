#!/bin/bash

set -e

apt-get update && apt-get install -y python3 python3-pip default-jre

npm install -g allure-commandline

export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))
export PATH=$JAVA_HOME/bin:$PATH
java -version