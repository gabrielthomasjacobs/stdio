/**     _      _ _
 *  ___| |_ __| (_) ___
 * / __| __/ _` | |/ _ \
 * \__ \ || (_| | | (_) |
 * |___/\__\__,_|_|\___/
 *
 * Standard input/output management for NodeJS
 *
 * Copyright (c) 2013- Sergio García <sgmonda@gmail.com>
 * Distributed under MIT License
 *
 **/

// Command-line arguments parsing
exports.getopt = require('./lib/getopt.js').getopt;

// Terminal questions/forms
exports.question = require('./lib/question.js').question;
