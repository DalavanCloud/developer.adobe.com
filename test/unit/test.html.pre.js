/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
const assert = require('assert');
const html = require('../../src/html.pre.js');

describe('html.pre.js', () => {
  it('should dispatch to default html if there is no root path', () => {
    const payload = {
      request: {
        params: {},
        headers: {},
      },
      dispatch: {},
    };
    html.pre(payload, { request: { params: {} } });
    assert.equal(payload.dispatch.url, '/index.default.html');
  });
  it('should dispatch to docs html if docs is in root path', () => {
    const payload = {
      request: {
        params: {},
        headers: {},
        path: '/index.html',
      },
      dispatch: {},
    };
    html.pre(payload, { request: { params: { rootPath: '/product/docs' } } });
    assert.equal(payload.dispatch.url, '/index.docs.html');
  });
});
