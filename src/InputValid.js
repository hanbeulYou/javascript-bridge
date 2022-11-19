const OutputView = require("./OutputView");

class BridgeSizeValid {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = Number(answer);
  }

  validate(answer) {
    if (Number.isNaN(answer) === true) {
      throw new Error('[ERROR] 숫자 아님');
    }
    if (answer%1!==0) {
      throw new Error('[ERROR] 정수 아님');
    }
    if (answer<3 || answer>20) {
      throw new Error('[ERROR] 범위 밖임');
    }
  }

  getSize() {
    return this.#answer;
  }
}

class MovingValid {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = answer;
  }

  validate(answer) {
    const MOVE_VALID = ['U', 'D']
    
    if(!MOVE_VALID.includes(answer)) {
      throw new Error('[ERROR] 유효하지 않은 입력');
    }
  }

  getMove() {
    return this.#answer;
  }
}

class RetryValid {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = answer;
  }

  validate(answer) {
    const RETRY_VALID = ['R', 'Q']
    
    if(!RETRY_VALID.includes(answer)) {
      throw new Error('[ERROR] 유효하지 않은 입력');
    }
  }

  getRetry() {
    return this.#answer;
  }
}

module.exports = { BridgeSizeValid, MovingValid, RetryValid };