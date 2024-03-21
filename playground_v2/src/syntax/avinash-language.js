// avinash-language.js
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-javascript';

ace.define('ace/mode/avinash', (require, exports, module) => {
  const oop = require('ace/lib/oop');
  const TextMode = require('ace/mode/text').Mode;

  const HighlightRules = require('./avinash-language-highlight-rules').AvinashHighlightRules;

  const Mode = function() {
    this.HighlightRules = HighlightRules;
  };
  oop.inherits(Mode, TextMode);

  exports.Mode = Mode;
});

ace.define('ace/mode/avinash-language-highlight-rules', (require, exports, module) => {
  const oop = require('ace/lib/oop');
  const TextHighlightRules = require('ace/mode/text_highlight_rules').TextHighlightRules;

  const AvinashHighlightRules = function() {
    this.$rules = {
      start: [
        {
          token: 'variable',
          regex: '\\b(avinash ka variable ye)\\b',
        },
        {
          token: 'support.function',
          regex: '\\b(boloAvinash)\\b',
        },
        {
          token: 'constant.language.boolean',
          regex: '\\b(sahiAvinash|NahAvinash)\\b',
        },
        {
          token: 'keyword.control',
          regex: '\\b(agarAvinash|nahitoAvinash|varnaAvinash|jabtakAvinash)\\b',
        },
        {
          token: 'keyword.operator',
          regex: '\\b(rukAvinash|continueAvinash|kamaDoAvinash)\\b',
        },
        {
          token: 'storage.type',
          regex: '\\b(ye function Avinash)\\b',
        },
        {
          token: 'keyword',
          regex: '\\b(deAvinash)\\b',
        },
        {
          token: 'keyword.control',
          regex: '\\b(tryAvinash|pakarAvinash)\\b',
        },
        {
          token: 'keyword.operator',
          regex: '\\b(dhund Avinash)\\b',
        },
        {
          token: 'string',
          regex: '".*?"',
        },
        {
          token: 'constant.numeric',
          regex: '\\b\\d+\\b',
        },
        // Add more rules for other elements
      ],
    };
  };


  oop.inherits(AvinashHighlightRules, TextHighlightRules);

  exports.AvinashHighlightRules = AvinashHighlightRules;
});
