/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screen_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen/Canvas */ \"./src/screen/Canvas.ts\");\n/* harmony import */ var _screen_LightSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen/LightSheet */ \"./src/screen/LightSheet.ts\");\n/* harmony import */ var _util_Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/Vector */ \"./src/util/Vector.ts\");\n\r\n\r\n\r\n//SETUP\r\nconst MYCANVAS = document.querySelector('canvas');\r\nconst ctx = MYCANVAS.getContext('2d');\r\nconst CELLSIZE = 10;\r\nconst WIDTH = window.innerWidth - (window.innerWidth % CELLSIZE);\r\nconst HEIGHT = window.innerHeight - (window.innerHeight % CELLSIZE);\r\nctx.canvas.width = WIDTH;\r\nctx.canvas.height = HEIGHT;\r\n//_________________________\r\n//VARIABLES\r\nvar canvas = new _screen_Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas(HEIGHT / CELLSIZE, WIDTH / CELLSIZE, CELLSIZE);\r\n//TESTS ONLY\r\n// var mazeGen: mazeGenerator = new mazeGenerator(canvas.getCanvasColumns(),canvas.getCanvasRows(),10);\r\n// console.log(mazeGen.size);\r\nvar lightSheetTest = new _screen_LightSheet__WEBPACK_IMPORTED_MODULE_1__.LightSheet(HEIGHT / CELLSIZE, WIDTH / CELLSIZE, CELLSIZE);\r\nlightSheetTest.setLight(new _util_Vector__WEBPACK_IMPORTED_MODULE_2__.Vector(20, 20), 10);\r\nfunction main() {\r\n    //MAIN CODE HERE\r\n    //_______BACKGROUND_________\r\n    //--------------------------//\r\n    ctx.fillStyle = 'rgba(0,0,0,255)';\r\n    ctx.fillRect(0, 0, WIDTH, HEIGHT);\r\n    //--------------------------//\r\n    canvas.render(ctx);\r\n    requestAnimationFrame(main);\r\n}\r\nrequestAnimationFrame(main);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDeUM7QUFDUTtBQUVWO0FBQ3ZDLE9BQU87QUFDUCxNQUFNLFFBQVEsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRSxNQUFNLEdBQUcsR0FBNkIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoRSxNQUFNLFFBQVEsR0FBVyxFQUFFLENBQUM7QUFDNUIsTUFBTSxLQUFLLEdBQVcsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDekUsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFFNUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQiwyQkFBMkI7QUFFM0IsV0FBVztBQUNYLElBQUksTUFBTSxHQUFXLElBQUksa0RBQU0sQ0FBQyxNQUFNLEdBQUMsUUFBUSxFQUFFLEtBQUssR0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFM0UsWUFBWTtBQUNaLHVHQUF1RztBQUN2Ryw2QkFBNkI7QUFFN0IsSUFBSSxjQUFjLEdBQWUsSUFBSSwwREFBVSxDQUFDLE1BQU0sR0FBQyxRQUFRLEVBQUUsS0FBSyxHQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMzRixjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksZ0RBQU0sQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7QUFFOUMsU0FBUyxJQUFJO0lBQ1gsZ0JBQWdCO0lBRWhCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsR0FBRyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztJQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLDhCQUE4QjtJQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBTW5CLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTlCLENBQUM7QUFFRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hemVHZW5lcmF0b3IgfSBmcm9tIFwiLi9tYXplR2VuZXJhdGlvbi9tYXplR2VuZXJhdG9yXCI7XG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9zY3JlZW4vQ2FudmFzXCI7XG5pbXBvcnQgeyBMaWdodFNoZWV0IH0gZnJvbSBcIi4vc2NyZWVuL0xpZ2h0U2hlZXRcIjtcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSBcIi4vdXRpbC9MaWdodFwiO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdXRpbC9WZWN0b3JcIjtcbi8vU0VUVVBcbmNvbnN0IE1ZQ0FOVkFTOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBNWUNBTlZBUy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jb25zdCBDRUxMU0laRTogbnVtYmVyID0gMTA7XG5jb25zdCBXSURUSDogbnVtYmVyID0gd2luZG93LmlubmVyV2lkdGggLSAod2luZG93LmlubmVyV2lkdGggJSBDRUxMU0laRSk7XG5jb25zdCBIRUlHSFQ6IG51bWJlciA9IHdpbmRvdy5pbm5lckhlaWdodCAtICh3aW5kb3cuaW5uZXJIZWlnaHQgJSBDRUxMU0laRSk7XG5cbmN0eC5jYW52YXMud2lkdGggPSBXSURUSDtcbmN0eC5jYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuLy9fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vVkFSSUFCTEVTXG52YXIgY2FudmFzOiBDYW52YXMgPSBuZXcgQ2FudmFzKEhFSUdIVC9DRUxMU0laRSwgV0lEVEgvQ0VMTFNJWkUsIENFTExTSVpFKTtcblxuLy9URVNUUyBPTkxZXG4vLyB2YXIgbWF6ZUdlbjogbWF6ZUdlbmVyYXRvciA9IG5ldyBtYXplR2VuZXJhdG9yKGNhbnZhcy5nZXRDYW52YXNDb2x1bW5zKCksY2FudmFzLmdldENhbnZhc1Jvd3MoKSwxMCk7XG4vLyBjb25zb2xlLmxvZyhtYXplR2VuLnNpemUpO1xuXG52YXIgbGlnaHRTaGVldFRlc3Q6IExpZ2h0U2hlZXQgPSBuZXcgTGlnaHRTaGVldChIRUlHSFQvQ0VMTFNJWkUsIFdJRFRIL0NFTExTSVpFLCBDRUxMU0laRSk7XG5saWdodFNoZWV0VGVzdC5zZXRMaWdodChuZXcgVmVjdG9yKDIwLDIwKSwxMCk7XG5cbmZ1bmN0aW9uIG1haW4oKXtcbiAgLy9NQUlOIENPREUgSEVSRVxuXG4gIC8vX19fX19fX0JBQ0tHUk9VTkRfX19fX19fX19cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwyNTUpJztcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICBjYW52YXMucmVuZGVyKGN0eCk7XG5cblxuXG5cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbik7XG5cbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/screen/Canvas.ts":
/*!******************************!*\
  !*** ./src/screen/Canvas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\n/* harmony import */ var _util_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Color */ \"./src/util/Color.ts\");\n\r\nclass Canvas {\r\n    constructor(rows, columns, cellSize) {\r\n        //setting vars\r\n        this.cellSize = cellSize;\r\n        this.rows = rows;\r\n        this.columns = columns;\r\n        //setting default value of canvas as black (0)\r\n        this.canvas = new Array(rows * columns);\r\n        //test\r\n        var counter = 0;\r\n        for (let y = 0; y < this.rows; y++) {\r\n            for (let x = 0; x < this.columns; x++) {\r\n                this.canvas[this.getIndex(x, y)] = new _util_Color__WEBPACK_IMPORTED_MODULE_0__.Color(counter);\r\n                //test\r\n                counter = (x + y) % 2 * 255;\r\n            }\r\n        }\r\n    }\r\n    //setColorVALS is to set the color value of the canvas pixels without replacing them\r\n    setColorVals(arg) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                this.canvas[this.getIndex(x, y)].setColorVal(arg[this.getIndex(x, y)]);\r\n            }\r\n        }\r\n    }\r\n    //sets individual color VALUES\r\n    setColorVal(x, y, val) {\r\n        if (x >= 0 && x <= this.columns) {\r\n            if (y >= 0 && y <= this.rows) {\r\n                this.canvas[this.getIndex(x, y)].setColorVal(val);\r\n            }\r\n        }\r\n    }\r\n    //sets individual colors\r\n    setColor(x, y, color) {\r\n        if (x >= 0 && x <= this.columns) {\r\n            if (y >= 0 && y <= this.rows) {\r\n                this.canvas[this.getIndex(x, y)] = color;\r\n            }\r\n        }\r\n    }\r\n    //setCOLOR on the other hand replaces the canvas with the specified array of colors\r\n    setColors(arg) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                this.setColor(x, y, arg[this.getIndex(x, y)]);\r\n            }\r\n        }\r\n    }\r\n    //method for renderring the pixels/colors to the screen\r\n    render(ctx) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                var pixel = this.canvas[this.getIndex(x, y)];\r\n                var val = pixel.getColorVal();\r\n                if (val == 0) {\r\n                    ctx.fillStyle = 'black';\r\n                }\r\n                else {\r\n                    ctx.fillStyle = `rgba(${val},${val},${val},255)`;\r\n                }\r\n                ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);\r\n            }\r\n        }\r\n    }\r\n    //GETTERS\r\n    getCanvasRows() {\r\n        return this.rows;\r\n    }\r\n    getCanvasColumns() {\r\n        return this.columns;\r\n    }\r\n    getCanvasCellSize() {\r\n        return this.cellSize;\r\n    }\r\n    getIndex(x, y) {\r\n        let index = y * this.columns + x;\r\n        return index;\r\n    }\r\n    getColors() {\r\n        return this.canvas;\r\n    }\r\n    getColorVal(x, y) {\r\n        if (x >= 0 && x < this.columns && y >= 0 && y < this.rows) {\r\n            return this.canvas[this.getIndex(x, y)].getColorVal();\r\n        }\r\n    }\r\n    //-------------------------------------\r\n    //----------------RESET----------------\r\n    //-------------------------------------\r\n    resetColors() {\r\n        for (var y = 0; y < this.columns; y++) {\r\n            for (var x = 0; x < this.rows; x++) {\r\n                this.canvas[this.getIndex(x, y)].setColorVal(0);\r\n            }\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy9zY3JlZW4vQ2FudmFzLnRzPzc5MTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFFL0IsTUFBTSxNQUFNO0lBUWpCLFlBQVksSUFBWSxFQUFFLE9BQWUsRUFBRSxRQUFnQjtRQUN6RCxjQUFjO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQVEsSUFBSSxHQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE1BQU07UUFDTixJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7UUFDeEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDL0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLDhDQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JELE1BQU07Z0JBQ04sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7SUFDRCxvRkFBb0Y7SUFDcEYsWUFBWSxDQUFDLEdBQWtCO1FBRTNCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBRWhDLEtBQUks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QUM7YUFDaEQ7U0FDRjtJQUNILENBQUM7Q0FFRiIsImZpbGUiOiIuL3NyYy9zY3JlZW4vQ2FudmFzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi4vdXRpbC9Db2xvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc3tcclxuXHJcblxyXG4gIHByaXZhdGUgY2FudmFzOiBDb2xvcltdO1xyXG4gIHByaXZhdGUgcm93czogbnVtYmVyO1xyXG4gIHByaXZhdGUgY29sdW1uczogbnVtYmVyO1xyXG4gIHByaXZhdGUgY2VsbFNpemU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3Iocm93czogbnVtYmVyLCBjb2x1bW5zOiBudW1iZXIsIGNlbGxTaXplOiBudW1iZXIpe1xyXG4gICAgLy9zZXR0aW5nIHZhcnNcclxuICAgIHRoaXMuY2VsbFNpemUgPSBjZWxsU2l6ZTtcclxuXHJcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xyXG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcclxuXHJcbiAgICAvL3NldHRpbmcgZGVmYXVsdCB2YWx1ZSBvZiBjYW52YXMgYXMgYmxhY2sgKDApXHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBBcnJheTxDb2xvcj4ocm93cypjb2x1bW5zKTtcclxuICAgIC8vdGVzdFxyXG4gICAgdmFyIGNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgICBmb3IobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzO3krKyl7XHJcbiAgICAgIGZvcihsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHVtbnM7eCsrKXtcclxuICAgICAgICB0aGlzLmNhbnZhc1t0aGlzLmdldEluZGV4KHgseSldID0gbmV3IENvbG9yKGNvdW50ZXIpO1xyXG4gICAgICAgIC8vdGVzdFxyXG4gICAgICAgIGNvdW50ZXIgPSAoeCt5KSUyKjI1NTtcclxuICAgICAgfSBcclxuICAgIH1cclxuICB9XHJcbiAgLy9zZXRDb2xvclZBTFMgaXMgdG8gc2V0IHRoZSBjb2xvciB2YWx1ZSBvZiB0aGUgY2FudmFzIHBpeGVscyB3aXRob3V0IHJlcGxhY2luZyB0aGVtXHJcbiAgc2V0Q29sb3JWYWxzKGFyZzogQXJyYXk8bnVtYmVyPil7XHJcblxyXG4gICAgICBmb3IodmFyIHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5Kyspe1xyXG5cclxuICAgICAgICBmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5jb2x1bW5zOyB4Kyspe1xyXG5cclxuICAgICAgICAgIHRoaXMuY2FudmFzW3RoaXMuZ2V0SW5kZXgoeCx5KV0uc2V0Q29sb3JWYWwoYXJnW3RoaXMuZ2V0SW5kZXgoeCx5KV0pO1xyXG5cclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG4gIC8vc2V0cyBpbmRpdmlkdWFsIGNvbG9yIFZBTFVFU1xyXG4gIHNldENvbG9yVmFsKHg6IG51bWJlciwgeTogbnVtYmVyLCB2YWw6IG51bWJlcil7XHJcbiAgICBpZih4ID49IDAgJiYgeCA8PSB0aGlzLmNvbHVtbnMpe1xyXG4gICAgICBpZih5ID49IDAgJiYgeSA8PSB0aGlzLnJvd3Mpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzW3RoaXMuZ2V0SW5kZXgoeCx5KV0uc2V0Q29sb3JWYWwodmFsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9zZXRzIGluZGl2aWR1YWwgY29sb3JzXHJcbiAgc2V0Q29sb3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBDb2xvcil7XHJcbiAgICBpZih4ID49IDAgJiYgeCA8PSB0aGlzLmNvbHVtbnMpe1xyXG4gICAgICBpZih5ID49IDAgJiYgeSA8PSB0aGlzLnJvd3Mpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzW3RoaXMuZ2V0SW5kZXgoeCx5KV0gPSBjb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvL3NldENPTE9SIG9uIHRoZSBvdGhlciBoYW5kIHJlcGxhY2VzIHRoZSBjYW52YXMgd2l0aCB0aGUgc3BlY2lmaWVkIGFycmF5IG9mIGNvbG9yc1xyXG4gIHNldENvbG9ycyhhcmc6IEFycmF5PENvbG9yPil7XHJcblxyXG4gICAgZm9yKHZhciB5ID0gMDsgeSA8IHRoaXMucm93czt5Kyspe1xyXG5cclxuICAgICAgZm9yKHZhciB4ID0gMDsgeCA8IHRoaXMuY29sdW1uczt4Kyspe1xyXG5cclxuICAgICAgICB0aGlzLnNldENvbG9yKHgseSxhcmdbdGhpcy5nZXRJbmRleCh4LHkpXSk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvL21ldGhvZCBmb3IgcmVuZGVycmluZyB0aGUgcGl4ZWxzL2NvbG9ycyB0byB0aGUgc2NyZWVuXHJcbiAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKXtcclxuICAgIGZvcih2YXIgeSA9IDA7IHkgPCB0aGlzLnJvd3M7eSsrKXtcclxuXHJcbiAgICAgIGZvcih2YXIgeCA9IDA7IHggPCB0aGlzLmNvbHVtbnM7eCsrKXtcclxuXHJcbiAgICAgICAgdmFyIHBpeGVsOiBDb2xvciA9IHRoaXMuY2FudmFzW3RoaXMuZ2V0SW5kZXgoeCx5KV07XHJcblxyXG4gICAgICAgIHZhciB2YWw6IG51bWJlciA9IHBpeGVsLmdldENvbG9yVmFsKCk7XHJcblxyXG4gICAgICAgIGlmKHZhbCA9PSAwKXtcclxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dmFsfSwke3ZhbH0sJHt2YWx9LDI1NSlgO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCh4ICogdGhpcy5jZWxsU2l6ZSwgeSAqIHRoaXMuY2VsbFNpemUsIHRoaXMuY2VsbFNpemUsdGhpcy5jZWxsU2l6ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gICAgICBcclxuICAgIH0gXHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgLy9HRVRURVJTXHJcbiAgcHVibGljIGdldENhbnZhc1Jvd3MoKTogbnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMucm93cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDYW52YXNDb2x1bW5zKCk6IG51bWJlcntcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2FudmFzQ2VsbFNpemUoKTogbnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbFNpemU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRJbmRleCh4OiBudW1iZXIseTogbnVtYmVyKTogbnVtYmVye1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSB5ICogdGhpcy5jb2x1bW5zICsgeDtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcbiAgcHVibGljIGdldENvbG9ycygpOiBBcnJheTxDb2xvcj57XHJcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRDb2xvclZhbCh4OiBudW1iZXIseTogbnVtYmVyKTogbnVtYmVye1xyXG4gICAgaWYoeCA+PTAgJiYgeCA8IHRoaXMuY29sdW1ucyAmJiB5ID49IDAgJiYgeSA8IHRoaXMucm93cyl7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhbnZhc1t0aGlzLmdldEluZGV4KHgseSldLmdldENvbG9yVmFsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLy0tLS0tLS0tLS0tLS0tLS1SRVNFVC0tLS0tLS0tLS0tLS0tLS1cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwdWJsaWMgcmVzZXRDb2xvcnMoKXtcclxuICAgIGZvcih2YXIgeSA9IDA7IHkgPCB0aGlzLmNvbHVtbnM7IHkrKyl7XHJcbiAgICAgIGZvcih2YXIgeCA9IDA7IHggPCB0aGlzLnJvd3M7eCsrKXtcclxuICAgICAgICB0aGlzLmNhbnZhc1t0aGlzLmdldEluZGV4KHgseSldLnNldENvbG9yVmFsKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/screen/Canvas.ts\n");

/***/ }),

/***/ "./src/screen/LightSheet.ts":
/*!**********************************!*\
  !*** ./src/screen/LightSheet.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LightSheet\": () => (/* binding */ LightSheet)\n/* harmony export */ });\n/* harmony import */ var _util_Light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Light */ \"./src/util/Light.ts\");\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ \"./src/screen/Canvas.ts\");\n\r\n\r\nclass LightSheet {\r\n    constructor(rows, columns, cellSize) {\r\n        this.lightCanvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas(rows, columns, cellSize);\r\n        this.rows = rows;\r\n        this.columns = columns;\r\n        this.cellSize = cellSize;\r\n        this.lights = new Array();\r\n    }\r\n    //GETTERS\r\n    getRows() {\r\n        return this.rows;\r\n    }\r\n    getColumns() {\r\n        return this.columns;\r\n    }\r\n    getCellSize() {\r\n        return this.cellSize;\r\n    }\r\n    //NOT GETTERS OR SETTERS 🤣\r\n    setLight(vec, luminanceValue) {\r\n        this.lights.push(new _util_Light__WEBPACK_IMPORTED_MODULE_0__.Light(vec, luminanceValue));\r\n        console.log(this.lights);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy9zY3JlZW4vTGlnaHRTaGVldC50cz85Y2Y5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUVKO0FBRTNCLE1BQU0sVUFBVTtJQU9uQixZQUFZLElBQVksRUFBRSxPQUFlLEVBQUUsUUFBZ0I7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLDJDQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVM7SUFDRixPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxXQUFXO1FBQ2QsT0FBUSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQkFBMkI7SUFDcEIsUUFBUSxDQUFDLEdBQVcsRUFBQyxjQUFzQjtRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLDhDQUFLLENBQUMsR0FBRyxFQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUlKIiwiZmlsZSI6Ii4vc3JjL3NjcmVlbi9MaWdodFNoZWV0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlnaHQgfSBmcm9tIFwiLi4vdXRpbC9MaWdodFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi4vdXRpbC9WZWN0b3JcIjtcclxuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vQ2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGlnaHRTaGVldHtcclxuICAgIHByaXZhdGUgcm93czogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjb2x1bW5zOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNlbGxTaXplOiBudW1iZXI7XHJcblxyXG4gICAgbGlnaHRzOiBMaWdodFtdO1xyXG4gICAgbGlnaHRDYW52YXM6IENhbnZhcztcclxuICAgIGNvbnN0cnVjdG9yKHJvd3M6IG51bWJlciwgY29sdW1uczogbnVtYmVyLCBjZWxsU2l6ZTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmxpZ2h0Q2FudmFzID0gbmV3IENhbnZhcyhyb3dzLCBjb2x1bW5zLCBjZWxsU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgICAgIHRoaXMuY2VsbFNpemUgPSBjZWxsU2l6ZTtcclxuXHJcbiAgICAgICAgdGhpcy5saWdodHMgPSBuZXcgQXJyYXk8TGlnaHQ+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HRVRURVJTXHJcbiAgICBwdWJsaWMgZ2V0Um93cygpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm93czsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldENvbHVtbnMoKTogbnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbnM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0Q2VsbFNpemUoKTogbnVtYmVye1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5jZWxsU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL05PVCBHRVRURVJTIE9SIFNFVFRFUlMg8J+ko1xyXG4gICAgcHVibGljIHNldExpZ2h0KHZlYzogVmVjdG9yLGx1bWluYW5jZVZhbHVlOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMubGlnaHRzLnB1c2gobmV3IExpZ2h0KHZlYyxsdW1pbmFuY2VWYWx1ZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlnaHRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NFVFRFUlNcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/screen/LightSheet.ts\n");

/***/ }),

/***/ "./src/util/Color.ts":
/*!***************************!*\
  !*** ./src/util/Color.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Color\": () => (/* binding */ Color)\n/* harmony export */ });\n//the color class\r\nclass Color {\r\n    constructor(color) {\r\n        //chacking if the value specified is within the color range\r\n        if (color >= 0 && color <= 255) {\r\n            this.color = color;\r\n        }\r\n        else {\r\n            console.log(\"Color value specified exceeds bounds.\");\r\n        }\r\n    }\r\n    //get the VALUE of the color\r\n    getColorVal() {\r\n        return this.color;\r\n    }\r\n    //get the color OBJECT\r\n    getColor() {\r\n        return this;\r\n    }\r\n    //there is only a color VALUE setter method as I dont think u can change the object itself.. -\\_(^v^)_/-\r\n    setColorVal(val) {\r\n        this.color = val;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy91dGlsL0NvbG9yLnRzPzY0MzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlCQUFpQjtBQUNWLE1BQU0sS0FBSztJQUVkLFlBQVksS0FBYztRQUN0QiwyREFBMkQ7UUFDM0QsSUFBRyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDdEI7YUFDRztZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFDRCw0QkFBNEI7SUFDckIsV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQXNCO0lBQ2YsUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3R0FBd0c7SUFDakcsV0FBVyxDQUFDLEdBQVc7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQztDQUNKIiwiZmlsZSI6Ii4vc3JjL3V0aWwvQ29sb3IudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3RoZSBjb2xvciBjbGFzc1xyXG5leHBvcnQgY2xhc3MgQ29sb3J7XHJcbiAgICBwcml2YXRlIGNvbG9yOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb2xvcj86IG51bWJlcil7XHJcbiAgICAgICAgLy9jaGFja2luZyBpZiB0aGUgdmFsdWUgc3BlY2lmaWVkIGlzIHdpdGhpbiB0aGUgY29sb3IgcmFuZ2VcclxuICAgICAgICBpZihjb2xvciA+PSAwICYmIGNvbG9yIDw9IDI1NSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb2xvciB2YWx1ZSBzcGVjaWZpZWQgZXhjZWVkcyBib3VuZHMuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vZ2V0IHRoZSBWQUxVRSBvZiB0aGUgY29sb3JcclxuICAgIHB1YmxpYyBnZXRDb2xvclZhbCgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XHJcbiAgICB9IFxyXG5cclxuICAgIC8vZ2V0IHRoZSBjb2xvciBPQkpFQ1RcclxuICAgIHB1YmxpYyBnZXRDb2xvcigpOiBDb2xvcntcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvL3RoZXJlIGlzIG9ubHkgYSBjb2xvciBWQUxVRSBzZXR0ZXIgbWV0aG9kIGFzIEkgZG9udCB0aGluayB1IGNhbiBjaGFuZ2UgdGhlIG9iamVjdCBpdHNlbGYuLiAtXFxfKF52XilfLy1cclxuICAgIHB1YmxpYyBzZXRDb2xvclZhbCh2YWw6IG51bWJlcik6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHZhbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/Color.ts\n");

/***/ }),

/***/ "./src/util/Light.ts":
/*!***************************!*\
  !*** ./src/util/Light.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Light\": () => (/* binding */ Light)\n/* harmony export */ });\nclass Light {\r\n    constructor(position, luminanceValue) {\r\n        this.position = position;\r\n        if (luminanceValue >= 0 && luminanceValue <= 10) {\r\n            this.luminanceValue = luminanceValue;\r\n        }\r\n        else {\r\n            throw new Error(\"Invalid light luminance value specified.\");\r\n        }\r\n    }\r\n    //GETTERS\r\n    //POSITIONS\r\n    getPosition() {\r\n        return this.position;\r\n    }\r\n    getPositionX() {\r\n        return this.position.getX();\r\n    }\r\n    getPositionY() {\r\n        return this.position.getY();\r\n    }\r\n    getLuminanceValue() {\r\n        return this.luminanceValue;\r\n    }\r\n    //SETTERS\r\n    setPosition(vec) {\r\n        this.position.setX(vec.getX());\r\n        this.position.setY(vec.getY());\r\n    }\r\n    setPositionX(x) {\r\n        this.position.setX(x);\r\n    }\r\n    setPositionY(y) {\r\n        this.position.setY(y);\r\n    }\r\n    setLuminanceValue(val) {\r\n        if (val >= 0 && val <= 10) {\r\n            this.luminanceValue = val;\r\n        }\r\n        else {\r\n            throw new Error(\"Invalid light luminance value specified while setting.\");\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy91dGlsL0xpZ2h0LnRzPzhhN2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU0sS0FBSztJQUdkLFlBQVksUUFBZ0IsRUFBRSxjQUFzQjtRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFHLGNBQWMsSUFBSSxDQUFDLElBQUksY0FBYyxJQUFJLEVBQUUsRUFBQztZQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUN4QzthQUFJO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQUVELFNBQVM7SUFFVCxXQUFXO0lBQ0osV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQ00sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ00saUJBQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsU0FBUztJQUNGLFdBQVcsQ0FBQyxHQUFXO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTSxZQUFZLENBQUMsQ0FBUztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ00sWUFBWSxDQUFDLENBQVM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNNLGlCQUFpQixDQUFDLEdBQVc7UUFDaEMsSUFBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7U0FDN0I7YUFBSTtZQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUM3RTtJQUNMLENBQUM7Q0FDSiIsImZpbGUiOiIuL3NyYy91dGlsL0xpZ2h0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vVmVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGlnaHR7XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBWZWN0b3I7XHJcbiAgICBwcml2YXRlIGx1bWluYW5jZVZhbHVlOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yLCBsdW1pbmFuY2VWYWx1ZTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgIGlmKGx1bWluYW5jZVZhbHVlID49IDAgJiYgbHVtaW5hbmNlVmFsdWUgPD0gMTApe1xyXG4gICAgICAgICAgICB0aGlzLmx1bWluYW5jZVZhbHVlID0gbHVtaW5hbmNlVmFsdWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGlnaHQgbHVtaW5hbmNlIHZhbHVlIHNwZWNpZmllZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vR0VUVEVSU1xyXG5cclxuICAgIC8vUE9TSVRJT05TXHJcbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogVmVjdG9ye1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFBvc2l0aW9uWCgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24uZ2V0WCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFBvc2l0aW9uWSgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24uZ2V0WSgpO1xyXG4gICAgfSAgICBcclxuICAgIHB1YmxpYyBnZXRMdW1pbmFuY2VWYWx1ZSgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubHVtaW5hbmNlVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TRVRURVJTXHJcbiAgICBwdWJsaWMgc2V0UG9zaXRpb24odmVjOiBWZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0WCh2ZWMuZ2V0WCgpKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldFkodmVjLmdldFkoKSk7ICAgICAgICBcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRQb3NpdGlvblgoeDogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldFgoeCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0UG9zaXRpb25ZKHk6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXRZKHkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEx1bWluYW5jZVZhbHVlKHZhbDogbnVtYmVyKXtcclxuICAgICAgICBpZih2YWwgPj0gMCAmJiB2YWwgPD0gMTApe1xyXG4gICAgICAgICAgICB0aGlzLmx1bWluYW5jZVZhbHVlID0gdmFsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxpZ2h0IGx1bWluYW5jZSB2YWx1ZSBzcGVjaWZpZWQgd2hpbGUgc2V0dGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/Light.ts\n");

/***/ }),

/***/ "./src/util/Vector.ts":
/*!****************************!*\
  !*** ./src/util/Vector.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\n//Vector class for ease of calcuations in the future 😎\r\nclass Vector {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    //simple add, subtract, multiply and division methods\r\n    //➕\r\n    add(vec) {\r\n        this.x += vec.x;\r\n        this.y += vec.y;\r\n    }\r\n    //➖\r\n    sub(vec) {\r\n        this.x -= vec.x;\r\n        this.y -= vec.y;\r\n    }\r\n    //✖\r\n    mul(vec) {\r\n        this.x *= vec.x;\r\n        this.y *= vec.y;\r\n    }\r\n    //➗\r\n    div(vec) {\r\n        this.x /= vec.x;\r\n        this.y /= vec.y;\r\n    }\r\n    //getters\r\n    getX() {\r\n        return this.x;\r\n    }\r\n    getY() {\r\n        return this.y;\r\n    }\r\n    //setters\r\n    setX(x) {\r\n        this.x = x;\r\n    }\r\n    setY(y) {\r\n        this.y = y;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy91dGlsL1ZlY3Rvci50cz80Mzk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1REFBdUQ7QUFDaEQsTUFBTSxNQUFNO0lBSWpCLFlBQVksQ0FBUyxFQUFFLENBQVM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxxREFBcUQ7SUFFckQsR0FBRztJQUNJLEdBQUcsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEIsQ0FBQztJQUVELEdBQUc7SUFDSSxHQUFHLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxHQUFHO0lBQ0ksR0FBRyxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsR0FBRztJQUNJLEdBQUcsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVM7SUFDRixJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDTSxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxTQUFTO0lBQ0YsSUFBSSxDQUFDLENBQVM7UUFDbkIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ00sSUFBSSxDQUFDLENBQVM7UUFDbkIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0NBRUYiLCJmaWxlIjoiLi9zcmMvdXRpbC9WZWN0b3IudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1ZlY3RvciBjbGFzcyBmb3IgZWFzZSBvZiBjYWxjdWF0aW9ucyBpbiB0aGUgZnV0dXJlIPCfmI5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcntcclxuICBwcml2YXRlIHg6IG51bWJlcjtcclxuICBwcml2YXRlIHk6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG4gIC8vc2ltcGxlIGFkZCwgc3VidHJhY3QsIG11bHRpcGx5IGFuZCBkaXZpc2lvbiBtZXRob2RzXHJcblxyXG4gIC8v4p6VXHJcbiAgcHVibGljIGFkZCh2ZWM6IFZlY3Rvcik6IHZvaWR7XHJcbiAgICB0aGlzLnggKz0gdmVjLng7XHJcbiAgICB0aGlzLnkgKz0gdmVjLnk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy/inpZcclxuICBwdWJsaWMgc3ViKHZlYzogVmVjdG9yKTogdm9pZHtcclxuICAgIHRoaXMueCAtPSB2ZWMueDtcclxuICAgIHRoaXMueSAtPSB2ZWMueTtcclxuICB9XHJcblxyXG4gIC8v4pyWXHJcbiAgcHVibGljIG11bCh2ZWM6IFZlY3Rvcik6IHZvaWR7XHJcbiAgICB0aGlzLnggKj0gdmVjLng7XHJcbiAgICB0aGlzLnkgKj0gdmVjLnk7XHJcbiAgfVxyXG5cclxuICAvL+Kel1xyXG4gIHB1YmxpYyBkaXYodmVjOiBWZWN0b3IpOiB2b2lke1xyXG4gICAgdGhpcy54IC89IHZlYy54O1xyXG4gICAgdGhpcy55IC89IHZlYy55O1xyXG4gIH1cclxuXHJcbiAgLy9nZXR0ZXJzXHJcbiAgcHVibGljIGdldFgoKTogbnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMueDtcclxuICB9XHJcbiAgcHVibGljIGdldFkoKTogbnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMueTtcclxuICB9XHJcblxyXG4gIC8vc2V0dGVyc1xyXG4gIHB1YmxpYyBzZXRYKHg6IG51bWJlcik6IHZvaWR7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gIH1cclxuICBwdWJsaWMgc2V0WSh5OiBudW1iZXIpOiB2b2lke1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/Vector.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;