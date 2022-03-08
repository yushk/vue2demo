## SVG 编辑器

### 基本用法

:::demo svg`coms`属性导入基础svg`icon`。
```html
<template>
  <yx-svg-edit :coms="coms">
  </yx-svg-edit>

</template>
<script>
  export default{
    data(){
      return {
        coms:[
          {
            "type": "AlternatorSvg",
            "title": "发电机",
            "panel_class": "draggable",
            "template": "<ellipse id=\"c1\" cx=\"50\" cy=\"50\" rx=\"35\" ry=\"35\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-50,-50)\"></ellipse><path id=\"l1\" d=\"M30,50 C30,44 34,40 40,40 46,40 50,44 50,50 M50,50 C50,56 54,60 60,60 66,60 70,56 70,50 \" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-50,-50)\"></path></fragment>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/AlternatorSvg.png"
          },
          {
            "type": "ArrowDownSvg",
            "title": "箭头向下",
            "panel_class": "draggable",
            "template": "<polygon  points=\"0,-8 5,0 10,-8\" :fill=\"prop_data.svgColor\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-5,0)\"></polygon>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/ArrowDownSvg.png"
          },
          {
            "type": "ArrowUpSvg",
            "title": "箭头向上",
            "panel_class": "draggable",
            "template": "<polygon  points=\"0,8 5,0 10,8\" :fill=\"prop_data.svgColor\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-5,0)\"></polygon>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/ArrowUpSvg.png"
          },
          {
            "type": "CircuitBreakerSvg",
            "title": "断路器",
            "panel_class": "draggable",
            "template": "<rect x=\"0\" y=\"0\" width=\"20\" height=\"40\" :fill=\"prop_data.svgColor\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-10,-20)\"></rect>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "switch",
            "create_type": "draggable",
            "priview_img": "/CircuitBreakerSvg.png"
          },
          {
            "type": "DoubleWindingSvg",
            "title": "双绕组变压器",
            "panel_class": "draggable",
            "template": "<ellipse cx=\"0\" cy=\"-20\" rx=\"25\" ry=\"25\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></ellipse>     <ellipse  cx=\"0\" cy=\"20\" rx=\"25\" ry=\"25\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></ellipse>     <polygon  points=\"10,-30 0,-10 -10,-30\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></polygon>     <line  x1=\"0\" y1=\"20\" x2=\"0\" y2=\"35\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line>     <line  x1=\"0\" y1=\"20\" x2=\"-10\" y2=\"10\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line>     <line  x1=\"0\" y1=\"20\" x2=\"10\" y2=\"10\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/DoubleWindingSvg.png"
          },
          {
            "type": "GGJSvg",
            "title": "电容柜",
            "panel_class": "draggable",
            "template": "<line x1=\"0.5\" y1=\"-25\" x2=\"-9.5\" y2=\"-13\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></line> <line  x1=\"0.5\" y1=\"-26\" x2=\"9.5\" y2=\"-13\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></line> <line  x1=\"-12\" y1=\"-17\" x2=\"-6\" y2=\"-8\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line  x1=\"-15\" y1=\"-12\" x2=\"-9\" y2=\"-3\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <polyline  points=\"-13,-8 -22,3 -22,5\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></polyline> <line x1=\"-21\" y1=\"4\" x2=\"-4\" y2=\"4\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></line> <line x1=\"-5\" y1=\"-2\" x2=\"-5\" y2=\"11\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></line> <line x1=\"3\" y1=\"-2\" x2=\"3\" y2=\"11\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></line> <line x1=\"4\" y1=\"4\" x2=\"21\" y2=\"4\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></line> <polyline  points=\"13,-8 22,3 22,5\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" ></polyline> <line  x1=\"14\" y1=\"-12\" x2=\"8\" y2=\"-3\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line  x1=\"12\" y1=\"-17\" x2=\"6\" y2=\"-8\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/GGJSvg.png"
          },
          {
            "type": "GroundGraySvg",
            "title": "接地灰白",
            "panel_class": "draggable",
            "template": "<line x1=\"9\" y1=\"9\" x2=\"9\" y2=\"0\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-9,-6)\"></line> <line x1=\"0\" y1=\"9\" x2=\"18\" y2=\"9\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-9,-6)\"></line> <line x1=\"3\" y1=\"15\" x2=\"15\" y2=\"15\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-9,-6)\"></line> <line x1=\"6\" y1=\"21\" x2=\"12\" y2=\"21\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-9,-6)\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#CCCCCC"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/GroundGraySvg.png"
          },
          {
            "type": "IsolatingSwitchSvg",
            "title": "隔离开关",
            "panel_class": "draggable",
            "template": "<line x1=\"0\" y1=\"-20\" x2=\"0\" y2=\"0\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"-10\" y1=\"0\" x2=\"6\" y2=\"0\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"0\" y1=\"20\" x2=\"-10\" y2=\"5\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"0\" y1=\"40\" x2=\"0\" y2=\"20\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> ",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/IsolatingSwitchSvg.png"
          },
          {
            "type": "LightningArresterSvg",
            "title": "避雷器",
            "panel_class": "draggable",
            "template": "<rect x=\"-7\" y=\"-14\" width=\"15\" height=\"35\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></rect> <line x1=\"0\" y1=\"-21\" x2=\"0\" y2=\"0\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"0\" y1=\"21\" x2=\"0\" y2=\"28\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <polyline points=\"-1,-7 0,0 1,-7\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></polyline>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/LightningArresterSvg.png"
          },
          {
            "type": "PolylineSvg",
            "title": "多段折线",
            "panel_class": "draggable",
            "template": "<polyline points=\"0,7 13,-7 26,7\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-13,0)\"></polyline> <polyline points=\"0,7 13,-7 26,7\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-13,8)\"></polyline> ",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/PolylineSvg.png"
          },
          {
            "type": "RectSvg",
            "title": "长方形",
            "panel_class": "draggable",
            "template": "<rect x=\"-5\" y=\"-15\" width=\"10\" height=\"30\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" stroke-linecap=\"round\"></rect>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/RectSvg.png"
          },
          {
            "type": "SignalLampSvg",
            "title": "信号灯",
            "panel_class": "draggable",
            "template": "<ellipse cx=\"7\" cy=\"22\" rx=\"12\" ry=\"12\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-7,-22)\"></ellipse> <line x1=\"0\" y1=\"30\" x2=\"15\" y2=\"15\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-7,-22)\"></line> <line x1=\"15\" y1=\"30\" x2=\"0\" y2=\"15\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-7,-22)\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/SignalLampSvg.png"
          },
          {
            "type": "StandardCapacitorSvg",
            "title": "标准电容器",
            "panel_class": "draggable",
            "template": "<line x1=\"0\" y1=\"-12\" x2=\"0\" y2=\"-3\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"-9\" y1=\"-3\" x2=\"9\" y2=\"-3\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"-9\" y1=\"3\" x2=\"9\" y2=\"3\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"0\" y1=\"12\" x2=\"0\" y2=\"3\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/StandardCapacitorSvg.png"
          },
          {
            "type": "StandardReactanceSvg",
            "title": "标准电抗",
            "panel_class": "draggable",
            "template": "<path d=\"M18,63 V36 H33 C33,42 27,51 18,51 9,51 3,42 3,36 3,27 9,21 18,21 V6 V21\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\" transform=\"translate(-18,-36)\"></path>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/StandardReactanceSvg.png"
          },
          {
            "type": "TextSvg",
            "title": "文字",
            "panel_class": "draggable",
            "template": "<text x=\"0\" y=\"0\" font-size=\"10\" :fill=\"prop_data.svgColor\">{{prop_data.title}}</text></fragment>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/TextSvg.png"
          },
          {
            "type": "TransformerTriphaseOpenSvg",
            "title": "三相互感器",
            "panel_class": "draggable",
            "template": "<ellipse cx=\"0\" cy=\"0\" rx=\"10\" ry=\"10\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></ellipse> <line x1=\"-2\" y1=\"-6\" x2=\"-2\" y2=\"6\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"-2\" y1=\"-6\" x2=\"4\" y2=\"0\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"4\" y1=\"2\" x2=\"-2\" y2=\"6\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/TransformerTriphaseOpenSvg.png"
          },
          {
            "type": "TransformerYSvg",
            "title": "电流互感器Y",
            "panel_class": "draggable",
            "template": "<ellipse cx=\"0\" cy=\"0\" rx=\"10\" ry=\"10\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></ellipse> <line x1=\"5\" y1=\"-5\" x2=\"0\" y2=\"0\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"-5\" y1=\"-5\" x2=\"0\" y2=\"0\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"5\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/TransformerYSvg.png"
          },
          {
            "type": "TwoCircleSvg",
            "title": "双圆",
            "panel_class": "draggable",
            "template": "<ellipse cx=\"0\" cy=\"-4.5\" rx=\"6\" ry=\"6\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></ellipse> <ellipse cx=\"0\" cy=\"4.5\" rx=\"6\" ry=\"6\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></ellipse>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "draggable",
            "priview_img": "/TwoCircleSvg.png"
          },
          {
            "type": "WireBreakOffSvg",
            "title": "电线开关-断开",
            "panel_class": "draggable",
            "template": "<line x1=\"0\" y1=\"-40\" x2=\"0\" y2=\"-15\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"0\" y1=\"15\" x2=\"-10\" y2=\"-15\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"0\" y1=\"45\" x2=\"0\" y2=\"15\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "change",
            "create_type": "draggable",
            "priview_img": "/WireBreakOffSvg.png"
          },
          {
            "type": "WireBreakOnSvg",
            "title": "电线开关-连接",
            "panel_class": "draggable",
            "template": "<line x1=\"0\" y1=\"-40\" x2=\"0\" y2=\"-15\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"0\" y1=\"15\" x2=\"0\" y2=\"-15\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line> <line x1=\"0\" y1=\"45\" x2=\"0\" y2=\"15\" fill=\"none\" :stroke=\"prop_data.svgColor\" stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#00FF00"
            },
            "data_type": "change",
            "create_type": "draggable",
            "priview_img": "/WireBreakOnSvg.png"
          },
          {
            "type": "ConnLineSvg",
            "title": "连接线",
            "panel_class": "draw",
            "template": "<line x1=\"0\" y1=\"0\" :x2=\"(prop_data.mPoint.endX-prop_data.mPoint.startX)\" :y2=\"(prop_data.mPoint.endY-prop_data.mPoint.startY)\" :fill=\"prop_data.svgColor\" :stroke=\"prop_data.svgColor\"  stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "click",
            "priview_img": "/VerticalLineSvg.png"
          },
          {
            "type": "ConnHorizontalLineSvg",
            "title": "连接线-横线",
            "panel_class": "draw",
            "template": "<line x1=\"0\" y1=\"0\" :x2=\"(prop_data.mPoint.endX-prop_data.mPoint.startX)\" y2=\"0\" :fill=\"prop_data.svgColor\" :stroke=\"prop_data.svgColor\"  stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "click",
            "priview_img": "/ConnHorizontalLineSvg.png"
          },
          {
            "type": "ConnVerticalLineSvg",
            "title": "连接线-竖线",
            "panel_class": "draw",
            "template": "<line x1=\"0\" y1=\"0\" x2=\"0\" :y2=\"(prop_data.mPoint.endY-prop_data.mPoint.startY)\" :fill=\"prop_data.svgColor\" :stroke=\"prop_data.svgColor\"  stroke-width=\"2\"></line>",
            "props": [
              "prop_data"
            ],
            "default_attr": {
              "color": "#FF0000"
            },
            "data_type": "none",
            "create_type": "click",
            "priview_img": "/VerticalLineSvg.png"
          }
        ]
      }
    },
    created(){
      this.coms = this.coms.map(e=>{
        return {...e,priview_img:require('examples/assets/svg'+e.priview_img).default}
      })
    }
  }
  </script>
```
:::

### Methods
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| Preview | 预览 | — |
| Preview | 预览 | — |
| exportSvg | 预览 | — |
| exportData | 预览 | — |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭alert时触发的事件 | — |

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| coms     | 内置svg组件           | Object | — | — |

### Slot

| Name | Description |
|------|--------|
| — | 描述 |
| tools | 工具栏 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| addSvgHandleOk | 关闭alert时触发的事件 | — |
