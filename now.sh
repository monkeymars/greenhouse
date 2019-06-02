#!/bin/bash
heroku login
git push heroku master
heroku open
