#!/usr/bin/env bash
ember build --environment production 
docker build -t interthings/ui .
docker push interthings/ui
