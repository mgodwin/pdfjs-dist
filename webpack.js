/* Copyright 2022 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

const pdfjs = require("./legacy/build/pdf.js");
const PdfjsWorker = require("worker-loader?esModule=false&filename=[name].[contenthash].js!./legacy/build/pdf.worker.js");

if (typeof window !== "undefined" && "Worker" in window) {
  pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker();
}

module.exports = pdfjs;
