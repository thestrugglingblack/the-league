#!/bin/bash
# Helper script for managing the Dockerized To-Fix Development Environment.
USAGE="usage: $0 CMD [OPTIONS]"
DOCKER_COMPOSE_CMD="docker-compose"
DOCKER_COMPOSE_FILE="docker-compose.yml"
cmd="$1"
shift  # update parameter list
case "$cmd" in
  ?*)
    $DOCKER_COMPOSE_CMD -f $DOCKER_COMPOSE_FILE $cmd "$@"
    ;;
  *)
    echo >&2 "error: missing or invalid command!"
    echo >&2 "  $USAGE"
    ;;
esac
