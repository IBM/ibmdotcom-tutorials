"use strict";
'use strict';

const cx = (...classNames) => classNames.filter(Boolean).map((r) => r.trim()).join(" ");

exports.cx = cx;
