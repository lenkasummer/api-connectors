/**
 * BitMEX API
 * ## REST API for the BitMEX Trading Platform  [View Changelog](/app/apiChangelog)    #### Getting Started   ##### Fetching Data  All REST endpoints are documented below. You can try out any query right from this interface.  Most table queries accept `count`, `start`, and `reverse` params. Set `reverse=true` to get rows newest-first.  Additional documentation regarding filters, timestamps, and authentication is available in [the main API documentation](https://www.bitmex.com/app/restAPI).  *All* table data is available via the [Websocket](/app/wsAPI). We highly recommend using the socket if you want to have the quickest possible data without being subject to ratelimits.  ##### Return Types  By default, all data is returned as JSON. Send `?_format=csv` to get CSV data or `?_format=xml` to get XML data.  ##### Trade Data Queries  *This is only a small subset of what is available, to get you started.*  Fill in the parameters and click the `Try it out!` button to try any of these queries.  * [Pricing Data](#!/Quote/Quote_get)  * [Trade Data](#!/Trade/Trade_get)  * [OrderBook Data](#!/OrderBook/OrderBook_getL2)  * [Settlement Data](#!/Settlement/Settlement_get)  * [Exchange Statistics](#!/Stats/Stats_history)  Every function of the BitMEX.com platform is exposed here and documented. Many more functions are available.  ##### Swagger Specification  [⇩ Download Swagger JSON](swagger.json)    ## All API Endpoints  Click to expand a section. 
 *
 * OpenAPI spec version: 1.2.0
 * Contact: support@bitmex.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import OrderBook from '../model/OrderBook';
import OrderBookL2 from '../model/OrderBookL2';

/**
* OrderBook service.
* @module api/OrderBookApi
* @version 1.2.0
*/
export default class OrderBookApi {

    /**
    * Constructs a new OrderBookApi. 
    * @alias module:api/OrderBookApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the orderBookGet operation.
     * @callback module:api/OrderBookApi~orderBookGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderBook>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current orderbook [deprecated, use /orderBook/L2].
     * @param {String} symbol Instrument symbol. Send a series (e.g. XBT) to get data for the nearest contract in that series.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.depth Orderbook depth. (default to 25)
     * @param {module:api/OrderBookApi~orderBookGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderBook>}
     */
    orderBookGet(symbol, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling orderBookGet");
      }


      let pathParams = {
      };
      let queryParams = {
        'symbol': symbol,
        'depth': opts['depth']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = [OrderBook];

      return this.apiClient.callApi(
        '/orderBook', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the orderBookGetL2 operation.
     * @callback module:api/OrderBookApi~orderBookGetL2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderBookL2>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current orderbook in vertical format.
     * @param {String} symbol Instrument symbol. Send a series (e.g. XBT) to get data for the nearest contract in that series.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.depth Orderbook depth per side. Send 0 for full depth. (default to 25)
     * @param {module:api/OrderBookApi~orderBookGetL2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderBookL2>}
     */
    orderBookGetL2(symbol, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling orderBookGetL2");
      }


      let pathParams = {
      };
      let queryParams = {
        'symbol': symbol,
        'depth': opts['depth']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = [OrderBookL2];

      return this.apiClient.callApi(
        '/orderBook/L2', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
