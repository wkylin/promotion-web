"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[892],{

/***/ 892:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ detail; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var style = __webpack_require__(632);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/style/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(2206);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(344);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(1131);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(1770);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(1373);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5164);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js
var es = __webpack_require__(4084);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useRaf.js



function useRaf(callback) {
  var rafRef = (0,react.useRef)();
  var removedRef = (0,react.useRef)(false);

  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!removedRef.current) {
      raf/* default.cancel */.Z.cancel(rafRef.current);
      rafRef.current = (0,raf/* default */.Z)(function () {
        callback.apply(void 0, args);
      });
    }
  }

  (0,react.useEffect)(function () {
    return function () {
      removedRef.current = true;
      raf/* default.cancel */.Z.cancel(rafRef.current);
    };
  }, []);
  return trigger;
}
function useRafState(defaultState) {
  var batchRef = (0,react.useRef)([]);

  var _useState = (0,react.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      forceUpdate = _useState2[1];

  var state = (0,react.useRef)(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useRaf(function () {
    var current = state.current;
    batchRef.current.forEach(function (callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });

  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }

  return [state.current, updater];
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(5105);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/TabNode.js





function TabNode(_ref, ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      active = _ref.active,
      _ref$tab = _ref.tab,
      key = _ref$tab.key,
      tab = _ref$tab.tab,
      disabled = _ref$tab.disabled,
      closeIcon = _ref$tab.closeIcon,
      closable = _ref.closable,
      renderWrapper = _ref.renderWrapper,
      removeAriaLabel = _ref.removeAriaLabel,
      editable = _ref.editable,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      onFocus = _ref.onFocus,
      style = _ref.style;
  var tabPrefix = "".concat(prefixCls, "-tab");
  react.useEffect(function () {
    return onRemove;
  }, []);
  var removable = editable && closable !== false && !disabled;

  function onInternalClick(e) {
    if (disabled) {
      return;
    }

    onClick(e);
  }

  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }

  var node = /*#__PURE__*/react.createElement("div", {
    key: key,
    ref: ref,
    className: classnames_default()(tabPrefix, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(tabPrefix, "-with-remove"), removable), (0,defineProperty/* default */.Z)(_classNames, "".concat(tabPrefix, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style: style,
    onClick: onInternalClick
  }, /*#__PURE__*/react.createElement("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([KeyCode/* default.SPACE */.Z.SPACE, KeyCode/* default.ENTER */.Z.ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, tab), removable && /*#__PURE__*/react.createElement("button", {
    type: "button",
    "aria-label": removeAriaLabel || 'remove',
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || '×'));
  return renderWrapper ? renderWrapper(node) : node;
}

/* harmony default export */ var TabNavList_TabNode = (/*#__PURE__*/react.forwardRef(TabNode));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useOffsets.js


var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return (0,react.useMemo)(function () {
    var _tabs$;

    var map = new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;

    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key); // Reuse last one when not exist yet

      if (!data) {
        var _tabs;

        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
      }

      var entity = map.get(key) || (0,objectSpread2/* default */.Z)({}, data); // Right


      entity.right = rightOffset - entity.left - entity.width; // Update entity

      map.set(key, entity);
    }

    return map;
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), tabSizes, holderScrollWidth]);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useVisibleRange.js

var useVisibleRange_DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, containerSize, tabContentNodeSize, addNodeSize, _ref) {
  var tabs = _ref.tabs,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl;
  var unit;
  var position;
  var transformSize;

  if (['top', 'bottom'].includes(tabPosition)) {
    unit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(containerSize.left);
  } else {
    unit = 'height';
    position = 'top';
    transformSize = -containerSize.top;
  }

  var basicSize = containerSize[unit];
  var tabContentSize = tabContentNodeSize[unit];
  var addSize = addNodeSize[unit];
  var mergedBasicSize = basicSize;

  if (tabContentSize + addSize > basicSize) {
    mergedBasicSize = basicSize - addSize;
  }

  return (0,react.useMemo)(function () {
    if (!tabs.length) {
      return [0, 0];
    }

    var len = tabs.length;
    var endIndex = len;

    for (var i = 0; i < len; i += 1) {
      var offset = tabOffsets.get(tabs[i].key) || useVisibleRange_DEFAULT_SIZE;

      if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
        endIndex = i - 1;
        break;
      }
    }

    var startIndex = 0;

    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || useVisibleRange_DEFAULT_SIZE;

      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }

    return [startIndex, endIndex];
  }, [tabOffsets, transformSize, mergedBasicSize, tabPosition, tabs.map(function (tab) {
    return tab.key;
  }).join('_'), rtl]);
}
// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 24 modules
var rc_menu_es = __webpack_require__(985);
// EXTERNAL MODULE: ./node_modules/rc-dropdown/es/index.js + 2 modules
var rc_dropdown_es = __webpack_require__(271);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/AddButton.js


function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      editable = _ref.editable,
      locale = _ref.locale,
      style = _ref.style;

  if (!editable || editable.showAdd === false) {
    return null;
  }

  return /*#__PURE__*/react.createElement("button", {
    ref: ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style: style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
    onClick: function onClick(event) {
      editable.onEdit('add', {
        event: event
      });
    }
  }, editable.addIcon || '+');
}

/* harmony default export */ var TabNavList_AddButton = (/*#__PURE__*/react.forwardRef(AddButton));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/OperationNode.js










function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      tabs = _ref.tabs,
      locale = _ref.locale,
      mobile = _ref.mobile,
      _ref$moreIcon = _ref.moreIcon,
      moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      style = _ref.style,
      className = _ref.className,
      editable = _ref.editable,
      tabBarGutter = _ref.tabBarGutter,
      rtl = _ref.rtl,
      onTabClick = _ref.onTabClick;

  // ======================== Dropdown ========================
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      selectedKey = _useState4[0],
      setSelectedKey = _useState4[1];

  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  var menu = /*#__PURE__*/react.createElement(rc_menu_es/* default */.ZP, {
    onClick: function onClick(_ref2) {
      var key = _ref2.key,
          domEvent = _ref2.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
  }, tabs.map(function (tab) {
    return /*#__PURE__*/react.createElement(rc_menu_es/* MenuItem */.sN, {
      key: tab.key,
      id: "".concat(popupId, "-").concat(tab.key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
      disabled: tab.disabled
    }, tab.tab);
  }));

  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function (tab) {
      return !tab.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function (tab) {
      return tab.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;

    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];

      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }

  function onKeyDown(e) {
    var which = e.which;

    if (!open) {
      if ([KeyCode/* default.DOWN */.Z.DOWN, KeyCode/* default.SPACE */.Z.SPACE, KeyCode/* default.ENTER */.Z.ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }

      return;
    }

    switch (which) {
      case KeyCode/* default.UP */.Z.UP:
        selectOffset(-1);
        e.preventDefault();
        break;

      case KeyCode/* default.DOWN */.Z.DOWN:
        selectOffset(1);
        e.preventDefault();
        break;

      case KeyCode/* default.ESC */.Z.ESC:
        setOpen(false);
        break;

      case KeyCode/* default.SPACE */.Z.SPACE:
      case KeyCode/* default.ENTER */.Z.ENTER:
        if (selectedKey !== null) onTabClick(selectedKey, e);
        break;
    }
  } // ========================= Effect =========================


  (0,react.useEffect)(function () {
    // We use query element here to avoid React strict warning
    var ele = document.getElementById(selectedItemId);

    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  (0,react.useEffect)(function () {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]); // ========================= Render =========================

  var moreStyle = (0,defineProperty/* default */.Z)({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);

  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }

  var overlayClassName = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : /*#__PURE__*/react.createElement(rc_dropdown_es/* default */.Z, {
    prefixCls: dropdownPrefix,
    overlay: menu,
    trigger: ['hover'],
    visible: open,
    transitionName: moreTransitionName,
    onVisibleChange: setOpen,
    overlayClassName: overlayClassName,
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown: onKeyDown
  }, moreIcon));
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-nav-operations"), className),
    style: style,
    ref: ref
  }, moreNode, /*#__PURE__*/react.createElement(TabNavList_AddButton, {
    prefixCls: prefixCls,
    locale: locale,
    editable: editable
  }));
}

/* harmony default export */ var TabNavList_OperationNode = (/*#__PURE__*/react.forwardRef(OperationNode));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabContext.js

/* harmony default export */ var TabContext = (/*#__PURE__*/(0,react.createContext)(null));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useTouchMove.js



var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL); // ================================= Hook =================================

function useTouchMove(ref, onOffset) {
  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      touchPosition = _useState2[0],
      setTouchPosition = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      lastTimestamp = _useState4[0],
      setLastTimestamp = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      lastTimeDiff = _useState6[0],
      setLastTimeDiff = _useState6[1];

  var _useState7 = (0,react.useState)(),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      lastOffset = _useState8[0],
      setLastOffset = _useState8[1];

  var motionRef = (0,react.useRef)(); // ========================= Events =========================
  // >>> Touch events

  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
        screenX = _e$touches$.screenX,
        screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }

  function onTouchMove(e) {
    if (!touchPosition) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
        screenX = _e$touches$2.screenX,
        screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }

  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null); // Swipe if needed

    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY); // Skip swipe if low distance

      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }

        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  } // >>> Wheel event


  var lastWheelDirectionRef = (0,react.useRef)();

  function onWheel(e) {
    var deltaX = e.deltaX,
        deltaY = e.deltaY; // Convert both to x & y since wheel only happened on PC

    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);

    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    }

    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  } // ========================= Effect =========================


  var touchEventsRef = (0,react.useRef)(null);
  touchEventsRef.current = {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  };
  react.useEffect(function () {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }

    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }

    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }

    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }

    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    }); // No need to clean up since element removed

    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener('wheel', onProxyWheel);
    return function () {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useRefs.js


function useRefs() {
  var cacheRefs = (0,react.useRef)(new Map());

  function getRef(key) {
    if (!cacheRefs.current.has(key)) {
      cacheRefs.current.set(key, /*#__PURE__*/react.createRef());
    }

    return cacheRefs.current.get(key);
  }

  function removeRef(key) {
    cacheRefs.current.delete(key);
  }

  return [getRef, removeRef];
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useSyncState.js


function useSyncState(defaultState, onChange) {
  var stateRef = react.useRef(defaultState);

  var _React$useState = react.useState({}),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;

    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }

    stateRef.current = newValue;
    forceUpdate({});
  }

  return [stateRef.current, setState];
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/index.js






















var ExtraContent = function ExtraContent(_ref) {
  var position = _ref.position,
      prefixCls = _ref.prefixCls,
      extra = _ref.extra;
  if (!extra) return null;
  var content; // Parse extra

  var assertExtra = {};

  if (extra && (0,esm_typeof/* default */.Z)(extra) === 'object' && ! /*#__PURE__*/react.isValidElement(extra)) {
    assertExtra = extra;
  } else {
    assertExtra.right = extra;
  }

  if (position === 'right') {
    content = assertExtra.right;
  }

  if (position === 'left') {
    content = assertExtra.left;
  }

  return content ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-extra-content")
  }, content) : null;
};

function TabNavList(props, ref) {
  var _classNames;

  var _React$useContext = react.useContext(TabContext),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var className = props.className,
      style = props.style,
      id = props.id,
      animated = props.animated,
      activeKey = props.activeKey,
      rtl = props.rtl,
      extra = props.extra,
      editable = props.editable,
      locale = props.locale,
      tabPosition = props.tabPosition,
      tabBarGutter = props.tabBarGutter,
      children = props.children,
      onTabClick = props.onTabClick,
      onTabScroll = props.onTabScroll;
  var tabsWrapperRef = (0,react.useRef)();
  var tabListRef = (0,react.useRef)();
  var operationsRef = (0,react.useRef)();
  var innerAddButtonRef = (0,react.useRef)();

  var _useRefs = useRefs(),
      _useRefs2 = (0,slicedToArray/* default */.Z)(_useRefs, 2),
      getBtnRef = _useRefs2[0],
      removeBtnRef = _useRefs2[1];

  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';

  var _useSyncState = useSyncState(0, function (next, prev) {
    if (tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'left' : 'right'
      });
    }
  }),
      _useSyncState2 = (0,slicedToArray/* default */.Z)(_useSyncState, 2),
      transformLeft = _useSyncState2[0],
      setTransformLeft = _useSyncState2[1];

  var _useSyncState3 = useSyncState(0, function (next, prev) {
    if (!tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'top' : 'bottom'
      });
    }
  }),
      _useSyncState4 = (0,slicedToArray/* default */.Z)(_useSyncState3, 2),
      transformTop = _useSyncState4[0],
      setTransformTop = _useSyncState4[1];

  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      wrapperScrollWidth = _useState2[0],
      setWrapperScrollWidth = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      wrapperScrollHeight = _useState4[0],
      setWrapperScrollHeight = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      wrapperContentWidth = _useState6[0],
      setWrapperContentWidth = _useState6[1];

  var _useState7 = (0,react.useState)(0),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      wrapperContentHeight = _useState8[0],
      setWrapperContentHeight = _useState8[1];

  var _useState9 = (0,react.useState)(null),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      wrapperWidth = _useState10[0],
      setWrapperWidth = _useState10[1];

  var _useState11 = (0,react.useState)(null),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      wrapperHeight = _useState12[0],
      setWrapperHeight = _useState12[1];

  var _useState13 = (0,react.useState)(0),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      addWidth = _useState14[0],
      setAddWidth = _useState14[1];

  var _useState15 = (0,react.useState)(0),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      addHeight = _useState16[0],
      setAddHeight = _useState16[1];

  var _useRafState = useRafState(new Map()),
      _useRafState2 = (0,slicedToArray/* default */.Z)(_useRafState, 2),
      tabSizes = _useRafState2[0],
      setTabSizes = _useRafState2[1];

  var tabOffsets = useOffsets(tabs, tabSizes, wrapperScrollWidth); // ========================== Util =========================

  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;

  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, wrapperHeight - wrapperScrollHeight);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, wrapperScrollWidth - wrapperWidth);
  } else {
    transformMin = Math.min(0, wrapperWidth - wrapperScrollWidth);
    transformMax = 0;
  }

  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }

    if (value > transformMax) {
      return transformMax;
    }

    return value;
  } // ========================= Mobile ========================


  var touchMovingRef = (0,react.useRef)();

  var _useState17 = (0,react.useState)(),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      lockAnimation = _useState18[0],
      setLockAnimation = _useState18[1];

  function doLockAnimation() {
    setLockAnimation(Date.now());
  }

  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }

  useTouchMove(tabsWrapperRef, function (offsetX, offsetY) {
    function doMove(setState, offset) {
      setState(function (value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    }

    if (tabPositionTopOrBottom) {
      // Skip scroll if place is enough
      if (wrapperWidth >= wrapperScrollWidth) {
        return false;
      }

      doMove(setTransformLeft, offsetX);
    } else {
      if (wrapperHeight >= wrapperScrollHeight) {
        return false;
      }

      doMove(setTransformTop, offsetY);
    }

    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  (0,react.useEffect)(function () {
    clearTouchMoving();

    if (lockAnimation) {
      touchMovingRef.current = window.setTimeout(function () {
        setLockAnimation(0);
      }, 100);
    }

    return clearTouchMoving;
  }, [lockAnimation]); // ========================= Scroll ========================

  function scrollToTab() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };

    if (tabPositionTopOrBottom) {
      // ============ Align with top & bottom ============
      var newTransform = transformLeft; // RTL

      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + wrapperWidth) {
          newTransform = tabOffset.right + tabOffset.width - wrapperWidth;
        }
      } // LTR
      else if (tabOffset.left < -transformLeft) {
        newTransform = -tabOffset.left;
      } else if (tabOffset.left + tabOffset.width > -transformLeft + wrapperWidth) {
        newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth);
      }

      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      // ============ Align with left & right ============
      var _newTransform = transformTop;

      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + wrapperHeight) {
        _newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight);
      }

      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform));
    }
  } // ========================== Tab ==========================
  // Render tab node & collect tab offset


  var _useVisibleRange = useVisibleRange(tabOffsets, {
    width: wrapperWidth,
    height: wrapperHeight,
    left: transformLeft,
    top: transformTop
  }, {
    width: wrapperContentWidth,
    height: wrapperContentHeight
  }, {
    width: addWidth,
    height: addHeight
  }, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    tabs: tabs
  })),
      _useVisibleRange2 = (0,slicedToArray/* default */.Z)(_useVisibleRange, 2),
      visibleStart = _useVisibleRange2[0],
      visibleEnd = _useVisibleRange2[1];

  var tabNodeStyle = {};

  if (tabPosition === 'top' || tabPosition === 'bottom') {
    tabNodeStyle[rtl ? 'marginRight' : 'marginLeft'] = tabBarGutter;
  } else {
    tabNodeStyle.marginTop = tabBarGutter;
  }

  var tabNodes = tabs.map(function (tab, i) {
    var key = tab.key;
    return /*#__PURE__*/react.createElement(TabNavList_TabNode, {
      id: id,
      prefixCls: prefixCls,
      key: key,
      tab: tab
      /* first node should not have margin left */
      ,
      style: i === 0 ? undefined : tabNodeStyle,
      closable: tab.closable,
      editable: editable,
      active: key === activeKey,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      ref: getBtnRef(key),
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onRemove: function onRemove() {
        removeBtnRef(key);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation();

        if (!tabsWrapperRef.current) {
          return;
        } // Focus element will make scrollLeft change which we should reset back


        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }

        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });
  var onListHolderResize = useRaf(function () {
    var _tabsWrapperRef$curre, _tabsWrapperRef$curre2, _innerAddButtonRef$cu, _innerAddButtonRef$cu2, _operationsRef$curren, _operationsRef$curren2, _tabListRef$current, _tabListRef$current2, _operationsRef$curren3;

    // Update wrapper records
    var offsetWidth = ((_tabsWrapperRef$curre = tabsWrapperRef.current) === null || _tabsWrapperRef$curre === void 0 ? void 0 : _tabsWrapperRef$curre.offsetWidth) || 0;
    var offsetHeight = ((_tabsWrapperRef$curre2 = tabsWrapperRef.current) === null || _tabsWrapperRef$curre2 === void 0 ? void 0 : _tabsWrapperRef$curre2.offsetHeight) || 0;
    var newAddWidth = ((_innerAddButtonRef$cu = innerAddButtonRef.current) === null || _innerAddButtonRef$cu === void 0 ? void 0 : _innerAddButtonRef$cu.offsetWidth) || 0;
    var newAddHeight = ((_innerAddButtonRef$cu2 = innerAddButtonRef.current) === null || _innerAddButtonRef$cu2 === void 0 ? void 0 : _innerAddButtonRef$cu2.offsetHeight) || 0;
    var newOperationWidth = ((_operationsRef$curren = operationsRef.current) === null || _operationsRef$curren === void 0 ? void 0 : _operationsRef$curren.offsetWidth) || 0;
    var newOperationHeight = ((_operationsRef$curren2 = operationsRef.current) === null || _operationsRef$curren2 === void 0 ? void 0 : _operationsRef$curren2.offsetHeight) || 0;
    setWrapperWidth(offsetWidth);
    setWrapperHeight(offsetHeight);
    setAddWidth(newAddWidth);
    setAddHeight(newAddHeight);
    var newWrapperScrollWidth = (((_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.offsetWidth) || 0) - newAddWidth;
    var newWrapperScrollHeight = (((_tabListRef$current2 = tabListRef.current) === null || _tabListRef$current2 === void 0 ? void 0 : _tabListRef$current2.offsetHeight) || 0) - newAddHeight;
    setWrapperScrollWidth(newWrapperScrollWidth);
    setWrapperScrollHeight(newWrapperScrollHeight);
    var isOperationHidden = (_operationsRef$curren3 = operationsRef.current) === null || _operationsRef$curren3 === void 0 ? void 0 : _operationsRef$curren3.className.includes(operationsHiddenClassName);
    setWrapperContentWidth(newWrapperScrollWidth - (isOperationHidden ? 0 : newOperationWidth));
    setWrapperContentHeight(newWrapperScrollHeight - (isOperationHidden ? 0 : newOperationHeight)); // Update buttons records

    setTabSizes(function () {
      var newSizes = new Map();
      tabs.forEach(function (_ref2) {
        var key = _ref2.key;
        var btnNode = getBtnRef(key).current;

        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  }); // ======================== Dropdown =======================

  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat((0,toConsumableArray/* default */.Z)(startHiddenTabs), (0,toConsumableArray/* default */.Z)(endHiddenTabs)); // =================== Link & Operations ===================

  var _useState19 = (0,react.useState)(),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      inkStyle = _useState20[0],
      setInkStyle = _useState20[1];

  var activeTabOffset = tabOffsets.get(activeKey); // Delay set ink style to avoid remove tab blink

  var inkBarRafRef = (0,react.useRef)();

  function cleanInkBarRaf() {
    raf/* default.cancel */.Z.cancel(inkBarRafRef.current);
  }

  (0,react.useEffect)(function () {
    var newInkStyle = {};

    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }

        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }

    cleanInkBarRaf();
    inkBarRafRef.current = (0,raf/* default */.Z)(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]); // ========================= Effect ========================

  (0,react.useEffect)(function () {
    scrollToTab();
  }, [activeKey, activeTabOffset, tabOffsets, tabPositionTopOrBottom]); // Should recalculate when rtl changed

  (0,react.useEffect)(function () {
    onListHolderResize();
  }, [rtl, tabBarGutter, activeKey, tabs.map(function (tab) {
    return tab.key;
  }).join('_')]); // ========================= Render ========================

  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;

  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft + wrapperWidth < wrapperScrollWidth;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = -transformLeft + wrapperWidth < wrapperScrollWidth;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = -transformTop + wrapperHeight < wrapperScrollHeight;
  }

  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    role: "tablist",
    className: classnames_default()("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {
      // No need animation when use keyboard
      doLockAnimation();
    }
  }, /*#__PURE__*/react.createElement(ExtraContent, {
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onListHolderResize
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(wrapPrefix, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), (0,defineProperty/* default */.Z)(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), (0,defineProperty/* default */.Z)(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), (0,defineProperty/* default */.Z)(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
    ref: tabsWrapperRef
  }, /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onListHolderResize
  }, /*#__PURE__*/react.createElement("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? 'none' : undefined
    }
  }, tabNodes, /*#__PURE__*/react.createElement(TabNavList_AddButton, {
    ref: innerAddButtonRef,
    prefixCls: prefixCls,
    locale: locale,
    editable: editable,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, tabNodes.length === 0 ? undefined : tabNodeStyle), {}, {
      visibility: hasDropdown ? 'hidden' : null
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-ink-bar"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: inkStyle
  }))))), /*#__PURE__*/react.createElement(TabNavList_OperationNode, (0,esm_extends/* default */.Z)({}, props, {
    ref: operationsRef,
    prefixCls: prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName
  })), /*#__PURE__*/react.createElement(ExtraContent, {
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  }));
  /* eslint-enable */
}

/* harmony default export */ var es_TabNavList = (/*#__PURE__*/react.forwardRef(TabNavList));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/index.js




function TabPanelList(_ref) {
  var id = _ref.id,
      activeKey = _ref.activeKey,
      animated = _ref.animated,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane;

  var _React$useContext = react.useContext(TabContext),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var tabPaneAnimated = animated.tabPane;
  var activeIndex = tabs.findIndex(function (tab) {
    return tab.key === activeKey;
  });
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content-holder"))
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated)),
    style: activeIndex && tabPaneAnimated ? (0,defineProperty/* default */.Z)({}, rtl ? 'marginRight' : 'marginLeft', "-".concat(activeIndex, "00%")) : null
  }, tabs.map(function (tab) {
    return /*#__PURE__*/react.cloneElement(tab.node, {
      key: tab.key,
      prefixCls: prefixCls,
      tabKey: tab.key,
      id: id,
      animated: tabPaneAnimated,
      active: tab.key === activeKey,
      destroyInactiveTabPane: destroyInactiveTabPane
    });
  })));
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/TabPane.js




function TabPane(_ref) {
  var prefixCls = _ref.prefixCls,
      forceRender = _ref.forceRender,
      className = _ref.className,
      style = _ref.style,
      id = _ref.id,
      active = _ref.active,
      animated = _ref.animated,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      tabKey = _ref.tabKey,
      children = _ref.children;

  var _React$useState = react.useState(forceRender),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      visited = _React$useState2[0],
      setVisited = _React$useState2[1];

  react.useEffect(function () {
    if (active) {
      setVisited(true);
    } else if (destroyInactiveTabPane) {
      setVisited(false);
    }
  }, [active, destroyInactiveTabPane]);
  var mergedStyle = {};

  if (!active) {
    if (animated) {
      mergedStyle.visibility = 'hidden';
      mergedStyle.height = 0;
      mergedStyle.overflowY = 'hidden';
    } else {
      mergedStyle.display = 'none';
    }
  }

  return /*#__PURE__*/react.createElement("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedStyle), style),
    className: classnames_default()("".concat(prefixCls, "-tabpane"), active && "".concat(prefixCls, "-tabpane-active"), className)
  }, (active || visited || forceRender) && children);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/Tabs.js






var _excluded = ["id", "prefixCls", "className", "children", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll"];
// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role










/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */
// Used for accessibility

var uuid = 0;

function parseTabList(children) {
  return (0,toArray/* default */.Z)(children).map(function (node) {
    if ( /*#__PURE__*/react.isValidElement(node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        key: key
      }, node.props), {}, {
        node: node
      });
    }

    return null;
  }).filter(function (tab) {
    return tab;
  });
}

function Tabs(_ref, ref) {
  var _classNames;

  var id = _ref.id,
      _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-tabs' : _ref$prefixCls,
      className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      activeKey = _ref.activeKey,
      defaultActiveKey = _ref.defaultActiveKey,
      editable = _ref.editable,
      _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? {
    inkBar: true,
    tabPane: false
  } : _ref$animated,
      _ref$tabPosition = _ref.tabPosition,
      tabPosition = _ref$tabPosition === void 0 ? 'top' : _ref$tabPosition,
      tabBarGutter = _ref.tabBarGutter,
      tabBarStyle = _ref.tabBarStyle,
      tabBarExtraContent = _ref.tabBarExtraContent,
      locale = _ref.locale,
      moreIcon = _ref.moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      renderTabBar = _ref.renderTabBar,
      onChange = _ref.onChange,
      onTabClick = _ref.onTabClick,
      onTabScroll = _ref.onTabScroll,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  var tabs = parseTabList(children);
  var rtl = direction === 'rtl';
  var mergedAnimated;

  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = (0,objectSpread2/* default */.Z)({
      inkBar: true,
      tabPane: false
    }, (0,esm_typeof/* default */.Z)(animated) === 'object' ? animated : {});
  } // ======================== Mobile ========================


  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      mobile = _useState2[0],
      setMobile = _useState2[1];

  (0,react.useEffect)(function () {
    // Only update on the client side
    setMobile((0,isMobile/* default */.Z)());
  }, []); // ====================== Active Key ======================

  var _useMergedState = (0,useMergedState/* default */.Z)(function () {
    var _tabs$;

    return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
  }, {
    value: activeKey,
    defaultValue: defaultActiveKey
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      mergedActiveKey = _useMergedState2[0],
      setMergedActiveKey = _useMergedState2[1];

  var _useState3 = (0,react.useState)(function () {
    return tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
  }),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1]; // Reset active key if not exist anymore


  (0,react.useEffect)(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });

    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;

      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }

    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]); // ===================== Accessibility ====================

  var _useMergedState3 = (0,useMergedState/* default */.Z)(null, {
    value: id
  }),
      _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
      mergedId = _useMergedState4[0],
      setMergedId = _useMergedState4[1];

  var mergedTabPosition = tabPosition;

  if (mobile && !['left', 'right'].includes(tabPosition)) {
    mergedTabPosition = 'top';
  } // Async generate id to avoid ssr mapping failed


  (0,react.useEffect)(function () {
    if (!id) {
      setMergedId("rc-tabs-".concat( false ? 0 : uuid));
      uuid += 1;
    }
  }, []); // ======================== Events ========================

  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    setMergedActiveKey(key);
    onChange === null || onChange === void 0 ? void 0 : onChange(key);
  } // ======================== Render ========================


  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition: mergedTabPosition,
    rtl: rtl,
    mobile: mobile
  };
  var tabNavBar;

  var tabNavBarProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, sharedProps), {}, {
    editable: editable,
    locale: locale,
    moreIcon: moreIcon,
    moreTransitionName: moreTransitionName,
    tabBarGutter: tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll: onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: children
  });

  if (renderTabBar) {
    tabNavBar = renderTabBar(tabNavBarProps, es_TabNavList);
  } else {
    tabNavBar = /*#__PURE__*/react.createElement(es_TabNavList, tabNavBarProps);
  }

  return /*#__PURE__*/react.createElement(TabContext.Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    ref: ref,
    id: id,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(mergedTabPosition), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-mobile"), mobile), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-editable"), editable), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), rtl), _classNames), className)
  }, restProps), tabNavBar, /*#__PURE__*/react.createElement(TabPanelList, (0,esm_extends/* default */.Z)({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
}

var ForwardTabs = /*#__PURE__*/react.forwardRef(Tabs);
ForwardTabs.TabPane = TabPane;
/* harmony default export */ var es_Tabs = (ForwardTabs);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/index.js



/* harmony default export */ var rc_tabs_es = (es_Tabs);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(4545);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
// This icon file is generated automatically.
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
/* harmony default export */ var asn_PlusOutlined = (PlusOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(76);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PlusOutlined_PlusOutlined = function PlusOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_PlusOutlined
  }));
};

PlusOutlined_PlusOutlined.displayName = 'PlusOutlined';
/* harmony default export */ var icons_PlusOutlined = (/*#__PURE__*/react.forwardRef(PlusOutlined_PlusOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 4 modules
var context = __webpack_require__(6032);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(7647);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/index.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











function tabs_Tabs(_a) {
  var type = _a.type,
      className = _a.className,
      propSize = _a.size,
      _onEdit = _a.onEdit,
      hideAdd = _a.hideAdd,
      centered = _a.centered,
      addIcon = _a.addIcon,
      props = __rest(_a, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon"]);

  var customizePrefixCls = props.prefixCls,
      _props$moreIcon = props.moreIcon,
      moreIcon = _props$moreIcon === void 0 ? /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null) : _props$moreIcon;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('tabs', customizePrefixCls);
  var editable;

  if (type === 'editable-card') {
    editable = {
      onEdit: function onEdit(editType, _ref) {
        var key = _ref.key,
            event = _ref.event;
        _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null),
      addIcon: addIcon || /*#__PURE__*/react.createElement(icons_PlusOutlined, null),
      showAdd: hideAdd !== true
    };
  }

  var rootPrefixCls = getPrefixCls();
  (0,devWarning/* default */.Z)(!('onPrevClick' in props) && !('onNextClick' in props), 'Tabs', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.');
  return /*#__PURE__*/react.createElement(SizeContext/* default.Consumer */.Z.Consumer, null, function (contextSize) {
    var _classNames;

    var size = propSize !== undefined ? propSize : contextSize;
    return /*#__PURE__*/react.createElement(rc_tabs_es, (0,esm_extends/* default */.Z)({
      direction: direction,
      moreTransitionName: "".concat(rootPrefixCls, "-slide-up")
    }, props, {
      className: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(size), size), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
      editable: editable,
      moreIcon: moreIcon,
      prefixCls: prefixCls
    }));
  });
}

tabs_Tabs.TabPane = TabPane;
/* harmony default export */ var tabs = (tabs_Tabs);
;// CONCATENATED MODULE: ./src/pages/coupons/detail/index.js



var detail_TabPane = tabs.TabPane;

var DetailCoupons = function DetailCoupons() {
  return /*#__PURE__*/react.createElement(tabs, {
    defaultActiveKey: "1"
  }, /*#__PURE__*/react.createElement(detail_TabPane, {
    tab: "Tab 1",
    key: "1"
  }, "Tab 1"), /*#__PURE__*/react.createElement(detail_TabPane, {
    tab: "Tab 2",
    disabled: true,
    key: "2"
  }, "Tab 2"), /*#__PURE__*/react.createElement(detail_TabPane, {
    tab: "Tab 3",
    key: "3"
  }, "Tab 3"));
};

/* harmony default export */ var detail = (DetailCoupons);

/***/ })

}]);
//# sourceMappingURL=892.0cf0532fb82dc3681cca.js.map