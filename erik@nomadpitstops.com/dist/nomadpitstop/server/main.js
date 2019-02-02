(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@agm/core/directives/info-window.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.js ***!
  \**********************************************************/
/*! exports provided: AgmInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = /** @class */ (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
           * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
           */
        this.isOpen = false;
        /**
           * Emits an event when the info window is closed.
           */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    /**
       * Opens the info window.
       */
    AgmInfoWindow.prototype.open = /**
       * Opens the info window.
       */
    function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    /**
       * Closes the info window.
       */
    AgmInfoWindow.prototype.close = /**
       * Closes the info window.
       */
    function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.toString = /** @internal */
    function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = /** @internal */
    function () { this._infoWindowManager.deleteInfoWindow(this); };
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    AgmInfoWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-info-window',
                    template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmInfoWindow.ctorParameters = function () { return [
        { type: _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    AgmInfoWindow.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableAutoPan": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "infoWindowClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmInfoWindow;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/info-window.ngfactory.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.ngfactory.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./info-window */ "./node_modules/@agm/core/directives/info-window.js");
var i2 = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
var styles_AgmInfoWindow = [];
var RenderType_AgmInfoWindow = i0.ɵcrt({ encapsulation: 2, styles: styles_AgmInfoWindow, data: {} });
exports.RenderType_AgmInfoWindow = RenderType_AgmInfoWindow;
function View_AgmInfoWindow_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "agm-info-window-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_AgmInfoWindow_0 = View_AgmInfoWindow_0;
function View_AgmInfoWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "agm-info-window", [], null, null, null, View_AgmInfoWindow_0, RenderType_AgmInfoWindow)), i0.ɵdid(1, 770048, null, 0, i1.AgmInfoWindow, [i2.InfoWindowManager, i0.ElementRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AgmInfoWindow_Host_0 = View_AgmInfoWindow_Host_0;
var AgmInfoWindowNgFactory = i0.ɵccf("agm-info-window", i1.AgmInfoWindow, View_AgmInfoWindow_Host_0, { latitude: "latitude", longitude: "longitude", disableAutoPan: "disableAutoPan", zIndex: "zIndex", maxWidth: "maxWidth", isOpen: "isOpen" }, { infoWindowClose: "infoWindowClose" }, ["*"]);
exports.AgmInfoWindowNgFactory = AgmInfoWindowNgFactory;


/***/ }),

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");











/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */
        this.fitBounds = false;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(function (b) { return _this._updateBounds(b); });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds)) {
            var newBounds = google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (bounds.isEmpty()) {
            return;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__["RectangleManager"],
                        _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__["PolylineManager"], _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"],
                        _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableDefaultUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollwheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backgroundColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggableCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggingCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardShortcuts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePanning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickableIcons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gestureHandling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapTypeIdChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "idle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.ngfactory.js":
/*!************************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
var i2 = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var i3 = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
var i4 = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
var i5 = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
var i6 = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
var i7 = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
var i8 = __webpack_require__(/*! ../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
var i9 = __webpack_require__(/*! ../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
var i10 = __webpack_require__(/*! ../services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var i11 = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
var i12 = __webpack_require__(/*! ./map */ "./node_modules/@agm/core/directives/map.js");
var styles_AgmMap = [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"];
var RenderType_AgmMap = i0.ɵcrt({ encapsulation: 0, styles: styles_AgmMap, data: {} });
exports.RenderType_AgmMap = RenderType_AgmMap;
function View_AgmMap_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "agm-map-container-inner sebm-google-map-container-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "agm-map-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_AgmMap_0 = View_AgmMap_0;
function View_AgmMap_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, View_AgmMap_0, RenderType_AgmMap)), i0.ɵprd(4608, null, i1.MarkerManager, i1.MarkerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i3.InfoWindowManager, i3.InfoWindowManager, [i2.GoogleMapsAPIWrapper, i0.NgZone, i1.MarkerManager]), i0.ɵprd(4608, null, i4.CircleManager, i4.CircleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i5.RectangleManager, i5.RectangleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i6.PolylineManager, i6.PolylineManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i7.PolygonManager, i7.PolygonManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i8.KmlLayerManager, i8.KmlLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i9.DataLayerManager, i9.DataLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(512, null, i2.GoogleMapsAPIWrapper, i2.GoogleMapsAPIWrapper, [i10.MapsAPILoader, i0.NgZone]), i0.ɵprd(512, null, i11.FitBoundsService, i11.FitBoundsService, [i10.MapsAPILoader]), i0.ɵdid(11, 770048, null, 0, i12.AgmMap, [i0.ElementRef, i2.GoogleMapsAPIWrapper, i11.FitBoundsService], null, null)], function (_ck, _v) { _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
exports.View_AgmMap_Host_0 = View_AgmMap_Host_0;
var AgmMapNgFactory = i0.ɵccf("agm-map", i12.AgmMap, View_AgmMap_Host_0, { longitude: "longitude", latitude: "latitude", zoom: "zoom", minZoom: "minZoom", maxZoom: "maxZoom", draggable: "mapDraggable", disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", keyboardShortcuts: "keyboardShortcuts", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions", styles: "styles", usePanning: "usePanning", streetViewControl: "streetViewControl", streetViewControlOptions: "streetViewControlOptions", fitBounds: "fitBounds", scaleControl: "scaleControl", scaleControlOptions: "scaleControlOptions", mapTypeControl: "mapTypeControl", mapTypeControlOptions: "mapTypeControlOptions", panControl: "panControl", panControlOptions: "panControlOptions", rotateControl: "rotateControl", rotateControlOptions: "rotateControlOptions", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", gestureHandling: "gestureHandling" }, { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady" }, ["*"]);
exports.AgmMapNgFactory = AgmMapNgFactory;


/***/ }),

/***/ "./node_modules/@agm/core/services/fit-bounds.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/services/fit-bounds.js ***!
  \*******************************************************/
/*! exports provided: FitBoundsAccessor, FitBoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsService", function() { return FitBoundsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var /**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FitBoundsService.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], },
    ]; };
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    /**
       * Creates a google.map.Rectangle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createRectangle = /**
       * Creates a google.map.Rectangle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/rectangle-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/rectangle-manager.js ***!
  \***********************************************************************/
/*! exports provided: RectangleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    /**
       * Removes the given rectangle from the map.
       */
    RectangleManager.prototype.removeRectangle = /**
       * Removes the given rectangle from the map.
       */
    function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.less.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.less.shim.ngstyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\napp-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 4;\n  width: 100%;\n  pointer-events: none;\n  top: 0;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.less.shim.ngstyle */ "./src/app/app.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./components/navbar/navbar.component.ngfactory */ "./src/app/components/navbar/navbar.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
var i4 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: { "animation": [{ type: 7, name: "routeAnimation", definitions: [{ type: 1, expr: "1 => 2, 2 => 3", animation: [{ type: 6, styles: { height: "!" }, offset: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "translateX(100%)" }, offset: null }, options: null }, { type: 11, selector: ":enter, :leave", animation: { type: 6, styles: { position: "absolute", top: 0, left: 0, right: 0 }, offset: null }, options: null }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(-100%)" }, offset: null }, timings: "0.3s cubic-bezier(.35,0,.25,1)" }], options: null }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { transform: "translateX(0)" }, offset: null }, timings: "0.3s cubic-bezier(.35,0,.25,1)" }, options: null }], options: null }], options: null }, { type: 1, expr: "3 => 2, 2 => 1", animation: [{ type: 6, styles: { height: "!" }, offset: null }, { type: 11, selector: ":enter", animation: { type: 6, styles: { transform: "translateX(-100%)" }, offset: null }, options: null }, { type: 11, selector: ":enter, :leave", animation: { type: 6, styles: { position: "absolute", top: 0, left: 0, right: 0 }, offset: null }, options: null }, { type: 3, steps: [{ type: 11, selector: ":leave", animation: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(100%)" }, offset: null }, timings: "0.3s cubic-bezier(.35,0,.25,1)" }], options: null }, { type: 11, selector: ":enter", animation: { type: 4, styles: { type: 6, styles: { transform: "translateX(0)" }, offset: null }, timings: "0.3s cubic-bezier(.35,0,.25,1)" }, options: null }], options: null }], options: null }], options: {} }] } });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-navbar", [], null, null, null, i2.View_NavbarComponent_0, i2.RenderType_NavbarComponent)), i1.ɵdid(1, 114688, null, 0, i3.NavbarComponent, [i4.WINDOW], null, null), (_l()(), i1.ɵeld(2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(3, 212992, [["routerOutlet", 4]], 0, i5.RouterOutlet, [i5.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 114688, null, 0, i6.AppComponent, [i4.WINDOW, i5.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i6.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var environment_1 = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(window, router) {
        this.window = window;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (event) {
            if (!environment_1.environment.production)
                return;
            if (!window)
                return;
            if (event instanceof router_1.NavigationEnd) {
                window.ga('set', 'page', event.urlAfterRedirects);
                window.ga('send', 'pageview');
            }
        });
    };
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var map_component_1 = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
var login_component_1 = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var signup_component_1 = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
var blogs_component_1 = __webpack_require__(/*! ./components/blogs/blogs.component */ "./src/app/components/blogs/blogs.component.ts");
var blog_component_1 = __webpack_require__(/*! ./components/blogs/blog/blog.component */ "./src/app/components/blogs/blog/blog.component.ts");
var near_component_1 = __webpack_require__(/*! ./components/near/near.component */ "./src/app/components/near/near.component.ts");
var landing_component_1 = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
var about_component_1 = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
var ɵ0 = { depth: 1 }, ɵ1 = { depth: 1 }, ɵ2 = { depth: 2 }, ɵ3 = { depth: 3 };
exports.ɵ0 = ɵ0;
exports.ɵ1 = ɵ1;
exports.ɵ2 = ɵ2;
exports.ɵ3 = ɵ3;
var appRoutes = [
    { path: '', component: landing_component_1.LandingComponent, data: ɵ0 },
    { path: 'map', component: map_component_1.MapComponent, data: ɵ1 },
    { path: 'login', component: login_component_1.LoginComponent, data: ɵ2 },
    { path: 'signup', component: signup_component_1.SignupComponent, data: ɵ3 },
    { path: 'blog', component: blogs_component_1.BlogsComponent },
    { path: 'blog/:id', component: blog_component_1.BlogComponent },
    { path: 'pitstops/map/:id', component: map_component_1.MapComponent },
    { path: 'nearme', component: near_component_1.NearComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./components/landing/landing.component.ngfactory */ "./src/app/components/landing/landing.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./components/map/map.component.ngfactory */ "./src/app/components/map/map.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./components/login/login.component.ngfactory */ "./src/app/components/login/login.component.ngfactory.js");
var i7 = __webpack_require__(/*! ./components/signup/signup.component.ngfactory */ "./src/app/components/signup/signup.component.ngfactory.js");
var i8 = __webpack_require__(/*! ./components/blogs/blogs.component.ngfactory */ "./src/app/components/blogs/blogs.component.ngfactory.js");
var i9 = __webpack_require__(/*! ./components/blogs/blog/blog.component.ngfactory */ "./src/app/components/blogs/blog/blog.component.ngfactory.js");
var i10 = __webpack_require__(/*! ./components/near/near.component.ngfactory */ "./src/app/components/near/near.component.ngfactory.js");
var i11 = __webpack_require__(/*! ./components/about/about.component.ngfactory */ "./src/app/components/about/about.component.ngfactory.js");
var i12 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i13 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i14 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i15 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i16 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i17 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i18 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i19 = __webpack_require__(/*! @nguniversal/common */ "@nguniversal/common");
var i20 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i21 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i22 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i23 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i24 = __webpack_require__(/*! @agm/core/utils/browser-globals */ "@agm/core/utils/browser-globals");
var i25 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i26 = __webpack_require__(/*! @agm/core/services/maps-api-loader/lazy-maps-api-loader */ "@agm/core/services/maps-api-loader/lazy-maps-api-loader");
var i27 = __webpack_require__(/*! ./services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var i28 = __webpack_require__(/*! ./services/blog/blog.service */ "./src/app/services/blog/blog.service.ts");
var i29 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i30 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i31 = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
var i32 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var i33 = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
var i34 = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var i35 = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
var i36 = __webpack_require__(/*! ./components/blogs/blogs.component */ "./src/app/components/blogs/blogs.component.ts");
var i37 = __webpack_require__(/*! ./components/blogs/blog/blog.component */ "./src/app/components/blogs/blog/blog.component.ts");
var i38 = __webpack_require__(/*! ./components/near/near.component */ "./src/app/components/near/near.component.ts");
var i39 = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
var i40 = __webpack_require__(/*! @agm/core/core.module */ "@agm/core/core.module");
var i41 = __webpack_require__(/*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.module */ "ngx-google-places-autocomplete/ngx-google-places-autocomplete.module");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.LandingComponentNgFactory, i5.MapComponentNgFactory, i6.LoginComponentNgFactory, i7.SignupComponentNgFactory, i8.BlogsComponentNgFactory, i9.BlogComponentNgFactory, i10.NearComponentNgFactory, i11.AboutComponentNgFactory, i12.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_k, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i13.NgLocalization, i13.NgLocaleLocalization, [i0.LOCALE_ID, [2, i13.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_i, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(4608, i14.DomSanitizer, i14.ɵDomSanitizerImpl, [i13.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i14.DomSanitizer]), i0.ɵmpd(4608, i14.HAMMER_GESTURE_CONFIG, i14.HammerGestureConfig, []), i0.ɵmpd(5120, i14.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i14.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i14.ɵKeyEventsPlugin(p1_0), new i14.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i15.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i13.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i13.DOCUMENT, i13.DOCUMENT, i14.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i14.HAMMER_LOADER], i14.DOCUMENT]), i0.ɵmpd(4608, i14.EventManager, i14.EventManager, [i14.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i14.ɵDomSharedStylesHost, i14.ɵDomSharedStylesHost, [i13.DOCUMENT]), i0.ɵmpd(4608, i14.ɵDomRendererFactory2, i14.ɵDomRendererFactory2, [i14.EventManager, i14.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i15.ɵangular_packages_platform_server_platform_server_c, i15.ɵangular_packages_platform_server_platform_server_c, [i14.DOCUMENT, [2, i14.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i14.ɵSharedStylesHost, null, [i15.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i15.ɵServerRendererFactory2, i15.ɵServerRendererFactory2, [i14.EventManager, i0.NgZone, i14.DOCUMENT, i14.ɵSharedStylesHost]), i0.ɵmpd(4608, i16.AnimationDriver, i16.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i16.ɵAnimationStyleNormalizer, i17.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i16.ɵAnimationEngine, i17.ɵangular_packages_platform_browser_animations_animations_a, [i13.DOCUMENT, i16.AnimationDriver, i16.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i15.ɵangular_packages_platform_server_platform_server_a, [i15.ɵServerRendererFactory2, i16.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i18.ɵa, i18.ɵa, [i0.PLATFORM_ID]), i0.ɵmpd(5120, i18.WINDOW, i18.windowFactory, [i18.ɵa]), i0.ɵmpd(4608, i18.DocumentService, i18.DocumentService, [i0.PLATFORM_ID]), i0.ɵmpd(5120, i18.NGT_DOCUMENT, i18.documentFactory, [i18.DocumentService]), i0.ɵmpd(4608, i18.ɵb, i18.ɵb, [i0.PLATFORM_ID]), i0.ɵmpd(5120, i18.LOCAL_STORAGE, i18.localStorageFactory, [i18.ɵb]), i0.ɵmpd(4608, i14.TransferState, i14.TransferState, []), i0.ɵmpd(4608, i19.ɵnguniversal_modules_common_common_a, i19.ɵnguniversal_modules_common_common_a, [i0.ApplicationRef, i14.TransferState]), i0.ɵmpd(4608, i20.HttpXsrfTokenExtractor, i20.ɵangular_packages_common_http_http_g, [i13.DOCUMENT, i0.PLATFORM_ID, i20.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i20.ɵangular_packages_common_http_http_h, i20.ɵangular_packages_common_http_http_h, [i20.HttpXsrfTokenExtractor, i20.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i20.HTTP_INTERCEPTORS, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i19.ɵnguniversal_modules_common_common_a, i20.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i20.XhrFactory, i15.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i20.HttpXhrBackend, i20.HttpXhrBackend, [i20.XhrFactory]), i0.ɵmpd(6144, i20.HttpBackend, null, [i20.HttpXhrBackend]), i0.ɵmpd(5120, i20.HttpHandler, i15.ɵangular_packages_platform_server_platform_server_h, [i20.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i20.HttpClient, i20.HttpClient, [i20.HttpHandler]), i0.ɵmpd(4608, i20.ɵangular_packages_common_http_http_d, i20.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(4608, i21.ɵangular_packages_forms_forms_i, i21.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i22.AnimationBuilder, i17.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i14.DOCUMENT]), i0.ɵmpd(5120, i23.ActivatedRoute, i23.ɵangular_packages_router_router_g, [i23.Router]), i0.ɵmpd(4608, i23.NoPreloading, i23.NoPreloading, []), i0.ɵmpd(6144, i23.PreloadingStrategy, null, [i23.NoPreloading]), i0.ɵmpd(135680, i23.RouterPreloader, i23.RouterPreloader, [i23.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i23.PreloadingStrategy]), i0.ɵmpd(4608, i23.PreloadAllModules, i23.PreloadAllModules, []), i0.ɵmpd(4608, i13.ViewportScroller, i13.ɵNullViewportScroller, []), i0.ɵmpd(5120, i23.ɵangular_packages_router_router_n, i23.ɵangular_packages_router_router_c, [i23.Router, i13.ViewportScroller, i23.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i23.ROUTER_INITIALIZER, i23.ɵangular_packages_router_router_j, [i23.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i23.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i24.WindowRef, i24.WindowRef, []), i0.ɵmpd(4608, i24.DocumentRef, i24.DocumentRef, []), i0.ɵmpd(4608, i25.MapsAPILoader, i26.LazyMapsAPILoader, [[2, i26.LAZY_MAPS_API_CONFIG], i24.WindowRef, i24.DocumentRef]), i0.ɵmpd(4608, i27.PitstopService, i27.PitstopService, [i18.WINDOW, i20.HttpClient]), i0.ɵmpd(4608, i28.BlogService, i28.BlogService, [i18.WINDOW, i20.HttpClient]), i0.ɵmpd(4608, i29.BrowserXhr, i15.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i29.ResponseOptions, i29.BaseResponseOptions, []), i0.ɵmpd(4608, i29.XSRFStrategy, i15.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i29.XHRBackend, i29.XHRBackend, [i29.BrowserXhr, i29.ResponseOptions, i29.XSRFStrategy]), i0.ɵmpd(4608, i29.RequestOptions, i29.BaseRequestOptions, []), i0.ɵmpd(5120, i29.Http, i15.ɵangular_packages_platform_server_platform_server_g, [i29.XHRBackend, i29.RequestOptions]), i0.ɵmpd(5120, i15.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i15.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i14.DOCUMENT, i0.APP_ID, i14.TransferState]), i0.ɵmpd(1073742336, i13.CommonModule, i13.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i14.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i23.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i23.ɵangular_packages_router_router_h, i23.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "app-root", []), i0.ɵmpd(2048, i14.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i14.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i23.ɵangular_packages_router_router_i(p1_0), i14.ɵangular_packages_platform_browser_platform_browser_h(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i23.ɵangular_packages_router_router_h, i14.ɵTRANSITION_ID, i13.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i14.BrowserModule, i14.BrowserModule, [[3, i14.BrowserModule]]), i0.ɵmpd(1073742336, i18.NgtUniversalModule, i18.NgtUniversalModule, []), i0.ɵmpd(1073742336, i14.BrowserTransferStateModule, i14.BrowserTransferStateModule, []), i0.ɵmpd(1073742336, i19.TransferHttpCacheModule, i19.TransferHttpCacheModule, []), i0.ɵmpd(1073742336, i20.HttpClientXsrfModule, i20.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i20.HttpClientModule, i20.HttpClientModule, []), i0.ɵmpd(1073742336, i21.ɵangular_packages_forms_forms_bb, i21.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i21.FormsModule, i21.FormsModule, []), i0.ɵmpd(1024, i23.ɵangular_packages_router_router_a, i23.ɵangular_packages_router_router_e, [[3, i23.Router]]), i0.ɵmpd(512, i23.UrlSerializer, i23.DefaultUrlSerializer, []), i0.ɵmpd(512, i23.ChildrenOutletContexts, i23.ChildrenOutletContexts, []), i0.ɵmpd(256, i23.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i13.LocationStrategy, i23.ɵangular_packages_router_router_d, [i13.PlatformLocation, [2, i13.APP_BASE_HREF], i23.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i13.Location, i13.Location, [i13.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i30.ModuleMapNgFactoryLoader, [i0.Compiler, i30.MODULE_MAP]), i0.ɵmpd(1024, i23.ROUTES, function () { return [[{ path: "", component: i31.LandingComponent, data: i32.ɵ0 }, { path: "map", component: i33.MapComponent, data: i32.ɵ1 }, { path: "login", component: i34.LoginComponent, data: i32.ɵ2 }, { path: "signup", component: i35.SignupComponent, data: i32.ɵ3 }, { path: "blog", component: i36.BlogsComponent }, { path: "blog/:id", component: i37.BlogComponent }, { path: "pitstops/map/:id", component: i33.MapComponent }, { path: "nearme", component: i38.NearComponent }, { path: "about", component: i39.AboutComponent }]]; }, []), i0.ɵmpd(1024, i23.Router, i23.ɵangular_packages_router_router_f, [i0.ApplicationRef, i23.UrlSerializer, i23.ChildrenOutletContexts, i13.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i23.ROUTES, i23.ROUTER_CONFIGURATION, [2, i23.UrlHandlingStrategy], [2, i23.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i23.RouterModule, i23.RouterModule, [[2, i23.ɵangular_packages_router_router_a], [2, i23.Router]]), i0.ɵmpd(1073742336, i40.AgmCoreModule, i40.AgmCoreModule, []), i0.ɵmpd(1073742336, i17.BrowserAnimationsModule, i17.BrowserAnimationsModule, []), i0.ɵmpd(1073742336, i41.GooglePlaceModule, i41.GooglePlaceModule, []), i0.ɵmpd(1073742336, i32.AppModule, i32.AppModule, []), i0.ɵmpd(1073742336, i29.HttpModule, i29.HttpModule, []), i0.ɵmpd(1073742336, i17.NoopAnimationsModule, i17.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i15.ServerModule, i15.ServerModule, []), i0.ɵmpd(1073742336, i30.ModuleMapLoaderModule, i30.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i15.ServerTransferStateModule, i15.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i20.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i20.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i17.ANIMATION_MODULE_TYPE, "NoopAnimations", []), i0.ɵmpd(256, i26.LAZY_MAPS_API_CONFIG, { apiKey: "AIzaSyBl8LKxRF1gdmnZjW5NHf3DEHcGCa7AVzY" }, [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/components/about/about.component.less.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/about/about.component.less.shim.ngstyle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n.main[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #f9f9f9;\n  overflow-y: auto;\n  padding: 2rem;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/about/about.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/components/about/about.component.ngfactory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./about.component.less.shim.ngstyle */ "./src/app/components/about/about.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");
var styles_AboutComponent = [i0.styles];
var RenderType_AboutComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AboutComponent, data: {} });
exports.RenderType_AboutComponent = RenderType_AboutComponent;
function View_AboutComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 27, "div", [["class", "main"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "h1", [["class", "__text-heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["What is Nomad Pit Stops?"])), (_l()(), i1.ɵeld(3, 0, null, null, 8, "p", [["class", "__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Nomad Pit Stops was created with the sole purpose of sharing amazing places to work remote across the globe. Weather you are a full time traveling digital nomad or a seasonal virtual vagabond we sincerely believe that you will find something for you here. Check out our map "])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "a", [["href", "/map"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Map"])), (_l()(), i1.ɵted(-1, null, [" to see pit stops near you or to seek out the next coffee shop to camp out at on your next adventure \u2615 . Make sure you stop by our "])), (_l()(), i1.ɵeld(8, 0, null, null, 2, "a", [["routerLink", "/blog"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(9, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["blog"])), (_l()(), i1.ɵted(-1, null, [" to see what adventures we are going on and maybe get inspired to skp the office the next couple of weeks \uD83C\uDFD6\uFE0F "])), (_l()(), i1.ɵeld(12, 0, null, null, 1, "p", [["class", "__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Happy Adventures!"])), (_l()(), i1.ɵeld(14, 0, null, null, 1, "p", [["class", "__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["NPS Team"])), (_l()(), i1.ɵeld(16, 0, null, null, 1, "h2", [["class", "__text-heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Credits"])), (_l()(), i1.ɵeld(18, 0, null, null, 9, "div", [["class", "__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Icons made by "])), (_l()(), i1.ɵeld(20, 0, null, null, 1, "a", [["href", "https://www.freepik.com/"], ["title", "Freepik"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Freepik"])), (_l()(), i1.ɵted(-1, null, [" from "])), (_l()(), i1.ɵeld(23, 0, null, null, 1, "a", [["href", "https://www.flaticon.com/"], ["title", "Flaticon"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["www.flaticon.com"])), (_l()(), i1.ɵted(-1, null, [" is licensed by "])), (_l()(), i1.ɵeld(26, 0, null, null, 1, "a", [["href", "http://creativecommons.org/licenses/by/3.0/"], ["target", "_blank"], ["title", "Creative Commons BY 3.0"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CC 3.0 BY"]))], function (_ck, _v) { var currVal_2 = "/blog"; _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 9).target; var currVal_1 = i1.ɵnov(_v, 9).href; _ck(_v, 8, 0, currVal_0, currVal_1); }); }
exports.View_AboutComponent_0 = View_AboutComponent_0;
function View_AboutComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), i1.ɵdid(1, 114688, null, 0, i4.AboutComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AboutComponent_Host_0 = View_AboutComponent_Host_0;
var AboutComponentNgFactory = i1.ɵccf("app-about", i4.AboutComponent, View_AboutComponent_Host_0, {}, {}, []);
exports.AboutComponentNgFactory = AboutComponentNgFactory;


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/components/adder/adder.component.less.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/adder/adder.component.less.shim.ngstyle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n.adder[_ngcontent-%COMP%] {\n  z-index: 500;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  pointer-events: all;\n  cursor: pointer;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n      grid-template-areas: 'icon';\n  align-items: center;\n  justify-content: center;\n  background-color: #2B292B;\n  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.43);\n  transition: width 0.5s, border-radius 0.5s, height 0.5s, box-shadow 0.5s;\n}\n.adder[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: icon;\n  width: auto;\n  height: auto;\n  position: absolute;\n  font-size: 40px;\n  color: #c29d52;\n  transition: color 2s, background-color 0.5s;\n}\n.adder[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: content;\n  color: #c29d52;\n  text-shadow: 1px -1px 0px #6e582c, 2px -2px 0px #6e582c;\n      justify-self: center;\n}\n.adder[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.adder[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.7);\n}\n.adder.open[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0;\n  right: 0;\n  bottom: 0;\n      grid-template-areas: 'content';\n}\n.adder.open[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  align-self: flex-start;\n  color: #2B292B;\n  background-color: #c29d52;\n  -ms-grid-column-align: left;\n      justify-self: left;\n}\n.adder.expand[_ngcontent-%COMP%] {\n  height: 100%;\n  bottom: 0;\n}\nform[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: flex;\n  flex-direction: column;\n}\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\nform[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n}\nform[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 600px;\n}\n@media screen and (max-width: 600px) {\n  form[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    display: flex;\n    flex-direction: column;\n  }\n  form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  form[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n  }\n  form[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 325px;\n  }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/adder/adder.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/components/adder/adder.component.ngfactory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./adder.component.less.shim.ngstyle */ "./src/app/components/adder/adder.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./adder.component */ "./src/app/components/adder/adder.component.ts");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var styles_AdderComponent = [i0.styles];
var RenderType_AdderComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AdderComponent, data: {} });
exports.RenderType_AdderComponent = RenderType_AdderComponent;
function View_AdderComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "form"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "button", [["class", "button primary"], ["href", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onLogin() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, [" Log In "])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "button", [["class", "button secoundary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSignup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, [" Sign Up "]))], null, null); }
function View_AdderComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Select a point"]))], null, null); }
function View_AdderComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "button", [["class", "button primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.expandAdder($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, [" Add Pitstop "]))], null, null); }
function View_AdderComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 27, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onAddPitstop() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(2, 4210688, null, 0, i2.NgForm, [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i1.ɵdid(4, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(5, 0, null, null, 5, "input", [["name", "pitstopName"], ["placeholder", "Pitstop Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 6)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 6)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 6)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.pitstopName = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(6, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(8, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(10, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(11, 0, null, null, 5, "textarea", [["name", "pitstopNotes"], ["placeholder", "Notes"], ["rows", "8"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 12)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 12).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 12)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 12)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.pitstopNotes = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(12, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(14, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(16, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(17, 0, null, null, 8, "div", [["class", "range"]], null, null, null, null, null)), (_l()(), i1.ɵted(18, null, [" internet speed : ", " "])), (_l()(), i1.ɵeld(19, 0, null, null, 6, "input", [["max", "5"], ["min", "0"], ["name", "internetSpeed"], ["type", "range"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 20)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 20).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 20)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 20)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (i1.ɵnov(_v, 21).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (i1.ɵnov(_v, 21).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (i1.ɵnov(_v, 21).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.internetSpeed = $event) !== false);
        ad = (pd_7 && ad);
    } if (("input" === en)) {
        var pd_8 = (_co.onInternetSpeedChange($event) !== false);
        ad = (pd_8 && ad);
    } return ad; }, null, null)), i1.ɵdid(20, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(21, 16384, null, 0, i2.ɵangular_packages_forms_forms_bf, [i1.Renderer2, i1.ElementRef], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i2.DefaultValueAccessor, i2.ɵangular_packages_forms_forms_bf]), i1.ɵdid(23, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(25, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(26, 0, null, null, 1, "button", [["class", "button primary"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Add Pitstop"]))], function (_ck, _v) { var _co = _v.component; var currVal_14 = "pitstopName"; var currVal_15 = _co.pitstopName; _ck(_v, 8, 0, currVal_14, currVal_15); var currVal_23 = "pitstopNotes"; var currVal_24 = _co.pitstopNotes; _ck(_v, 14, 0, currVal_23, currVal_24); var currVal_33 = "internetSpeed"; var currVal_34 = _co.internetSpeed; _ck(_v, 23, 0, currVal_33, currVal_34); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 4).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 4).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 4).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 4).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 4).ngClassValid; var currVal_5 = i1.ɵnov(_v, 4).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = i1.ɵnov(_v, 10).ngClassUntouched; var currVal_8 = i1.ɵnov(_v, 10).ngClassTouched; var currVal_9 = i1.ɵnov(_v, 10).ngClassPristine; var currVal_10 = i1.ɵnov(_v, 10).ngClassDirty; var currVal_11 = i1.ɵnov(_v, 10).ngClassValid; var currVal_12 = i1.ɵnov(_v, 10).ngClassInvalid; var currVal_13 = i1.ɵnov(_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_16 = i1.ɵnov(_v, 16).ngClassUntouched; var currVal_17 = i1.ɵnov(_v, 16).ngClassTouched; var currVal_18 = i1.ɵnov(_v, 16).ngClassPristine; var currVal_19 = i1.ɵnov(_v, 16).ngClassDirty; var currVal_20 = i1.ɵnov(_v, 16).ngClassValid; var currVal_21 = i1.ɵnov(_v, 16).ngClassInvalid; var currVal_22 = i1.ɵnov(_v, 16).ngClassPending; _ck(_v, 11, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_25 = _co.internetValue; _ck(_v, 18, 0, currVal_25); var currVal_26 = i1.ɵnov(_v, 25).ngClassUntouched; var currVal_27 = i1.ɵnov(_v, 25).ngClassTouched; var currVal_28 = i1.ɵnov(_v, 25).ngClassPristine; var currVal_29 = i1.ɵnov(_v, 25).ngClassDirty; var currVal_30 = i1.ɵnov(_v, 25).ngClassValid; var currVal_31 = i1.ɵnov(_v, 25).ngClassInvalid; var currVal_32 = i1.ɵnov(_v, 25).ngClassPending; _ck(_v, 19, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); }); }
function View_AdderComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_AdderComponent_6)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i1.ɵand(0, [["isExpanded", 2]], null, 0, null, View_AdderComponent_7))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.expanded; var currVal_1 = i1.ɵnov(_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AdderComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_AdderComponent_4)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i1.ɵand(0, [["hasPoint", 2]], null, 0, null, View_AdderComponent_5))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.point; var currVal_1 = i1.ɵnov(_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AdderComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AdderComponent_2)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i1.ɵand(0, [["loggedIn", 2]], null, 0, null, View_AdderComponent_3))], function (_ck, _v) { var currVal_0 = !i1.ɵnov(_v, 3); var currVal_1 = i1.ɵnov(_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_AdderComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "icon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleAdder($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(2, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AdderComponent_1)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.open; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "adder ", _co.modifier, " themed-text"); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.adderIcon; _ck(_v, 2, 0, currVal_1); }); }
exports.View_AdderComponent_0 = View_AdderComponent_0;
function View_AdderComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-adder", [], null, null, null, View_AdderComponent_0, RenderType_AdderComponent)), i1.ɵdid(1, 114688, null, 0, i4.AdderComponent, [i5.Router, i6.PitstopService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AdderComponent_Host_0 = View_AdderComponent_Host_0;
var AdderComponentNgFactory = i1.ɵccf("app-adder", i4.AdderComponent, View_AdderComponent_Host_0, { point: "point" }, { adding: "adding", add: "add" }, []);
exports.AdderComponentNgFactory = AdderComponentNgFactory;


/***/ }),

/***/ "./src/app/components/adder/adder.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/adder/adder.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var pitstop_service_1 = __webpack_require__(/*! ../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var AdderComponent = /** @class */ (function () {
    function AdderComponent(router, pitstopService) {
        this.router = router;
        this.pitstopService = pitstopService;
        this.modifier = '';
        this.adderIcon = '+';
        this.open = false;
        this.loggedIn = true;
        this.expanded = false;
        this.pitstopName = '';
        this.pitstopNotes = '';
        this.internetSpeed = 3;
        this.internetValue = 'Good';
        this.adding = new core_1.EventEmitter();
        this.add = new core_1.EventEmitter();
    }
    AdderComponent.prototype.ngOnInit = function () {
    };
    AdderComponent.prototype.toggleAdder = function (event) {
        if (this.open) {
            this.modifier = '';
            this.adderIcon = '+';
            this.open = false;
            this.adding.emit(false);
        }
        else if (!this.open) {
            this.modifier = 'open';
            this.adderIcon = '-';
            this.open = true;
            this.adding.emit(true);
        }
        this.expanded = false;
    };
    AdderComponent.prototype.expandAdder = function (event) {
        this.modifier = 'open expand';
        this.expanded = true;
    };
    AdderComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    AdderComponent.prototype.onSignup = function () {
        this.router.navigate(['/signup']);
    };
    AdderComponent.prototype.onInternetSpeedChange = function (event) {
        console.log(event.target.value);
        this.internetValue = this.internetWords(event.target.value);
        console.log(this.internetValue);
    };
    AdderComponent.prototype.onAddPitstop = function () {
        console.log('point', this.point);
        var pitstop = {
            name: this.pitstopName,
            notes: this.pitstopNotes,
            connection: this.internetSpeed,
            longitude: this.point.longitude,
            latitude: this.point.latitude,
            id: null,
        };
        this.modifier = '';
        this.expanded = false;
        this.open = false;
        this.adderIcon = '+';
        this.adding.emit(false);
        this.pitstopService.addPitstop(pitstop).subscribe(function () {
            this.add.emit(true);
        }.bind(this));
    };
    AdderComponent.prototype.internetWords = function (val) {
        var out;
        switch (val) {
            case '0':
                out = 'Awful';
                break;
            case '1':
                out = 'Very Bad';
                break;
            case '2':
                out = 'bad';
                break;
            case '3':
                out = 'Good';
                break;
            case '4':
                out = 'very good';
                break;
            default:
                out = 'Excellent';
                break;
        }
        return out;
    };
    return AdderComponent;
}());
exports.AdderComponent = AdderComponent;


/***/ }),

/***/ "./src/app/components/blogs/blog/blog.component.less.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/blogs/blog/blog.component.less.shim.ngstyle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".blog[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-color: white;\n  overflow: auto;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 1fr 4fr 1fr;\n      grid-template-columns: 1fr 4fr 1fr;\n      -ms-grid-rows: 80px auto;\n      grid-template-rows: 80px auto;\n      grid-template-areas: '. . .' '. content .';\n}\n.blog[_ngcontent-%COMP%]   .social-bar[_ngcontent-%COMP%] {\n  grid-area: social;\n}\n.blog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  -ms-grid-row: 2;\n  -ms-grid-column: 2;\n  grid-area: content;\n  font-family: 'Raleway', sans-serif;\n}\n.blog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  padding: 0px;\n  margin-bottom: 0px;\n}\n.blog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: gray;\n  padding: 0px;\n  margin: 0px;\n}\n.blog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/blogs/blog/blog.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/blogs/blog/blog.component.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./blog.component.less.shim.ngstyle */ "./src/app/components/blogs/blog/blog.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../social-share/social-share.component.ngfactory */ "./src/app/components/social-share/social-share.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../../social-share/social-share.component */ "./src/app/components/social-share/social-share.component.ts");
var i4 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ./blog.component */ "./src/app/components/blogs/blog/blog.component.ts");
var i7 = __webpack_require__(/*! ../../../services/blog/blog.service */ "./src/app/services/blog/blog.service.ts");
var i8 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_BlogComponent = [i0.styles];
var RenderType_BlogComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_BlogComponent, data: {} });
exports.RenderType_BlogComponent = RenderType_BlogComponent;
function View_BlogComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "div", [["class", "blog"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "div", [["class", "social-bar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 9, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h1", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "h3", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "h3", [["class", "__text-sub"]], null, null, null, null, null)), (_l()(), i1.ɵted(8, null, ["", ""])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "app-social-share", [], null, null, null, i2.View_SocialShareComponent_0, i2.RenderType_SocialShareComponent)), i1.ɵdid(10, 114688, null, 0, i3.SocialShareComponent, [i4.WINDOW, i5.Router], null, null), (_l()(), i1.ɵeld(11, 0, null, null, 0, "div", [["class", "body"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { _ck(_v, 10, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.date; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.author; _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.content; _ck(_v, 11, 0, currVal_3); }); }
exports.View_BlogComponent_0 = View_BlogComponent_0;
function View_BlogComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-blog", [], null, null, null, View_BlogComponent_0, RenderType_BlogComponent)), i1.ɵdid(1, 114688, null, 0, i6.BlogComponent, [i5.ActivatedRoute, i7.BlogService, i8.Meta, i5.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_BlogComponent_Host_0 = View_BlogComponent_Host_0;
var BlogComponentNgFactory = i1.ɵccf("app-blog", i6.BlogComponent, View_BlogComponent_Host_0, {}, {}, []);
exports.BlogComponentNgFactory = BlogComponentNgFactory;


/***/ }),

/***/ "./src/app/components/blogs/blog/blog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/blogs/blog/blog.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var blog_service_1 = __webpack_require__(/*! ../../../services/blog/blog.service */ "./src/app/services/blog/blog.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var BlogComponent = /** @class */ (function () {
    function BlogComponent(route, blogService, meta, router) {
        this.route = route;
        this.blogService = blogService;
        this.meta = meta;
        this.router = router;
        // this.moment = moment.Moment = moment('')
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getBlog();
        // this.moment = moment();
    };
    BlogComponent.prototype.getBlog = function () {
        var _this = this;
        if (!this.route)
            return;
        this.route.params.subscribe(function (params) {
            _this.blogService.getBlog(params.id).subscribe(function (data) {
                _this.title = data.info.title;
                _this.author = data.info.author;
                _this.content = data.content;
                console.log('params', _this.router.url);
                _this.setTags();
            });
            // console.log('route params', moment(data.info.datePublished));
        });
    };
    BlogComponent.prototype.setTags = function () {
        this.meta.addTag({ name: 'og:title', content: String(this.title) });
        this.meta.addTag({ name: 'og:description', content: String(this.snippet) });
        this.meta.addTag({ name: 'og:url', content: String("https://nomadpitstops.com" + this.router.url) });
        this.meta.addTag({ name: 'twitter:title', content: String(this.title) });
        this.meta.addTag({ name: 'twitter:description', content: String(this.snippet) });
        this.meta.addTag({ name: 'og:url', content: String("https://nomadpitstops.com" + this.router.url) });
    };
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;


/***/ }),

/***/ "./src/app/components/blogs/blogs.component.less.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/blogs/blogs.component.less.shim.ngstyle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n.body[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #2B292B;\n  overflow-y: auto;\n}\n.head[_ngcontent-%COMP%] {\n  border-bottom: 20px double #c29d52;\n}\n.head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  line-height: 1;\n  text-align: center;\n  color: #c29d52;\n  font-size: 3rem;\n}\n.posts[_ngcontent-%COMP%] {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 100px 50px;\n  margin: 1.5rem;\n  pointer-events: all;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  color: inherit;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -25%;\n  background-color: #c29d52;\n  width: 100%;\n  height: 30%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .readmore[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .readmore[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  height: 125%;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%]   .text-title[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  left: 0;\n  padding: initial;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%]   .readmore[_ngcontent-%COMP%] {\n  display: block;\n  visibility: visible;\n}\n.posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: block;\n  visibility: visible;\n}\n@media only screen and (max-width: 1200px) {\n  .posts[_ngcontent-%COMP%] {\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n  }\n}\n@media only screen and (max-width: 750px) {\n  .posts[_ngcontent-%COMP%] {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n  .posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n    margin: 2rem;\n  }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/blogs/blogs.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/components/blogs/blogs.component.ngfactory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./blogs.component.less.shim.ngstyle */ "./src/app/components/blogs/blogs.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./blogs.component */ "./src/app/components/blogs/blogs.component.ts");
var i5 = __webpack_require__(/*! ../../services/blog/blog.service */ "./src/app/services/blog/blog.service.ts");
var styles_BlogsComponent = [i0.styles];
var RenderType_BlogsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_BlogsComponent, data: {} });
exports.RenderType_BlogsComponent = RenderType_BlogsComponent;
function View_BlogsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "a", [["class", "post"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 6, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [["class", "__text-heading text-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "div", [["class", "__text description"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, dolorum, quia impedit quam quod placeat, blanditiis error iste dolore nobis consequuntur doloribus quasi dolorem fugiat voluptatibus reprehenderit eligendi saepe. Error. "])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "p", [["class", "__text-sub readmore"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Read More"]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.id, ""); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).target; var currVal_1 = i1.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.thumbnail, ""); _ck(_v, 3, 0, currVal_3); var currVal_4 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_4); }); }
function View_BlogsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "head themed-text shadow-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h1", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["- Blog -"])), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "posts"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_1)), i1.ɵdid(6, 278528, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.posts; _ck(_v, 6, 0, currVal_0); }, null); }
exports.View_BlogsComponent_0 = View_BlogsComponent_0;
function View_BlogsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-blogs", [], null, null, null, View_BlogsComponent_0, RenderType_BlogsComponent)), i1.ɵdid(1, 114688, null, 0, i4.BlogsComponent, [i5.BlogService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_BlogsComponent_Host_0 = View_BlogsComponent_Host_0;
var BlogsComponentNgFactory = i1.ɵccf("app-blogs", i4.BlogsComponent, View_BlogsComponent_Host_0, {}, {}, []);
exports.BlogsComponentNgFactory = BlogsComponentNgFactory;


/***/ }),

/***/ "./src/app/components/blogs/blogs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/blogs/blogs.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var blog_service_1 = __webpack_require__(/*! ../../services/blog/blog.service */ "./src/app/services/blog/blog.service.ts");
var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(blogService) {
        this.blogService = blogService;
        this.posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 4, 5, 6, 7,];
    }
    BlogsComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    BlogsComponent.prototype.getPosts = function () {
        var _this = this;
        this.blogService.getBlogs()
            .subscribe(function (data) {
            console.log('ok');
            _this.posts = data.posts;
        });
    };
    return BlogsComponent;
}());
exports.BlogsComponent = BlogsComponent;


/***/ }),

/***/ "./src/app/components/landing/landing.component.less.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/landing/landing.component.less.shim.ngstyle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n.main[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  background: #f9f9f9;\n  overflow-y: auto;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 25vw auto;\n      grid-template-columns: 25vw auto;\n      grid-template-areas: 'pitstops blog';\n}\n.main[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%] {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: blog;\n}\n.main[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-heading[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.main[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  margin: 1rem;\n  color: initial;\n  text-decoration: initial;\n}\n.main[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.main[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.main[_ngcontent-%COMP%]   .pitstops[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 25vw;\n  position: fixed;\n  background-color: #2B292B;\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: pitstops;\n  overflow: hidden;\n}\n.main[_ngcontent-%COMP%]   .pitstops[_ngcontent-%COMP%]   app-near[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n@media screen and (max-width: 1100px) {\n  .main[_ngcontent-%COMP%] {\n    -ms-grid-columns: 40vw auto;\n        grid-template-columns: 40vw auto;\n  }\n  .main[_ngcontent-%COMP%]   .pitstops[_ngcontent-%COMP%] {\n    width: 40vw;\n  }\n}\n@media screen and (max-width: 900px) {\n  .main[_ngcontent-%COMP%] {\n    -ms-grid-columns: 50vw auto;\n        grid-template-columns: 50vw auto;\n  }\n  .main[_ngcontent-%COMP%]   .pitstops[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n}\n@media screen and (max-width: 600px) {\n  .main[_ngcontent-%COMP%] {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n  .main[_ngcontent-%COMP%]   .pitstops[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/landing/landing.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing/landing.component.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./landing.component.less.shim.ngstyle */ "./src/app/components/landing/landing.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ../near/near.component.ngfactory */ "./src/app/components/near/near.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../near/near.component */ "./src/app/components/near/near.component.ts");
var i6 = __webpack_require__(/*! ../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var i7 = __webpack_require__(/*! ./landing.component */ "./src/app/components/landing/landing.component.ts");
var i8 = __webpack_require__(/*! ../../services/blog/blog.service */ "./src/app/services/blog/blog.service.ts");
var i9 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_LandingComponent = [i0.styles];
var RenderType_LandingComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_LandingComponent, data: {} });
exports.RenderType_LandingComponent = RenderType_LandingComponent;
function View_LandingComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "a", [["class", "post __card __hoverable"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [["class", "__text-heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "p", [["class", "__text snippet"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate est minima, porro alias voluptatibus rerum reiciendis error sapiente velit animi beatae soluta architecto quos vitae distinctio nostrum possimus nulla? "])), (_l()(), i1.ɵeld(6, 0, null, null, 1, "p", [["class", "__text-sub sub"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Read More"]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "blog/", _v.context.$implicit.id, ""); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).target; var currVal_1 = i1.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_3); }); }
function View_LandingComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "main"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "pitstops"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "app-near", [], null, null, null, i4.View_NearComponent_0, i4.RenderType_NearComponent)), i1.ɵdid(3, 114688, null, 0, i5.NearComponent, [i6.PitstopService], null, null), (_l()(), i1.ɵeld(4, 0, null, null, 4, "div", [["class", "blog"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "h1", [["class", "__text-heading blog-heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Recent Blog Posts"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_LandingComponent_1)), i1.ɵdid(8, 278528, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_0 = _co.blogs; _ck(_v, 8, 0, currVal_0); }, null); }
exports.View_LandingComponent_0 = View_LandingComponent_0;
function View_LandingComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-landing", [], null, null, null, View_LandingComponent_0, RenderType_LandingComponent)), i1.ɵdid(1, 114688, null, 0, i7.LandingComponent, [i8.BlogService, i2.Router, i9.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_LandingComponent_Host_0 = View_LandingComponent_Host_0;
var LandingComponentNgFactory = i1.ɵccf("app-landing", i7.LandingComponent, View_LandingComponent_Host_0, {}, {}, []);
exports.LandingComponentNgFactory = LandingComponentNgFactory;


/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var blog_service_1 = __webpack_require__(/*! ../../services/blog/blog.service */ "./src/app/services/blog/blog.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var LandingComponent = /** @class */ (function () {
    function LandingComponent(blogService, router, meta) {
        this.blogService = blogService;
        this.router = router;
        this.meta = meta;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.meta.addTag({ name: 'description', content: '' });
        this.getBlogs();
    };
    LandingComponent.prototype.getBlogs = function () {
        var _this = this;
        this.blogService.getBlogs().subscribe(function (data) {
            _this.blogs = data.posts;
        });
    };
    LandingComponent.prototype.onRouteBlogPost = function (e, id) {
        this.router.navigate(["/blog/" + id]);
    };
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;


/***/ }),

/***/ "./src/app/components/login/login.component.less.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/login/login.component.less.shim.ngstyle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n.login-page[_ngcontent-%COMP%] {\n  pointer-events: all;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 1fr 2fr 1fr;\n      grid-template-columns: 1fr 2fr 1fr;\n      grid-template-areas: '. form .';\n  margin: 5% 0;\n  color: #6e582c;\n}\n.login-page[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: form;\n}\n.login-page[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  padding: 100px 50px;\n  display: -ms-grid;\n  display: grid;\n  margin: auto;\n  justify-content: center;\n}\n.login-page[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 10px 5px;\n}\n.login-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c29d52;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/login/login.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/components/login/login.component.ngfactory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./login.component.less.shim.ngstyle */ "./src/app/components/login/login.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ./login.component */ "./src/app/components/login/login.component.ts");
var styles_LoginComponent = [i0.styles];
var RenderType_LoginComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_LoginComponent, data: {} });
exports.RenderType_LoginComponent = RenderType_LoginComponent;
function View_LoginComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 25, "div", [["class", "login-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 24, "div", [["class", "form"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 23, "form", [["class", "login-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 4).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onLoginSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(4, 4210688, null, 0, i2.NgForm, [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i1.ɵdid(6, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(7, 0, null, null, 5, "input", [["name", "username"], ["placeholder", "Username"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 8)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 8).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 8)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 8)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.username = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(8, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(10, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(12, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(13, 0, null, null, 5, "input", [["name", "password"], ["placeholder", "Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 14)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 14).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 14)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 14)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(14, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(16, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(18, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(19, 0, null, null, 1, "button", [["class", "button primary"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["login"])), (_l()(), i1.ɵeld(21, 0, null, null, 4, "p", [["class", "message"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Not registered? "])), (_l()(), i1.ɵeld(23, 0, null, null, 2, "a", [["routerLink", "/signup"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(24, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Create an account"]))], function (_ck, _v) { var _co = _v.component; var currVal_14 = "username"; var currVal_15 = _co.username; _ck(_v, 10, 0, currVal_14, currVal_15); var currVal_23 = "password"; var currVal_24 = _co.password; _ck(_v, 16, 0, currVal_23, currVal_24); var currVal_27 = "/signup"; _ck(_v, 24, 0, currVal_27); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 6).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 6).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 6).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 6).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 6).ngClassValid; var currVal_5 = i1.ɵnov(_v, 6).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 6).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = i1.ɵnov(_v, 12).ngClassUntouched; var currVal_8 = i1.ɵnov(_v, 12).ngClassTouched; var currVal_9 = i1.ɵnov(_v, 12).ngClassPristine; var currVal_10 = i1.ɵnov(_v, 12).ngClassDirty; var currVal_11 = i1.ɵnov(_v, 12).ngClassValid; var currVal_12 = i1.ɵnov(_v, 12).ngClassInvalid; var currVal_13 = i1.ɵnov(_v, 12).ngClassPending; _ck(_v, 7, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_16 = i1.ɵnov(_v, 18).ngClassUntouched; var currVal_17 = i1.ɵnov(_v, 18).ngClassTouched; var currVal_18 = i1.ɵnov(_v, 18).ngClassPristine; var currVal_19 = i1.ɵnov(_v, 18).ngClassDirty; var currVal_20 = i1.ɵnov(_v, 18).ngClassValid; var currVal_21 = i1.ɵnov(_v, 18).ngClassInvalid; var currVal_22 = i1.ɵnov(_v, 18).ngClassPending; _ck(_v, 13, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_25 = i1.ɵnov(_v, 24).target; var currVal_26 = i1.ɵnov(_v, 24).href; _ck(_v, 23, 0, currVal_25, currVal_26); }); }
exports.View_LoginComponent_0 = View_LoginComponent_0;
function View_LoginComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), i1.ɵdid(1, 114688, null, 0, i5.LoginComponent, [i3.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_LoginComponent_Host_0 = View_LoginComponent_Host_0;
var LoginComponentNgFactory = i1.ɵccf("app-login", i5.LoginComponent, View_LoginComponent_Host_0, {}, {}, []);
exports.LoginComponentNgFactory = LoginComponentNgFactory;


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var user = {
            username: this.username,
            password: this.password,
        };
    };
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/components/map/map.component.less.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/map/map.component.less.shim.ngstyle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".main[_ngcontent-%COMP%] {\n  height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 3fr;\n      grid-template-columns: 1fr 3fr;\n}\n.main[_ngcontent-%COMP%]   app-near[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.main[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   agm-map[_ngcontent-%COMP%] {\n  height: 100%;\n}\n@media only screen and (max-width: 1200px) {\n  .main[_ngcontent-%COMP%] {\n    -ms-grid-columns: 2fr 3fr;\n        grid-template-columns: 2fr 3fr;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .main[_ngcontent-%COMP%] {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n  app-near[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/map/map.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/components/map/map.component.ngfactory.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./map.component.less.shim.ngstyle */ "./src/app/components/map/map.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../pitstop/pitstop.component.ngfactory */ "./src/app/components/pitstop/pitstop.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../pitstop/pitstop.component */ "./src/app/components/pitstop/pitstop.component.ts");
var i4 = __webpack_require__(/*! ../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var i5 = __webpack_require__(/*! @agm/core/services/fit-bounds */ "@agm/core/services/fit-bounds");
var i6 = __webpack_require__(/*! @agm/core/directives/marker */ "@agm/core/directives/marker");
var i7 = __webpack_require__(/*! @agm/core/services/managers/marker-manager */ "@agm/core/services/managers/marker-manager");
var i8 = __webpack_require__(/*! ../near/near.component.ngfactory */ "./src/app/components/near/near.component.ngfactory.js");
var i9 = __webpack_require__(/*! ../near/near.component */ "./src/app/components/near/near.component.ts");
var i10 = __webpack_require__(/*! ../../../../node_modules/@agm/core/directives/map.ngfactory */ "./node_modules/@agm/core/directives/map.ngfactory.js");
var i11 = __webpack_require__(/*! @agm/core/services/google-maps-api-wrapper */ "@agm/core/services/google-maps-api-wrapper");
var i12 = __webpack_require__(/*! @agm/core/services/managers/info-window-manager */ "@agm/core/services/managers/info-window-manager");
var i13 = __webpack_require__(/*! @agm/core/services/managers/circle-manager */ "@agm/core/services/managers/circle-manager");
var i14 = __webpack_require__(/*! @agm/core/services/managers/rectangle-manager */ "@agm/core/services/managers/rectangle-manager");
var i15 = __webpack_require__(/*! @agm/core/services/managers/polyline-manager */ "@agm/core/services/managers/polyline-manager");
var i16 = __webpack_require__(/*! @agm/core/services/managers/polygon-manager */ "@agm/core/services/managers/polygon-manager");
var i17 = __webpack_require__(/*! @agm/core/services/managers/kml-layer-manager */ "@agm/core/services/managers/kml-layer-manager");
var i18 = __webpack_require__(/*! @agm/core/services/managers/data-layer-manager */ "@agm/core/services/managers/data-layer-manager");
var i19 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i20 = __webpack_require__(/*! @agm/core/directives/map */ "@agm/core/directives/map");
var i21 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i22 = __webpack_require__(/*! ../adder/adder.component.ngfactory */ "./src/app/components/adder/adder.component.ngfactory.js");
var i23 = __webpack_require__(/*! ../adder/adder.component */ "./src/app/components/adder/adder.component.ts");
var i24 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i25 = __webpack_require__(/*! ./map.component */ "./src/app/components/map/map.component.ts");
var i26 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var styles_MapComponent = [i0.styles];
var RenderType_MapComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MapComponent, data: {} });
exports.RenderType_MapComponent = RenderType_MapComponent;
function View_MapComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-pitstop", [], null, null, null, i2.View_PitstopComponent_0, i2.RenderType_PitstopComponent)), i1.ɵdid(1, 114688, null, 0, i3.PitstopComponent, [i4.PitstopService], { marker: [0, "marker"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_MapComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "agm-marker", [], null, null, null, null, null)), i1.ɵprd(6144, null, i5.FitBoundsAccessor, null, [i6.AgmMarker]), i1.ɵdid(2, 1720320, null, 1, i6.AgmMarker, [i7.MarkerManager], { latitude: [0, "latitude"], longitude: [1, "longitude"] }, null), i1.ɵqud(603979776, 1, { infoWindow: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.point.latitude; var currVal_1 = _co.point.longitude; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_MapComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 21, "div", [["class", "main"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "app-near", [], null, null, null, i8.View_NearComponent_0, i8.RenderType_NearComponent)), i1.ɵdid(2, 114688, null, 0, i9.NearComponent, [i4.PitstopService], null, null), (_l()(), i1.ɵeld(3, 0, null, null, 18, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 15, "agm-map", [], [[2, "sebm-google-map-container", null]], [[null, "mapClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mapClick" === en)) {
        var pd_0 = (_co.onChooseLocation($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i10.View_AgmMap_0, i10.RenderType_AgmMap)), i1.ɵprd(4608, null, i7.MarkerManager, i7.MarkerManager, [i11.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i12.InfoWindowManager, i12.InfoWindowManager, [i11.GoogleMapsAPIWrapper, i1.NgZone, i7.MarkerManager]), i1.ɵprd(4608, null, i13.CircleManager, i13.CircleManager, [i11.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i14.RectangleManager, i14.RectangleManager, [i11.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i15.PolylineManager, i15.PolylineManager, [i11.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i16.PolygonManager, i16.PolygonManager, [i11.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i17.KmlLayerManager, i17.KmlLayerManager, [i11.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i18.DataLayerManager, i18.DataLayerManager, [i11.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(512, null, i11.GoogleMapsAPIWrapper, i11.GoogleMapsAPIWrapper, [i19.MapsAPILoader, i1.NgZone]), i1.ɵprd(512, null, i5.FitBoundsService, i5.FitBoundsService, [i19.MapsAPILoader]), i1.ɵdid(15, 770048, null, 0, i20.AgmMap, [i1.ElementRef, i11.GoogleMapsAPIWrapper, i5.FitBoundsService], { longitude: [0, "longitude"], latitude: [1, "latitude"], zoom: [2, "zoom"], zoomControl: [3, "zoomControl"], streetViewControl: [4, "streetViewControl"] }, { mapClick: "mapClick" }), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_MapComponent_1)), i1.ɵdid(17, 278528, null, 0, i21.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_MapComponent_2)), i1.ɵdid(19, 16384, null, 0, i21.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(20, 0, null, null, 1, "app-adder", [], null, [[null, "adding"], [null, "add"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("adding" === en)) {
        var pd_0 = (_co.toggleAdding($event) !== false);
        ad = (pd_0 && ad);
    } if (("add" === en)) {
        var pd_1 = (_co.addPitstops() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i22.View_AdderComponent_0, i22.RenderType_AdderComponent)), i1.ɵdid(21, 114688, null, 0, i23.AdderComponent, [i24.Router, i4.PitstopService], { point: [0, "point"] }, { adding: "adding", add: "add" })], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_1 = _co.longitude; var currVal_2 = _co.latitude; var currVal_3 = 15; var currVal_4 = false; var currVal_5 = false; _ck(_v, 15, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.markers; _ck(_v, 17, 0, currVal_6); var currVal_7 = _co.point; _ck(_v, 19, 0, currVal_7); var currVal_8 = _co.point; _ck(_v, 21, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 4, 0, currVal_0); }); }
exports.View_MapComponent_0 = View_MapComponent_0;
function View_MapComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-map", [], null, null, null, View_MapComponent_0, RenderType_MapComponent)), i1.ɵdid(1, 114688, null, 0, i25.MapComponent, [i26.WINDOW, i4.PitstopService, i24.ActivatedRoute], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_MapComponent_Host_0 = View_MapComponent_Host_0;
var MapComponentNgFactory = i1.ɵccf("app-map", i25.MapComponent, View_MapComponent_Host_0, {}, {}, []);
exports.MapComponentNgFactory = MapComponentNgFactory;


/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var pitstop_service_1 = __webpack_require__(/*! ../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var MapComponent = /** @class */ (function () {
    function MapComponent(window, pitstopService, router) {
        this.window = window;
        this.pitstopService = pitstopService;
        this.router = router;
        this.latitude = 51.678418;
        this.longitude = 7.809007;
        this.markerPlaced = false;
        this.defaultUI = false;
        this.isMarkerPlaceable = false;
        // navigator = window.navigator;
        navigator.geolocation.getCurrentPosition(function (position) {
            this.setScreenPosition(position.coords.longitude, position.coords.latitude);
            return position;
        }.bind(this));
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('hello!');
        this.addPitstops();
        this.router.params.subscribe(function (data) {
            if (data.id)
                _this.goToPitstop(data.id);
        });
    };
    MapComponent.prototype.onChooseLocation = function (e) {
        if (this.isMarkerPlaceable) {
            this.point = {
                longitude: e.coords.lng,
                latitude: e.coords.lat
            };
        }
    };
    MapComponent.prototype.toggleAdding = function (e) {
        this.isMarkerPlaceable = e;
    };
    MapComponent.prototype.addPitstops = function () {
        var _this = this;
        var pitstops = this.pitstopService.getPitstops().subscribe(function (data) {
            _this.markers = data;
        });
    };
    MapComponent.prototype.setScreenPosition = function (longitude, latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    };
    MapComponent.prototype.goToPitstop = function (id) {
        var _this = this;
        this.pitstopService.getPitstopById(id).subscribe(function (data) {
            _this.setScreenPosition(data.longitude, data.latitude);
        });
    };
    return MapComponent;
}());
exports.MapComponent = MapComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.less.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.less.shim.ngstyle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n.navbar[_ngcontent-%COMP%] {\n  pointer-events: all;\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  min-height: 80px;\n  grid-auto-columns: 1fr;\n      -ms-grid-rows: 80px;\n      grid-template-rows: 80px;\n  grid-auto-rows: auto;\n      grid-template-areas: 'logo logo links';\n  color: #c29d52;\n  background-color: #2B292B;\n  transition: 2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  color: #c29d52;\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: logo;\n  -ms-grid-row-align: center;\n      align-self: center;\n  -ms-grid-column-align: left;\n      justify-self: left;\n  font-size: 1.7rem;\n  padding-left: 10px;\n  font-weight: bold;\n  letter-spacing: 0.2rem;\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 5rem;\n  position: absolute;\n  top: 0;\n  padding-left: 1rem;\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]::before {\n  content: ' ';\n  width: 20px;\n  background-color: #c29d52;\n  height: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n.navbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  transition: height 4s;\n  -ms-grid-row: 1;\n  -ms-grid-column: 3;\n  grid-area: links;\n  align-self: center;\n  justify-self: right;\n  padding-right: 10px;\n  display: flex;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n.navbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 5px;\n}\n.navbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .near[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n@media screen and (max-width: 900px) {\n  .navbar[_ngcontent-%COMP%] {\n        grid-template-areas: 'logo logo menu' 'links links links';\n  }\n  .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n  .navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    display: block;\n    visibility: visible;\n    grid-area: menu;\n    -ms-grid-column-align: right;\n        justify-self: right;\n    -ms-grid-row-align: center;\n        align-self: center;\n    padding-right: 20px;\n  }\n@media screen and (max-width: 900px) {\n  .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n      -ms-grid-row: 1;\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 2;\n  }\n  .navbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n      -ms-grid-row: 2;\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 3;\n  }\n  .navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n      -ms-grid-row: 1;\n      -ms-grid-column: 3;\n  }\n}\n  .navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .hamberger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 5px;\n    background-color: #c29d52;\n    margin-top: 5px;\n  }\n  .navbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    height: 99vh;\n    background-color: #2B292B;\n    right: 0;\n    top: 0;\n    padding-top: 100px;\n    z-index: -1;\n    width: 200px;\n    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.35);\n    transition: right 0.5s;\n    text-align: right;\n    font-size: 2rem;\n  }\n  .navbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem;\n  }\n  .navbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .near[_ngcontent-%COMP%] {\n    display: initial;\n    visibility: visible;\n  }\n  .navbar[_ngcontent-%COMP%]   .links.close[_ngcontent-%COMP%] {\n    right: -100%;\n  }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ngfactory.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./navbar.component.less.shim.ngstyle */ "./src/app/components/navbar/navbar.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./navbar.component */ "./src/app/components/navbar/navbar.component.ts");
var i5 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var styles_NavbarComponent = [i0.styles];
var RenderType_NavbarComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NavbarComponent, data: { "animation": [{ type: 7, name: "openItems", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { right: "-250px" }, offset: null }, { type: 4, styles: null, timings: 200 }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 3, steps: [{ type: 4, styles: { type: 6, styles: { right: "-250px" }, offset: null }, timings: "0.2s ease" }], options: null }], options: null }], options: {} }] } });
exports.RenderType_NavbarComponent = RenderType_NavbarComponent;
function View_NavbarComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 29, "div", [["class", "wrap themed-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 28, "nav", [["class", "navbar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 5, "div", [["class", "logo"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 4, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nomad Pit Stops"])), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [["alt", ""], ["class", "img"], ["src", "../../../assets/svg/mountains.svg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 4, "div", [["class", "menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 3, "div", [["class", "hamberger"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClickHamberger($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 16, "div", [], [[8, "className", 0], [24, "@openItems", 0]], null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 3, "div", [["class", "link"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "a", [["routerLink", "/blog"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(16, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Blog"])), (_l()(), i1.ɵeld(18, 0, null, null, 3, "div", [["class", "link"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 2, "a", [["routerLink", "/map"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(20, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Map"])), (_l()(), i1.ɵeld(22, 0, null, null, 3, "div", [["class", "link"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 2, "a", [["routerLink", "/about"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(24, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["About"])), (_l()(), i1.ɵeld(26, 0, null, null, 3, "div", [["class", "link"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 2, "a", [["class", "near"], ["routerLink", "nearme"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 28).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(28, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Nearby"]))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 4, 0, currVal_2); var currVal_7 = "/blog"; _ck(_v, 16, 0, currVal_7); var currVal_10 = "/map"; _ck(_v, 20, 0, currVal_10); var currVal_13 = "/about"; _ck(_v, 24, 0, currVal_13); var currVal_16 = "nearme"; _ck(_v, 28, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 4).target; var currVal_1 = i1.ɵnov(_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(1, "links ", _co.linksState, " __text"); var currVal_4 = undefined; _ck(_v, 13, 0, currVal_3, currVal_4); var currVal_5 = i1.ɵnov(_v, 16).target; var currVal_6 = i1.ɵnov(_v, 16).href; _ck(_v, 15, 0, currVal_5, currVal_6); var currVal_8 = i1.ɵnov(_v, 20).target; var currVal_9 = i1.ɵnov(_v, 20).href; _ck(_v, 19, 0, currVal_8, currVal_9); var currVal_11 = i1.ɵnov(_v, 24).target; var currVal_12 = i1.ɵnov(_v, 24).href; _ck(_v, 23, 0, currVal_11, currVal_12); var currVal_14 = i1.ɵnov(_v, 28).target; var currVal_15 = i1.ɵnov(_v, 28).href; _ck(_v, 27, 0, currVal_14, currVal_15); }); }
exports.View_NavbarComponent_0 = View_NavbarComponent_0;
function View_NavbarComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-navbar", [], null, null, null, View_NavbarComponent_0, RenderType_NavbarComponent)), i1.ɵdid(1, 114688, null, 0, i4.NavbarComponent, [i5.WINDOW], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NavbarComponent_Host_0 = View_NavbarComponent_Host_0;
var NavbarComponentNgFactory = i1.ɵccf("app-navbar", i4.NavbarComponent, View_NavbarComponent_Host_0, {}, { adding: "adding" }, []);
exports.NavbarComponentNgFactory = NavbarComponentNgFactory;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(window) {
        this.window = window;
        this.linksVisible = false;
        this.linksState = 'close';
        this.adding = new core_1.EventEmitter();
        if (window.innerWidth > 600) {
            this.linksVisible = true;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onClickHamberger = function (e) {
        this.linksVisible = !this.linksVisible;
        if (this.linksState === 'open') {
            this.linksState = 'close';
        }
        else {
            this.linksState = 'open';
        }
    };
    NavbarComponent.prototype.onAdding = function (e) {
        this.adding.emit(e);
    };
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/near/near.component.less.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/near/near.component.less.shim.ngstyle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n.places[_ngcontent-%COMP%] {\n  z-index: 3;\n  pointer-events: all;\n  width: 90%;\n  border: none;\n  border-radius: 3px;\n  margin: 0.4rem;\n  padding: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  overflow: hidden;\n}\n.wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n  background-color: #2B292B;\n}\n.wrap[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/near/near.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/components/near/near.component.ngfactory.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./near.component.less.shim.ngstyle */ "./src/app/components/near/near.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive */ "ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive");
var i3 = __webpack_require__(/*! ./nearcard/nearcard.component.ngfactory */ "./src/app/components/near/nearcard/nearcard.component.ngfactory.js");
var i4 = __webpack_require__(/*! ./nearcard/nearcard.component */ "./src/app/components/near/nearcard/nearcard.component.ts");
var i5 = __webpack_require__(/*! ../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var i6 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i7 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i8 = __webpack_require__(/*! ./near.component */ "./src/app/components/near/near.component.ts");
var styles_NearComponent = [i0.styles];
var RenderType_NearComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NearComponent, data: {} });
exports.RenderType_NearComponent = RenderType_NearComponent;
function View_NearComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "input", [["class", "places"], ["ngx-google-places-autocomplete", ""]], null, [[null, "onAddressChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onAddressChange" === en)) {
        var pd_0 = (_co.handleAddressChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 4210688, [[1, 4], ["placesRef", 4]], 0, i2.GooglePlaceDirective, [i1.ElementRef, i1.NgZone], { options: [0, "options"] }, { onAddressChange: "onAddressChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.options; _ck(_v, 1, 0, currVal_0); }, null); }
function View_NearComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "nearby"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "app-nearcard", [], null, null, null, i3.View_NearcardComponent_0, i3.RenderType_NearcardComponent)), i1.ɵdid(2, 114688, null, 0, i4.NearcardComponent, [i5.PitstopService, i6.Router], { pitstop: [0, "pitstop"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_NearComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(671088640, 1, { placesRef: 0 }), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", "wrap"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NearComponent_1)), i1.ɵdid(3, 16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 2, "div", [["class", "cards"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NearComponent_2)), i1.ɵdid(6, 278528, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.locationFinder; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.pitstops; _ck(_v, 6, 0, currVal_1); }, null); }
exports.View_NearComponent_0 = View_NearComponent_0;
function View_NearComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-near", [], null, null, null, View_NearComponent_0, RenderType_NearComponent)), i1.ɵdid(1, 114688, null, 0, i8.NearComponent, [i5.PitstopService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NearComponent_Host_0 = View_NearComponent_Host_0;
var NearComponentNgFactory = i1.ɵccf("app-near", i8.NearComponent, View_NearComponent_Host_0, { locationFinder: "locationFinder" }, {}, []);
exports.NearComponentNgFactory = NearComponentNgFactory;


/***/ }),

/***/ "./src/app/components/near/near.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/near/near.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ngx_google_places_autocomplete_1 = __webpack_require__(/*! ngx-google-places-autocomplete */ "ngx-google-places-autocomplete");
var pitstop_service_1 = __webpack_require__(/*! ../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var NearComponent = /** @class */ (function () {
    function NearComponent(pitStopServerice) {
        this.pitStopServerice = pitStopServerice;
        this.options = {};
    }
    NearComponent.prototype.ngOnInit = function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
            this.getPitstops();
            return position;
        }.bind(this));
    };
    NearComponent.prototype.handleAddressChange = function (event) { };
    NearComponent.prototype.getPitstops = function () {
        var _this = this;
        this.pitStopServerice.getNearPitstops({
            longitude: this.longitude,
            latitude: this.latitude,
            radius: 5,
        })
            .subscribe(function (data) {
            _this.pitstops = data;
        });
        // this.pitStopServerice.getPitstops().subscribe(data => {
        //     this.pitstops = data;
        //     this.pitstops.map(data => {
        //         console.log(data.id)
        //     })
        //     console.log('got these gosh darn pitstops', this.pitstops)
        // });
    };
    return NearComponent;
}());
exports.NearComponent = NearComponent;


/***/ }),

/***/ "./src/app/components/near/nearcard/nearcard.component.less.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/components/near/nearcard/nearcard.component.less.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n.__card.near-card[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 1rem;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/near/nearcard/nearcard.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/components/near/nearcard/nearcard.component.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./nearcard.component.less.shim.ngstyle */ "./src/app/components/near/nearcard/nearcard.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./nearcard.component */ "./src/app/components/near/nearcard/nearcard.component.ts");
var i3 = __webpack_require__(/*! ../../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_NearcardComponent = [i0.styles];
var RenderType_NearcardComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NearcardComponent, data: {} });
exports.RenderType_NearcardComponent = RenderType_NearcardComponent;
function View_NearcardComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "__card __card-reactive __hoverable near-card"]], null, [[null, "click"], [null, "touchstart"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick() !== false);
        ad = (pd_0 && ad);
    } if (("touchstart" === en)) {
        var pd_1 = (_co.onClick() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "p", [["class", "name __text-heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", ""])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "p", [["class", "__text-sub"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["Internet: ", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [["class", "__text"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.name; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.connection; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.notes; _ck(_v, 6, 0, currVal_2); }); }
exports.View_NearcardComponent_0 = View_NearcardComponent_0;
function View_NearcardComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-nearcard", [], null, null, null, View_NearcardComponent_0, RenderType_NearcardComponent)), i1.ɵdid(1, 114688, null, 0, i2.NearcardComponent, [i3.PitstopService, i4.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NearcardComponent_Host_0 = View_NearcardComponent_Host_0;
var NearcardComponentNgFactory = i1.ɵccf("app-nearcard", i2.NearcardComponent, View_NearcardComponent_Host_0, { pitstop: "pitstop" }, {}, []);
exports.NearcardComponentNgFactory = NearcardComponentNgFactory;


/***/ }),

/***/ "./src/app/components/near/nearcard/nearcard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/near/nearcard/nearcard.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var pitstop_service_1 = __webpack_require__(/*! ../../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var NearcardComponent = /** @class */ (function () {
    function NearcardComponent(pitstopServerice, router) {
        this.pitstopServerice = pitstopServerice;
        this.router = router;
    }
    NearcardComponent.prototype.ngOnInit = function () {
        this.name = this.pitstop.name;
        this.connection = this.pitstopServerice.internetWords(this.pitstop.connection);
        this.notes = this.pitstop.notes;
        this.id = this.pitstop.id;
        console.log('somthings been created');
    };
    NearcardComponent.prototype.onClick = function () {
        this.router.navigateByUrl('/pitstops/map/' + this.id);
        console.log('ive been clicked');
    };
    return NearcardComponent;
}());
exports.NearcardComponent = NearcardComponent;


/***/ }),

/***/ "./src/app/components/pitstop/pitstop.component.less.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/pitstop/pitstop.component.less.shim.ngstyle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/pitstop/pitstop.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/pitstop/pitstop.component.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./pitstop.component.less.shim.ngstyle */ "./src/app/components/pitstop/pitstop.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @agm/core/services/fit-bounds */ "@agm/core/services/fit-bounds");
var i3 = __webpack_require__(/*! @agm/core/directives/marker */ "@agm/core/directives/marker");
var i4 = __webpack_require__(/*! @agm/core/services/managers/marker-manager */ "@agm/core/services/managers/marker-manager");
var i5 = __webpack_require__(/*! ../../../../node_modules/@agm/core/directives/info-window.ngfactory */ "./node_modules/@agm/core/directives/info-window.ngfactory.js");
var i6 = __webpack_require__(/*! @agm/core/directives/info-window */ "@agm/core/directives/info-window");
var i7 = __webpack_require__(/*! @agm/core/services/managers/info-window-manager */ "@agm/core/services/managers/info-window-manager");
var i8 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i9 = __webpack_require__(/*! ./pitstop.component */ "./src/app/components/pitstop/pitstop.component.ts");
var i10 = __webpack_require__(/*! ../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var styles_PitstopComponent = [i0.styles];
var RenderType_PitstopComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PitstopComponent, data: {} });
exports.RenderType_PitstopComponent = RenderType_PitstopComponent;
function View_PitstopComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["Notes: ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.marker.notes; _ck(_v, 1, 0, currVal_0); }); }
function View_PitstopComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "agm-marker", [], null, null, null, null, null)), i1.ɵprd(6144, null, i2.FitBoundsAccessor, null, [i3.AgmMarker]), i1.ɵdid(2, 1720320, null, 1, i3.AgmMarker, [i4.MarkerManager], { latitude: [0, "latitude"], longitude: [1, "longitude"], openInfoWindow: [2, "openInfoWindow"] }, null), i1.ɵqud(603979776, 1, { infoWindow: 1 }), (_l()(), i1.ɵeld(4, 0, null, null, 7, "agm-info-window", [], null, null, null, i5.View_AgmInfoWindow_0, i5.RenderType_AgmInfoWindow)), i1.ɵdid(5, 770048, [[1, 4]], 0, i6.AgmInfoWindow, [i7.InfoWindowManager, i1.ElementRef], null, null), (_l()(), i1.ɵeld(6, 0, null, 0, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), (_l()(), i1.ɵeld(8, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["Internet Connection: ", ""])), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_PitstopComponent_1)), i1.ɵdid(11, 16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.marker.latitude; var currVal_1 = _co.marker.longitude; var currVal_2 = true; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); _ck(_v, 5, 0); var currVal_5 = _co.marker.notes; _ck(_v, 11, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.marker.name; _ck(_v, 7, 0, currVal_3); var currVal_4 = _co.getWords(_co.marker); _ck(_v, 9, 0, currVal_4); }); }
exports.View_PitstopComponent_0 = View_PitstopComponent_0;
function View_PitstopComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-pitstop", [], null, null, null, View_PitstopComponent_0, RenderType_PitstopComponent)), i1.ɵdid(1, 114688, null, 0, i9.PitstopComponent, [i10.PitstopService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PitstopComponent_Host_0 = View_PitstopComponent_Host_0;
var PitstopComponentNgFactory = i1.ɵccf("app-pitstop", i9.PitstopComponent, View_PitstopComponent_Host_0, { marker: "marker" }, {}, []);
exports.PitstopComponentNgFactory = PitstopComponentNgFactory;


/***/ }),

/***/ "./src/app/components/pitstop/pitstop.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pitstop/pitstop.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var pitstop_service_1 = __webpack_require__(/*! ../../services/pitstop/pitstop.service */ "./src/app/services/pitstop/pitstop.service.ts");
var PitstopComponent = /** @class */ (function () {
    function PitstopComponent(pitstopService) {
        this.pitstopService = pitstopService;
    }
    PitstopComponent.prototype.ngOnInit = function () { };
    PitstopComponent.prototype.getWords = function (marker) {
        return this.pitstopService.internetWords(marker.connection);
    };
    return PitstopComponent;
}());
exports.PitstopComponent = PitstopComponent;


/***/ }),

/***/ "./src/app/components/signup/signup.component.less.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/signup/signup.component.less.shim.ngstyle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".signup-page[_ngcontent-%COMP%] {\n  display: -ms-grid;\n  display: grid;\n      grid-template-areas: '. form .';\n  margin-top: 50px;\n  pointer-events: all;\n}\n.signup-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: form;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: auto 20px auto 20px auto 20px auto 20px auto;\n      grid-template-areas: 'email' 'username' 'password' 'repeat' 'submit';\n  grid-gap: 20px;\n}\n.signup-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  grid-area: first;\n}\n.signup-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%] {\n  grid-area: last;\n}\n.signup-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  -ms-grid-row: 3;\n  -ms-grid-column: 1;\n  grid-area: username;\n}\n.signup-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: email;\n}\n.signup-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%] {\n  -ms-grid-row: 5;\n  -ms-grid-column: 1;\n  grid-area: password;\n}\n.signup-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .repeat[_ngcontent-%COMP%] {\n  -ms-grid-row: 7;\n  -ms-grid-column: 1;\n  grid-area: repeat;\n}\n.signup-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  -ms-grid-row: 9;\n  -ms-grid-column: 1;\n  grid-area: submit;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/signup/signup.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/signup/signup.component.ngfactory.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./signup.component.less.shim.ngstyle */ "./src/app/components/signup/signup.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i3 = __webpack_require__(/*! ./signup.component */ "./src/app/components/signup/signup.component.ts");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_SignupComponent = [i0.styles];
var RenderType_SignupComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SignupComponent, data: {} });
exports.RenderType_SignupComponent = RenderType_SignupComponent;
function View_SignupComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 31, "div", [["class", "signup-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 30, "form", [["class", "login-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSignupSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 16384, null, 0, i2.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(3, 4210688, null, 0, i2.NgForm, [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i1.ɵdid(5, 16384, null, 0, i2.NgControlStatusGroup, [[4, i2.ControlContainer]], null, null), (_l()(), i1.ɵeld(6, 0, null, null, 5, "input", [["class", "email"], ["name", "emil"], ["placeholder", "email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 7)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 7).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 7)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 7)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(7, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(9, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(11, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(12, 0, null, null, 5, "input", [["class", "username"], ["name", "username"], ["placeholder", "Username"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 13)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 13).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 13)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 13)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.username = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(13, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(15, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(17, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(18, 0, null, null, 5, "input", [["class", "password"], ["name", "password"], ["placeholder", "Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(19, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(21, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(23, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(24, 0, null, null, 5, "input", [["class", "repeat"], ["name", "confirmPassword"], ["placeholder", "Confirm Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 25)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 25).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 25)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 25)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.confirmPassword = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(25, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(27, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(29, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null), (_l()(), i1.ɵeld(30, 0, null, null, 1, "button", [["class", "button primary submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sign up"]))], function (_ck, _v) { var _co = _v.component; var currVal_14 = "emil"; var currVal_15 = _co.email; _ck(_v, 9, 0, currVal_14, currVal_15); var currVal_23 = "username"; var currVal_24 = _co.username; _ck(_v, 15, 0, currVal_23, currVal_24); var currVal_32 = "password"; var currVal_33 = _co.password; _ck(_v, 21, 0, currVal_32, currVal_33); var currVal_41 = "confirmPassword"; var currVal_42 = _co.confirmPassword; _ck(_v, 27, 0, currVal_41, currVal_42); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 5).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 5).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 5).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 5).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 5).ngClassValid; var currVal_5 = i1.ɵnov(_v, 5).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = i1.ɵnov(_v, 11).ngClassUntouched; var currVal_8 = i1.ɵnov(_v, 11).ngClassTouched; var currVal_9 = i1.ɵnov(_v, 11).ngClassPristine; var currVal_10 = i1.ɵnov(_v, 11).ngClassDirty; var currVal_11 = i1.ɵnov(_v, 11).ngClassValid; var currVal_12 = i1.ɵnov(_v, 11).ngClassInvalid; var currVal_13 = i1.ɵnov(_v, 11).ngClassPending; _ck(_v, 6, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_16 = i1.ɵnov(_v, 17).ngClassUntouched; var currVal_17 = i1.ɵnov(_v, 17).ngClassTouched; var currVal_18 = i1.ɵnov(_v, 17).ngClassPristine; var currVal_19 = i1.ɵnov(_v, 17).ngClassDirty; var currVal_20 = i1.ɵnov(_v, 17).ngClassValid; var currVal_21 = i1.ɵnov(_v, 17).ngClassInvalid; var currVal_22 = i1.ɵnov(_v, 17).ngClassPending; _ck(_v, 12, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_25 = i1.ɵnov(_v, 23).ngClassUntouched; var currVal_26 = i1.ɵnov(_v, 23).ngClassTouched; var currVal_27 = i1.ɵnov(_v, 23).ngClassPristine; var currVal_28 = i1.ɵnov(_v, 23).ngClassDirty; var currVal_29 = i1.ɵnov(_v, 23).ngClassValid; var currVal_30 = i1.ɵnov(_v, 23).ngClassInvalid; var currVal_31 = i1.ɵnov(_v, 23).ngClassPending; _ck(_v, 18, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_34 = i1.ɵnov(_v, 29).ngClassUntouched; var currVal_35 = i1.ɵnov(_v, 29).ngClassTouched; var currVal_36 = i1.ɵnov(_v, 29).ngClassPristine; var currVal_37 = i1.ɵnov(_v, 29).ngClassDirty; var currVal_38 = i1.ɵnov(_v, 29).ngClassValid; var currVal_39 = i1.ɵnov(_v, 29).ngClassInvalid; var currVal_40 = i1.ɵnov(_v, 29).ngClassPending; _ck(_v, 24, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); }); }
exports.View_SignupComponent_0 = View_SignupComponent_0;
function View_SignupComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-signup", [], null, null, null, View_SignupComponent_0, RenderType_SignupComponent)), i1.ɵdid(1, 114688, null, 0, i3.SignupComponent, [i4.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SignupComponent_Host_0 = View_SignupComponent_Host_0;
var SignupComponentNgFactory = i1.ɵccf("app-signup", i3.SignupComponent, View_SignupComponent_Host_0, {}, {}, []);
exports.SignupComponentNgFactory = SignupComponentNgFactory;


/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignupSubmit = function () {
        this.user = {
            email: this.email,
            username: this.username,
            password: this.password,
        };
    };
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "./src/app/components/social-share/social-share.component.less.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/components/social-share/social-share.component.less.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.button.primary[_ngcontent-%COMP%] {\n  background-color: #c29d52;\n  color: #6e582c;\n  border: 2px solid #6e582c;\n}\n.button.secoundary[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  color: #c29d52;\n  border: 2px solid #c29d52;\n}\n.button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.button[_ngcontent-%COMP%]:active:not(.disabled) {\n  opacity: 0.7;\n}\ninput[type='text'][_ngcontent-%COMP%], input[type='password'][_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  height: 40px;\n  font-size: 24px;\n  background-color: white;\n  border: 3px solid #6e582c;\n  border-radius: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  border: 1px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 8.95px 0;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9.15px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n  background: #6e582c;\n  border-radius: 1.3px;\n  border: 0.2px solid #c29d52;\n}\ninput[type='range'][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 10.1px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #6e582c;\n  border: 0.2px solid #c29d52;\n  border-radius: 2.6px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range'][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 1px 1px 1px #2B292B, 0px 0px 1px #0d0d0d;\n  border: 2.8px solid #2B292B;\n  height: 28px;\n  width: 38px;\n  border-radius: 5px;\n  background: #c29d52;\n  cursor: pointer;\n  height: 10.1px;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #6e582c;\n}\ninput[type='range'][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #6e582c;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n.__card[_ngcontent-%COMP%] {\n  border-radius: 0.1rem;\n  background-color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 3rem;\n  padding: 0.5rem;\n}\n.__card.__hoverable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.__card.__hoverable[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n@media only screen and (max-width: 1200px) {\n  .__card.__card-reactive[_ngcontent-%COMP%] {\n    margin: 2rem 0.5rem;\n  }\n}\n.__text-heading[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Raleway', sans-serif;\n  font-size: 2.2rem;\n  font-weight: 900;\n}\n.__text[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.2rem;\n}\n.__text-sub[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  color: #666666;\n  font-size: 0.9rem;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  margin-right: 1rem;\n  padding: 0.5rem 1rem;\n  background-color: #2B292B;\n  color: #c29d52;\n  font-size: 1rem;\n  transition: all 0.5s;\n  max-width: 1rem;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n.container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  max-width: 100rem;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/social-share/social-share.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/components/social-share/social-share.component.ngfactory.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./social-share.component.less.shim.ngstyle */ "./src/app/components/social-share/social-share.component.less.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./social-share.component */ "./src/app/components/social-share/social-share.component.ts");
var i3 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_SocialShareComponent = [i0.styles];
var RenderType_SocialShareComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SocialShareComponent, data: {} });
exports.RenderType_SocialShareComponent = RenderType_SocialShareComponent;
function View_SocialShareComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "container themed-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "btn twitter"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onTweet() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "i", [["class", "fab fa-twitter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Tweet"])), (_l()(), i1.ɵeld(5, 0, null, null, 3, "div", [["class", "btn facebook"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.shareToFacebook() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "i", [["class", "fab fa-facebook-f"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Post"]))], null, null); }
exports.View_SocialShareComponent_0 = View_SocialShareComponent_0;
function View_SocialShareComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-social-share", [], null, null, null, View_SocialShareComponent_0, RenderType_SocialShareComponent)), i1.ɵdid(1, 114688, null, 0, i2.SocialShareComponent, [i3.WINDOW, i4.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SocialShareComponent_Host_0 = View_SocialShareComponent_Host_0;
var SocialShareComponentNgFactory = i1.ɵccf("app-social-share", i2.SocialShareComponent, View_SocialShareComponent_Host_0, {}, {}, []);
exports.SocialShareComponentNgFactory = SocialShareComponentNgFactory;


/***/ }),

/***/ "./src/app/components/social-share/social-share.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-share/social-share.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var SocialShareComponent = /** @class */ (function () {
    function SocialShareComponent(window, router) {
        this.window = window;
        this.router = router;
    }
    SocialShareComponent.prototype.ngOnInit = function () { };
    SocialShareComponent.prototype.shareToFacebook = function () {
        this.window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnomadpitstops.com' +
            this.router.url, 'Facebook Share', 'height=450, width=550');
        if (this.window) {
        }
    };
    SocialShareComponent.prototype.onTweet = function () {
        var url = 'https://twitter.com/intent/tweet';
        var text = 'https://nomadpitstops.com' + this.router.url + ' #digitalnomad';
        var hashtag = '#nomadpitstops';
        var via = 'username';
        this.window.open(url + '?text=' + text + ';hastag=' + hashtag + ';via=' + via, 'Twitter', 'height=450, width=550');
    };
    return SocialShareComponent;
}());
exports.SocialShareComponent = SocialShareComponent;


/***/ }),

/***/ "./src/app/services/blog/blog.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/blog/blog.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i2 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var BlogService = /** @class */ (function () {
    function BlogService(window, http) {
        this.window = window;
        this.http = http;
        this.serverURL = environment_1.environment.serverUrl;
        this.httOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    BlogService.prototype.getBlogs = function () {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            var next = observer.next, error = observer.error, complete = observer.complete;
            if (_this.window.localStorage) {
                var blogs = JSON.parse(_this.window.localStorage.getItem('blogs'));
                if (blogs)
                    observer.next(blogs);
            }
            _this.http
                .get(_this.serverURL + '/blog', _this.httOptions)
                .pipe(operators_1.map(function (res) { return res; }))
                .subscribe(function (data) {
                try {
                    _this.window.localStorage.setItem('blogs', JSON.stringify(data));
                }
                catch (error) { }
                observer.next(data);
            });
        });
        // return this.http
        //     .get<Array<any>>(this.serverURL + '/blog', this.httOptions)
        //     .pipe(map((res: any) => res));
    };
    BlogService.prototype.getBlogFromStorage = function (id) {
        if (this.window.localStorage) {
        }
        var blog = JSON.parse(this.window.localStorage.getItem("blog:" + id));
        console.log('blog', blog);
        return blog;
    };
    BlogService.prototype.getBlog = function (id) {
        return this.http
            .get(this.serverURL + '/blog/' + id, this.httOptions)
            .pipe(operators_1.map(function (res) {
            return res;
        }));
    };
    BlogService.ngInjectableDef = i0.defineInjectable({ factory: function BlogService_Factory() { return new BlogService(i0.inject(i1.WINDOW), i0.inject(i2.HttpClient)); }, token: BlogService, providedIn: "root" });
    return BlogService;
}());
exports.BlogService = BlogService;


/***/ }),

/***/ "./src/app/services/pitstop/pitstop.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/pitstop/pitstop.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var environment_1 = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i2 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var PitstopService = /** @class */ (function () {
    function PitstopService(window, http) {
        this.window = window;
        this.http = http;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    PitstopService.prototype.addPitstop = function (pitstop) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http
            .post(environment_1.environment.serverUrl + '/pitstops', pitstop, httpOptions)
            .pipe(operators_1.map(function (res) { return res; }));
    };
    PitstopService.prototype.getPitstops = function () {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            if (_this.window.localStorage.getItem('pitstops')) {
                observer.next(JSON.parse(_this.window.localStorage.getItem('pitstops')));
            }
            _this.http
                .get(environment_1.environment.serverUrl + '/pitstops', _this.httpOptions)
                .pipe(operators_1.map(function (res) { return res; }))
                .subscribe(function (data) {
                _this.window.localStorage.setItem('pitstops', JSON.stringify(data));
                observer.next(data);
            });
        });
    };
    PitstopService.prototype.getPitstopById = function (id) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http
            .get(environment_1.environment.serverUrl + '/pitstops/' + id, httpOptions)
            .pipe(operators_1.map(function (res) { return res; }));
    };
    PitstopService.prototype.getNearPitstops = function (options) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            if (_this.window.localStorage.getItem('pitstops:near')) {
                observer.next(JSON.parse(_this.window.localStorage.getItem('pitstops:near')));
            }
            _this.http
                .post(environment_1.environment.serverUrl + '/pitstops/radius/', options, _this.httpOptions)
                .pipe(operators_1.map(function (res) { return res; }))
                .subscribe(function (data) {
                _this.window.localStorage.setItem('pitstops:near', JSON.stringify(data));
                observer.next(data);
            });
        });
    };
    PitstopService.prototype.internetWords = function (val) {
        var out;
        switch (val) {
            case '0':
                out = 'Awful';
                break;
            case '1':
                out = 'Very Bad';
                break;
            case '2':
                out = 'bad';
                break;
            case '3':
                out = 'Good';
                break;
            case '4':
                out = 'very good';
                break;
            default:
                out = 'Excellent';
                break;
        }
        return out;
    };
    PitstopService.ngInjectableDef = i0.defineInjectable({ factory: function PitstopService_Factory() { return new PitstopService(i0.inject(i1.WINDOW), i0.inject(i2.HttpClient)); }, token: PitstopService, providedIn: "root" });
    return PitstopService;
}());
exports.PitstopService = PitstopService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    serverUrl: 'http://localhost:3001',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Erikb/Documents/Stacks/NomadPitstops/app/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@agm/core/core.module":
/*!****************************************!*\
  !*** external "@agm/core/core.module" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/core.module");

/***/ }),

/***/ "@agm/core/directives/info-window":
/*!***************************************************!*\
  !*** external "@agm/core/directives/info-window" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/info-window");

/***/ }),

/***/ "@agm/core/directives/map":
/*!*******************************************!*\
  !*** external "@agm/core/directives/map" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/map");

/***/ }),

/***/ "@agm/core/directives/marker":
/*!**********************************************!*\
  !*** external "@agm/core/directives/marker" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/marker");

/***/ }),

/***/ "@agm/core/services/fit-bounds":
/*!************************************************!*\
  !*** external "@agm/core/services/fit-bounds" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/fit-bounds");

/***/ }),

/***/ "@agm/core/services/google-maps-api-wrapper":
/*!*************************************************************!*\
  !*** external "@agm/core/services/google-maps-api-wrapper" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/google-maps-api-wrapper");

/***/ }),

/***/ "@agm/core/services/managers/circle-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/circle-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/circle-manager");

/***/ }),

/***/ "@agm/core/services/managers/data-layer-manager":
/*!*****************************************************************!*\
  !*** external "@agm/core/services/managers/data-layer-manager" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/data-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/info-window-manager":
/*!******************************************************************!*\
  !*** external "@agm/core/services/managers/info-window-manager" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/info-window-manager");

/***/ }),

/***/ "@agm/core/services/managers/kml-layer-manager":
/*!****************************************************************!*\
  !*** external "@agm/core/services/managers/kml-layer-manager" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/kml-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/marker-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/marker-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/marker-manager");

/***/ }),

/***/ "@agm/core/services/managers/polygon-manager":
/*!**************************************************************!*\
  !*** external "@agm/core/services/managers/polygon-manager" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polygon-manager");

/***/ }),

/***/ "@agm/core/services/managers/polyline-manager":
/*!***************************************************************!*\
  !*** external "@agm/core/services/managers/polyline-manager" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polyline-manager");

/***/ }),

/***/ "@agm/core/services/managers/rectangle-manager":
/*!****************************************************************!*\
  !*** external "@agm/core/services/managers/rectangle-manager" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/rectangle-manager");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/lazy-maps-api-loader":
/*!**************************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/lazy-maps-api-loader" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/lazy-maps-api-loader");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/maps-api-loader":
/*!*********************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/maps-api-loader" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/maps-api-loader");

/***/ }),

/***/ "@agm/core/utils/browser-globals":
/*!**************************************************!*\
  !*** external "@agm/core/utils/browser-globals" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/utils/browser-globals");

/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ng-toolkit/universal":
/*!****************************************!*\
  !*** external "@ng-toolkit/universal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-toolkit/universal");

/***/ }),

/***/ "@nguniversal/common":
/*!**************************************!*\
  !*** external "@nguniversal/common" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/common");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "ngx-google-places-autocomplete":
/*!*************************************************!*\
  !*** external "ngx-google-places-autocomplete" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-google-places-autocomplete");

/***/ }),

/***/ "ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive":
/*!******************************************************************************************!*\
  !*** external "ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive" ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive");

/***/ }),

/***/ "ngx-google-places-autocomplete/ngx-google-places-autocomplete.module":
/*!***************************************************************************************!*\
  !*** external "ngx-google-places-autocomplete/ngx-google-places-autocomplete.module" ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-google-places-autocomplete/ngx-google-places-autocomplete.module");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map