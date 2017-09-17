"use strict";

module.exports = class AKAIError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'AKAIError'
    this.code = code
  }
}