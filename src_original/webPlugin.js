/**
 * alter by martin.song
 * 图形化gui调试工具
 * @constructor
 */

var DebugGuiUtil = function () {
    (function () {
        (function (aa) {
            //1111: InspectElementConfig
            var InspectElementConfig = {
                ClippingNode:
                    {
                        alphaThreshold: {desc: 'Threshold for alpha value.', type: 'number', value: 0},
                        inverted:
                            {
                                desc: 'Indicate whether in inverted mode.',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                AtlasNode:
                    {
                        texture: {desc: 'Current used texture', type: 'image', value: null},
                        quadsToDraw: {desc: 'Number of quads to draw', type: 'number', value: 0},
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                NodeRGBA:
                    {
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                LabelTTF:
                    {
                        string: {desc: 'Content string of label', type: 'string', value: ''},
                        textAlign:
                            {
                                desc: 'Horizontal Alignment of label: cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT',
                                type: 'number',
                                value: 0
                            },
                        verticalAlign:
                            {
                                desc: 'Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM',
                                type: 'number',
                                value: 0
                            },
                        fontSize: {desc: 'Font size of label', type: 'number', value: 0},
                        fontName: {desc: 'Font name of label', type: 'string', value: ''},
                        font:
                            {
                                desc: 'The label font with a style string: e.g. "18px Verdana"',
                                type: 'string',
                                value: ''
                            },
                        boundingWidth:
                            {
                                desc: 'Width of the bounding box of label, the real content width is limited by boundingWidth',
                                type: 'number',
                                value: 0
                            },
                        boundingHeight:
                            {
                                desc: 'Height of the bounding box of label, the real content height is limited by boundingHeight',
                                type: 'number',
                                value: 0
                            },
                        fillStyle: {desc: 'The fill color', type: 'color', value: null},
                        strokeStyle: {desc: 'The stroke color', type: 'color', value: null},
                        lineWidth: {desc: 'The line width for stroke', type: 'number', value: 0},
                        shadowOffsetX: {desc: 'The x axis offset of shadow', type: 'number', value: 0},
                        shadowOffsetY: {desc: 'The y axis offset of shadow', type: 'number', value: 0},
                        shadowOpacity: {desc: 'The opacity of shadow', type: 'number', value: 0},
                        shadowBlur: {desc: 'The blur size of shadow', type: 'number', value: 0},
                        dirty:
                            {
                                desc: 'Indicates whether the sprite needs to be updated.',
                                type: 'boolean',
                                value: false
                            },
                        flippedX:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on x axis.',
                                type: 'boolean',
                                value: false
                            },
                        flippedY:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on y axis.',
                                type: 'boolean',
                                value: false
                            },
                        offsetX:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        offsetY:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        atlasIndex:
                            {
                                desc: 'The index used on the TextureAtlas.',
                                type: 'number',
                                value: 0
                            },
                        texture:
                            {
                                desc: 'Texture used to render the sprite.',
                                type: 'image',
                                value: null
                            },
                        textureRectRotated:
                            {
                                desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Layer:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                LayerRGBA:
                    {
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                LayerColor:
                    {
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                LayerGradient:
                    {
                        startColor:
                            {
                                desc: 'Start color of the color gradient',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'End color of the color gradient',
                                type: 'color',
                                value: null
                            },
                        startOpacity:
                            {
                                desc: 'Start opacity of the color gradient',
                                type: 'number',
                                value: 0
                            },
                        endOpacity:
                            {
                                desc: 'End opacity of the color gradient',
                                type: 'number',
                                value: 0
                            },
                        vector:
                            {
                                desc: 'Direction vector of the color gradient',
                                type: 'point',
                                value: 0
                            },
                        compresseInterpolation:
                            {
                                desc: 'Indicate whether or not the interpolation will be compressed',
                                type: 'number',
                                value: 0
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                LayerMultiplex:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Scene:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Sprite:
                    {
                        dirty:
                            {
                                desc: 'Indicates whether the sprite needs to be updated.',
                                type: 'boolean',
                                value: false
                            },
                        flippedX:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on x axis.',
                                type: 'boolean',
                                value: false
                            },
                        flippedY:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on y axis.',
                                type: 'boolean',
                                value: false
                            },
                        offsetX:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        offsetY:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        atlasIndex:
                            {
                                desc: 'The index used on the TextureAtlas.',
                                type: 'number',
                                value: 0
                            },
                        texture:
                            {
                                desc: 'Texture used to render the sprite.',
                                type: 'image',
                                value: null
                            },
                        textureRectRotated:
                            {
                                desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                SpriteBatchNode:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                LabelAtlas:
                    {
                        string: {desc: 'Content string of label', type: 'string', value: ''},
                        texture: {desc: 'Current used texture', type: 'image', value: null},
                        quadsToDraw: {desc: 'Number of quads to draw', type: 'number', value: 0},
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                LabelBMFont:
                    {
                        string: {desc: 'Content string of label', type: 'string', value: ''},
                        boundingWidth:
                            {
                                desc: 'Width of the bounding box of label, the real content width is limited by boundingWidth',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Menu:
                    {
                        enabled:
                            {
                                desc: 'Indicates whether or not the menu is enabled',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                MenuItem:
                    {
                        enabled:
                            {
                                desc: 'Indicate whether item is enabled',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                MenuItemLabel:
                    {
                        string:
                            {
                                desc: 'Content string of label item',
                                type: 'string',
                                value: ''
                            },
                        disabledColor:
                            {
                                desc: 'Color of label when it\'s diabled',
                                type: 'color',
                                value: null
                            },
                        enabled:
                            {
                                desc: 'Indicate whether item is enabled',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                MenuItemAtlasFont:
                    {
                        string:
                            {
                                desc: 'Content string of label item',
                                type: 'string',
                                value: ''
                            },
                        disabledColor:
                            {
                                desc: 'Color of label when it\'s diabled',
                                type: 'color',
                                value: null
                            },
                        enabled:
                            {
                                desc: 'Indicate whether item is enabled',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                MenuItemFont:
                    {
                        fontSize: {desc: 'Font size of font item', type: 'number', value: 0},
                        fontName: {desc: 'Font name of font item', type: 'string', value: ''},
                        string:
                            {
                                desc: 'Content string of label item',
                                type: 'string',
                                value: ''
                            },
                        disabledColor:
                            {
                                desc: 'Color of label when it\'s diabled',
                                type: 'color',
                                value: null
                            },
                        enabled:
                            {
                                desc: 'Indicate whether item is enabled',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                MenuItemSprite:
                    {
                        enabled:
                            {
                                desc: 'Indicate whether item is enabled',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                MenuItemImage:
                    {
                        enabled:
                            {
                                desc: 'Indicate whether item is enabled',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                MenuItemToggle:
                    {
                        selectedIndex: {desc: 'Index of selected sub item', type: 'number', value: 0},
                        enabled:
                            {
                                desc: 'Indicate whether item is enabled',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                MotionStreak:
                    {
                        texture:
                            {
                                desc: 'Texture used for the motion streak.',
                                type: 'image',
                                value: null
                            },
                        fastMode:
                            {
                                desc: 'Indicate whether use fast mode.',
                                type: 'boolean',
                                value: false
                            },
                        startingPositionInitialized:
                            {
                                desc: 'Indicate whether starting position initialized.',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParallaxNode:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleBatchNode:
                    {
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleFire:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleFireworks:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleSun:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleGalaxy:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleFlower:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleMeteor:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleSpiral:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleExplosion:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleSmoke:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleSnow:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleRain:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ParticleSystem:
                    {
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether the alpha value modify color.',
                                type: 'boolean',
                                value: false
                            },
                        active:
                            {
                                desc: '<@readonly> Indicate whether the particle system is activated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        shapeType:
                            {
                                desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
                                type: 'number',
                                value: 0
                            },
                        atlasIndex:
                            {
                                desc: 'Index of system in batch node array.',
                                type: 'number',
                                value: 0
                            },
                        particleCount:
                            {
                                desc: 'Current quantity of particles that are being simulated.',
                                type: 'number',
                                value: 0
                            },
                        duration:
                            {
                                desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
                                type: 'number',
                                value: 0
                            },
                        sourcePos:
                            {
                                desc: 'Source position of the emitter.',
                                type: 'point',
                                value: null
                            },
                        posVar:
                            {
                                desc: 'Variation of source position.',
                                type: 'point',
                                value: null
                            },
                        life:
                            {
                                desc: 'Life of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        lifeVar: {desc: 'Variation of life.', type: 'number', value: 0},
                        angle:
                            {
                                desc: 'Angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        angleVar:
                            {
                                desc: 'Variation of angle of each particle setter.',
                                type: 'number',
                                value: 0
                            },
                        startSize:
                            {
                                desc: 'Start size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSizeVar:
                            {
                                desc: 'Variation of start size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        endSize:
                            {
                                desc: 'End size in pixels of each particle.',
                                type: 'number',
                                value: 0
                            },
                        endSizeVar:
                            {
                                desc: 'Variation of end size in pixels.',
                                type: 'number',
                                value: 0
                            },
                        startSpin:
                            {
                                desc: 'Start angle of each particle.',
                                type: 'number',
                                value: 0
                            },
                        startSpinVar: {desc: 'Variation of start angle.', type: 'number', value: 0},
                        endSpin: {desc: 'End angle of each particle.', type: 'number', value: 0},
                        endSpinVar: {desc: 'Variation of end angle.', type: 'number', value: 0},
                        gravity: {desc: 'Gravity of the emitter.', type: 'point', value: null},
                        speed: {desc: 'Speed of the emitter.', type: 'point', value: null},
                        speedVar: {desc: 'Variation of the speed.', type: 'point', value: null},
                        tangentialAccel:
                            {
                                desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
                                type: 'number',
                                value: 0
                            },
                        tangentialAccelVar:
                            {
                                desc: 'Variation of the radial acceleration.',
                                type: 'number',
                                value: 0
                            },
                        rotationIsDir:
                            {
                                desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
                                type: 'boolean',
                                value: false
                            },
                        startRadius:
                            {
                                desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        startRadiusVar:
                            {
                                desc: 'Variation of the starting radius.',
                                type: 'number',
                                value: 0
                            },
                        endRadius:
                            {
                                desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        endRadiusVar:
                            {
                                desc: 'Variation of the ending radius.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerS:
                            {
                                desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
                                type: 'number',
                                value: 0
                            },
                        rotatePerSVar:
                            {
                                desc: 'Variation of the degress to rotate a particle around the source pos per second.',
                                type: 'number',
                                value: 0
                            },
                        startColor:
                            {
                                desc: 'Start color of each particle.',
                                type: 'color',
                                value: null
                            },
                        startColorVar:
                            {
                                desc: 'Variation of the start color.',
                                type: 'color',
                                value: null
                            },
                        endColor:
                            {
                                desc: 'Ending color of each particle.',
                                type: 'color',
                                value: null
                            },
                        endColorVar:
                            {
                                desc: 'Variation of the end color.',
                                type: 'color',
                                value: null
                            },
                        emissionRate:
                            {
                                desc: 'Emission rate of the particles.',
                                type: 'number',
                                value: 0
                            },
                        emitterMode:
                            {
                                desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
                                type: 'number',
                                value: 0
                            },
                        positionType:
                            {
                                desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
                                type: 'number',
                                value: 0
                            },
                        totalParticles:
                            {
                                desc: 'Maximum particles of the system.',
                                type: 'number',
                                value: 0
                            },
                        autoRemoveOnFinish:
                            {
                                desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
                                type: 'boolean',
                                value: false
                            },
                        texture:
                            {
                                desc: 'Texture of Particle System.',
                                type: 'image',
                                value: null
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                PhysicsDebugNode:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ProgressTimer:
                    {
                        midPoint:
                            {
                                desc: '<p>- Midpoint is used to modify the progress start position.<br/>\n                                         If you\'re using radials type then the midpoint changes the center point<br/>\n                                         If you\'re using bar type the the midpoint changes the bar growth<br/>\n                                             it expands from the center but clamps to the sprites edge so:<br/>\n                                             you want a left to right then set the midpoint all the way to cc.p(0,y)<br/>\n                                             you want a right to left then set the midpoint all the way to cc.p(1,y)<br/>\n                                             you want a bottom to top then set the midpoint all the way to cc.p(x,0)<br/>\n                                             you want a top to bottom then set the midpoint all the way to cc.p(x,1)</p>',
                                type: 'point',
                                value: null
                            },
                        barChangeRate:
                            {
                                desc: 'This allows the bar type to move the component at a specific rate.',
                                type: 'point',
                                value: null
                            },
                        percentage:
                            {
                                desc: 'Percentage to change progress, from 0 to 100.',
                                type: 'number',
                                value: 0
                            },
                        reverseDir:
                            {
                                desc: 'Indicate whether the direction is reversed.',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                RenderTexture:
                    {
                        clearDepthVal: {desc: 'Clear depth value.', type: 'number', value: 0},
                        clearStencilVal: {desc: 'Clear stencil value.', type: 'number', value: 0},
                        clearColorVal:
                            {
                                desc: 'Clear color value, valid only when "autoDraw" is true.',
                                type: 'color',
                                value: null
                            },
                        autoDraw:
                            {
                                desc: 'Indicate auto draw mode activate or not.',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                DrawNode:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TextFieldTTF:
                    {
                        charCount:
                            {
                                desc: '<@readonly> Characators count',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        placeHolder: {desc: 'Place holder for the field', type: 'string', value: ''},
                        colorSpaceHolder: {desc: undefined, type: 'color', value: null},
                        string: {desc: 'Content string of label', type: 'string', value: ''},
                        textAlign:
                            {
                                desc: 'Horizontal Alignment of label: cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT',
                                type: 'number',
                                value: 0
                            },
                        verticalAlign:
                            {
                                desc: 'Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM',
                                type: 'number',
                                value: 0
                            },
                        fontSize: {desc: 'Font size of label', type: 'number', value: 0},
                        fontName: {desc: 'Font name of label', type: 'string', value: ''},
                        font:
                            {
                                desc: 'The label font with a style string: e.g. "18px Verdana"',
                                type: 'string',
                                value: ''
                            },
                        boundingWidth:
                            {
                                desc: 'Width of the bounding box of label, the real content width is limited by boundingWidth',
                                type: 'number',
                                value: 0
                            },
                        boundingHeight:
                            {
                                desc: 'Height of the bounding box of label, the real content height is limited by boundingHeight',
                                type: 'number',
                                value: 0
                            },
                        fillStyle: {desc: 'The fill color', type: 'color', value: null},
                        strokeStyle: {desc: 'The stroke color', type: 'color', value: null},
                        lineWidth: {desc: 'The line width for stroke', type: 'number', value: 0},
                        shadowOffsetX: {desc: 'The x axis offset of shadow', type: 'number', value: 0},
                        shadowOffsetY: {desc: 'The y axis offset of shadow', type: 'number', value: 0},
                        shadowOpacity: {desc: 'The opacity of shadow', type: 'number', value: 0},
                        shadowBlur: {desc: 'The blur size of shadow', type: 'number', value: 0},
                        dirty:
                            {
                                desc: 'Indicates whether the sprite needs to be updated.',
                                type: 'boolean',
                                value: false
                            },
                        flippedX:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on x axis.',
                                type: 'boolean',
                                value: false
                            },
                        flippedY:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on y axis.',
                                type: 'boolean',
                                value: false
                            },
                        offsetX:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        offsetY:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        atlasIndex:
                            {
                                desc: 'The index used on the TextureAtlas.',
                                type: 'number',
                                value: 0
                            },
                        texture:
                            {
                                desc: 'Texture used to render the sprite.',
                                type: 'image',
                                value: null
                            },
                        textureRectRotated:
                            {
                                desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TileMapAtlas:
                    {
                        texture: {desc: 'Current used texture', type: 'image', value: null},
                        quadsToDraw: {desc: 'Number of quads to draw', type: 'number', value: 0},
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TMXLayer:
                    {
                        layerOrientation: {desc: 'Layer orientation', type: 'number', value: 0},
                        layerName: {desc: 'Name of the layer', type: 'string', value: ''},
                        layerWidth: {desc: 'Width of the layer', type: 'number', value: 0},
                        layerHeight: {desc: 'Height of the layer', type: 'number', value: 0},
                        tileWidth: {desc: 'Width of a tile', type: 'number', value: 0},
                        tileHeight: {desc: 'Height of a tile', type: 'number', value: 0},
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TMXTiledMap:
                    {
                        mapOrientation: {desc: 'Map orientation', type: 'number', value: 0},
                        mapWidth: {desc: 'Width of the map', type: 'number', value: 0},
                        mapHeight: {desc: 'Height of the map', type: 'number', value: 0},
                        tileWidth: {desc: 'Width of a tile', type: 'number', value: 0},
                        tileHeight: {desc: 'Height of a tile', type: 'number', value: 0},
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionScene:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionSceneOriented:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionRotoZoom:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionJumpZoom:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionMoveInL:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionMoveInR:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionMoveInT:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionMoveInB:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionSlideInL:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionSlideInR:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionSlideInB:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionSlideInT:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionShrinkGrow:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionFlipX:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionFlipY:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionFlipAngular:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionZoomFlipX:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionZoomFlipY:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionZoomFlipAngular:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionFade:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionCrossFade:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionTurnOffTiles:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionSplitCols:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionSplitRows:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionFadeTR:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionFadeBL:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionFadeUp:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionFadeDown:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionPageTurn:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionProgress:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionProgressRadialCCW:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionProgressRadialCW:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionProgressHorizontal:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionProgressVertical:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionProgressInOut:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TransitionProgressOutIn:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Widget:
                    {
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Layout:
                    {
                        clippingEnabled:
                            {
                                desc: 'Indicate whether clipping is enabled',
                                type: 'boolean',
                                value: false
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Node:
                    {
                        runningSequence:
                            {
                                desc: '正在运行的动画时间线',
                                type: 'string',
                                value: ""
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ListView:
                    {
                        innerWidth:
                            {
                                desc: 'Inner container width of the scroll view',
                                type: 'number',
                                value: 0
                            },
                        innerHeight:
                            {
                                desc: 'Inner container height of the scroll view',
                                type: 'number',
                                value: 0
                            },
                        bounceEnabled:
                            {
                                desc: 'Indicate whether bounce is enabled',
                                type: 'boolean',
                                value: false
                            },
                        inertiaScrollEnabled:
                            {
                                desc: 'Indicate whether inertiaScroll is enabled',
                                type: 'boolean',
                                value: false
                            },
                        clippingEnabled:
                            {
                                desc: 'Indicate whether clipping is enabled',
                                type: 'boolean',
                                value: false
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                PageView:
                    {
                        clippingEnabled:
                            {
                                desc: 'Indicate whether clipping is enabled',
                                type: 'boolean',
                                value: false
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ScrollView:
                    {
                        innerWidth:
                            {
                                desc: 'Inner container width of the scroll view',
                                type: 'number',
                                value: 0
                            },
                        innerHeight:
                            {
                                desc: 'Inner container height of the scroll view',
                                type: 'number',
                                value: 0
                            },
                        bounceEnabled:
                            {
                                desc: 'Indicate whether bounce is enabled',
                                type: 'boolean',
                                value: false
                            },
                        inertiaScrollEnabled:
                            {
                                desc: 'Indicate whether inertiaScroll is enabled',
                                type: 'boolean',
                                value: false
                            },
                        clippingEnabled:
                            {
                                desc: 'Indicate whether clipping is enabled',
                                type: 'boolean',
                                value: false
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Button:
                    {
                        titleText:
                            {
                                desc: 'The content string of the button title',
                                type: 'string',
                                value: ''
                            },
                        titleFont:
                            {
                                desc: 'The content string font of the button title',
                                type: 'string',
                                value: ''
                            },
                        titleFontSize:
                            {
                                desc: 'The content string font size of the button title',
                                type: 'number',
                                value: 0
                            },
                        titleFontName:
                            {
                                desc: 'The content string font name of the button title',
                                type: 'string',
                                value: ''
                            },
                        pressedActionEnabled:
                            {
                                desc: 'Indicate whether button has zoom effect when clicked',
                                type: 'boolean',
                                value: false
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            },
                        titleColor:
                            {
                                desc: 'The content string font color of the button title',
                                type: 'color',
                                value: null
                            }
                    },
                CheckBox:
                    {
                        selected:
                            {
                                desc: 'Indicate whether the check box has been selected',
                                type: 'boolean',
                                value: false
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ImageView:
                    {
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                LoadingBar:
                    {
                        percent:
                            {
                                desc: 'The current progress of loadingbar',
                                type: 'number',
                                value: 0
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                RichText:
                    {
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Slider:
                    {
                        percent:
                            {
                                desc: 'The current progress of loadingbar',
                                type: 'number',
                                value: 0
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Text:
                    {
                        boundingWidth:
                            {
                                desc: 'Width of the bounding area of label, the real content width is limited by boundingWidth',
                                type: 'number',
                                value: 0
                            },
                        boundingHeight:
                            {
                                desc: 'Height of the bounding area of label, the real content height is limited by boundingHeight',
                                type: 'number',
                                value: 0
                            },
                        string:
                            {
                                desc: 'The content string of the label',
                                type: 'string',
                                value: ''
                            },
                        stringLength:
                            {
                                desc: '<@readonly> The content string length of the label',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        font:
                            {
                                desc: 'The label font with a style string: e.g. "18px Verdana"',
                                type: 'string',
                                value: ''
                            },
                        fontName: {desc: 'The label font name', type: 'string', value: ''},
                        fontSize: {desc: 'The label font size', type: 'number', value: 0},
                        textAlign:
                            {
                                desc: 'Horizontal Alignment of label, cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT',
                                type: 'number',
                                value: 0
                            },
                        verticalAlign:
                            {
                                desc: 'Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM',
                                type: 'number',
                                value: 0
                            },
                        touchScaleEnabled:
                            {
                                desc: 'Indicate whether the label will scale when touching',
                                type: 'boolean',
                                value: false
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TextAtlas:
                    {
                        string:
                            {
                                desc: 'Content string of the label',
                                type: 'string',
                                value: ''
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TextBMFont:
                    {
                        string:
                            {
                                desc: 'Content string of the label',
                                type: 'string',
                                value: ''
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                UICCTextField:
                    {
                        maxLengthEnabled:
                            {
                                desc: 'Indicate whether max length limit is enabled',
                                type: 'boolean',
                                value: false
                            },
                        maxLength:
                            {
                                desc: 'The max length of the text field',
                                type: 'number',
                                value: 0
                            },
                        passwordEnabled:
                            {
                                desc: 'Indicate whether the text field is for entering password',
                                type: 'boolean',
                                value: false
                            },
                        charCount:
                            {
                                desc: '<@readonly> Characators count',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        placeHolder: {desc: 'Place holder for the field', type: 'string', value: ''},
                        colorSpaceHolder: {desc: undefined, type: 'color', value: null},
                        string: {desc: 'Content string of label', type: 'string', value: ''},
                        textAlign:
                            {
                                desc: 'Horizontal Alignment of label: cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT',
                                type: 'number',
                                value: 0
                            },
                        verticalAlign:
                            {
                                desc: 'Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM',
                                type: 'number',
                                value: 0
                            },
                        fontSize: {desc: 'Font size of label', type: 'number', value: 0},
                        fontName: {desc: 'Font name of label', type: 'string', value: ''},
                        font:
                            {
                                desc: 'The label font with a style string: e.g. "18px Verdana"',
                                type: 'string',
                                value: ''
                            },
                        boundingWidth:
                            {
                                desc: 'Width of the bounding box of label, the real content width is limited by boundingWidth',
                                type: 'number',
                                value: 0
                            },
                        boundingHeight:
                            {
                                desc: 'Height of the bounding box of label, the real content height is limited by boundingHeight',
                                type: 'number',
                                value: 0
                            },
                        fillStyle: {desc: 'The fill color', type: 'color', value: null},
                        strokeStyle: {desc: 'The stroke color', type: 'color', value: null},
                        lineWidth: {desc: 'The line width for stroke', type: 'number', value: 0},
                        shadowOffsetX: {desc: 'The x axis offset of shadow', type: 'number', value: 0},
                        shadowOffsetY: {desc: 'The y axis offset of shadow', type: 'number', value: 0},
                        shadowOpacity: {desc: 'The opacity of shadow', type: 'number', value: 0},
                        shadowBlur: {desc: 'The blur size of shadow', type: 'number', value: 0},
                        dirty:
                            {
                                desc: 'Indicates whether the sprite needs to be updated.',
                                type: 'boolean',
                                value: false
                            },
                        flippedX:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on x axis.',
                                type: 'boolean',
                                value: false
                            },
                        flippedY:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on y axis.',
                                type: 'boolean',
                                value: false
                            },
                        offsetX:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        offsetY:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        atlasIndex:
                            {
                                desc: 'The index used on the TextureAtlas.',
                                type: 'number',
                                value: 0
                            },
                        texture:
                            {
                                desc: 'Texture used to render the sprite.',
                                type: 'image',
                                value: null
                            },
                        textureRectRotated:
                            {
                                desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                TextField:
                    {
                        string:
                            {
                                desc: 'The content string of the label',
                                type: 'string',
                                value: ''
                            },
                        placeHolder:
                            {
                                desc: 'The place holder of the text field',
                                type: 'number',
                                value: 0
                            },
                        font:
                            {
                                desc: 'The text field font with a style string: e.g. "18px Verdana"',
                                type: 'string',
                                value: ''
                            },
                        fontName: {desc: 'The text field font name', type: 'string', value: ''},
                        fontSize: {desc: 'The text field font size', type: 'number', value: 0},
                        maxLengthEnabled:
                            {
                                desc: 'Indicate whether max length limit is enabled',
                                type: 'boolean',
                                value: false
                            },
                        maxLength:
                            {
                                desc: 'The max length of the text field',
                                type: 'number',
                                value: 0
                            },
                        passwordEnabled:
                            {
                                desc: 'Indicate whether the text field is for entering password',
                                type: 'boolean',
                                value: false
                            },
                        xPercent:
                            {
                                desc: 'Position x in percentage of width',
                                type: 'number',
                                value: 0
                            },
                        yPercent:
                            {
                                desc: 'Position y in percentage of height',
                                type: 'number',
                                value: 0
                            },
                        widthPercent:
                            {
                                desc: 'Width in percentage of parent width',
                                type: 'number',
                                value: 0
                            },
                        heightPercent:
                            {
                                desc: 'Height in percentage of parent height',
                                type: 'number',
                                value: 0
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the widget is enabled',
                                type: 'boolean',
                                value: false
                            },
                        focused:
                            {
                                desc: 'Indicate whether the widget is focused',
                                type: 'boolean',
                                value: false
                            },
                        touchEnabled:
                            {
                                desc: 'Indicate whether touch events are enabled',
                                type: 'boolean',
                                value: false
                            },
                        updateEnabled:
                            {
                                desc: 'Indicate whether the update function is scheduled',
                                type: 'boolean',
                                value: false
                            },
                        bright:
                            {
                                desc: 'Indicate whether the widget is bright',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the widget', type: 'string', value: ''},
                        actionTag:
                            {
                                desc: 'The action tag of the widget',
                                type: 'number',
                                value: 0
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Armature:
                    {
                        name: {desc: 'The name of the armature', type: 'string', value: ''},
                        version: {desc: 'The version', type: 'number', value: 0},
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Bone:
                    {
                        transformDirty:
                            {
                                desc: 'Indicate whether the transform is dirty',
                                type: 'boolean',
                                value: false
                            },
                        ignoreMovementBoneData:
                            {
                                desc: 'Indicate whether force the bone to show When CCArmature play a animation and there isn\'t a CCMovementBoneData of this bone in this CCMovementData.',
                                type: 'boolean',
                                value: false
                            },
                        name: {desc: 'The name of the bone', type: 'string', value: ''},
                        blendDirty:
                            {
                                desc: 'Indicate whether the blend is dirty',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Skin:
                    {
                        displayName:
                            {
                                desc: '<@readonly> The displayed name of skin',
                                type: 'string',
                                value: '',
                                readonly: true
                            },
                        dirty:
                            {
                                desc: 'Indicates whether the sprite needs to be updated.',
                                type: 'boolean',
                                value: false
                            },
                        flippedX:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on x axis.',
                                type: 'boolean',
                                value: false
                            },
                        flippedY:
                            {
                                desc: 'Indicates whether or not the spirte is flipped on y axis.',
                                type: 'boolean',
                                value: false
                            },
                        offsetX:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        offsetY:
                            {
                                desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        atlasIndex:
                            {
                                desc: 'The index used on the TextureAtlas.',
                                type: 'number',
                                value: 0
                            },
                        texture:
                            {
                                desc: 'Texture used to render the sprite.',
                                type: 'image',
                                value: null
                            },
                        textureRectRotated:
                            {
                                desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                EditBox:
                    {
                        string: {desc: 'Content string of edit box', type: 'string', value: ''},
                        maxLength:
                            {
                                desc: 'Max length of the content string',
                                type: 'string',
                                value: ''
                            },
                        font:
                            {
                                desc: '<@writeonly> Config font of edit box',
                                type: 'string',
                                value: ''
                            },
                        fontName:
                            {
                                desc: '<@writeonly> Config font name of edit box',
                                type: 'string',
                                value: ''
                            },
                        fontSize:
                            {
                                desc: '<@writeonly> Config font size of edit box',
                                type: 'number',
                                value: 0
                            },
                        fontColor:
                            {
                                desc: '<@writeonly> Config font color of edit box',
                                type: 'color',
                                value: null
                            },
                        placeHolder: {desc: 'Place holder of edit box', type: 'string', value: ''},
                        placeHolderFont:
                            {
                                desc: '<@writeonly> Config font of place holder',
                                type: 'string',
                                value: ''
                            },
                        placeHolderFontName:
                            {
                                desc: '<@writeonly> Config font name of place holder',
                                type: 'string',
                                value: ''
                            },
                        placeHolderFontSize:
                            {
                                desc: '<@writeonly> Config font size of place holder',
                                type: 'number',
                                value: 0
                            },
                        placeHolderFontColor:
                            {
                                desc: '<@writeonly> Config font color of place holder',
                                type: 'color',
                                value: null
                            },
                        inputFlag:
                            {
                                desc: '<@writeonly> Input flag of edit box, one of the EditBoxInputFlag constants. e.g.cc.EDITBOX_INPUT_FLAG_PASSWORD',
                                type: 'number',
                                value: 0
                            },
                        inputMode:
                            {
                                desc: '<@writeonly> Input mode of the edit box. Value should be one of the EditBoxInputMode constants.',
                                type: 'number',
                                value: 0
                            },
                        returnType:
                            {
                                desc: '<@writeonly> Return type of edit box, value should be one of the KeyboardReturnType constants.',
                                type: 'number',
                                value: 0
                            },
                        adjustBackgroundImage:
                            {
                                desc: 'Indicate whether the background image will be adjusted',
                                type: 'boolean',
                                value: false
                            },
                        zoomOnTouchDown:
                            {
                                desc: 'Indicate whether the button will be zoomed while touch down',
                                type: 'boolean',
                                value: false
                            },
                        preferredSize:
                            {
                                desc: 'The preferred size of the control button',
                                type: 'size',
                                value: null
                            },
                        labelAnchor:
                            {
                                desc: 'The anchor point for the label of the control button',
                                type: 'boolean',
                                value: false
                            },
                        state:
                            {
                                desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the control node is enbaled',
                                type: 'boolean',
                                value: false
                            },
                        selected:
                            {
                                desc: 'Indicate whether the control node is selected',
                                type: 'boolean',
                                value: false
                            },
                        highlighted:
                            {
                                desc: 'Indicate whether the control node is highlighted',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Control:
                    {
                        state:
                            {
                                desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the control node is enbaled',
                                type: 'boolean',
                                value: false
                            },
                        selected:
                            {
                                desc: 'Indicate whether the control node is selected',
                                type: 'boolean',
                                value: false
                            },
                        highlighted:
                            {
                                desc: 'Indicate whether the control node is highlighted',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ControlButton:
                    {
                        adjustBackgroundImage:
                            {
                                desc: 'Indicate whether the background image will be adjusted',
                                type: 'boolean',
                                value: false
                            },
                        zoomOnTouchDown:
                            {
                                desc: 'Indicate whether the button will be zoomed while touch down',
                                type: 'boolean',
                                value: false
                            },
                        preferredSize:
                            {
                                desc: 'The preferred size of the control button',
                                type: 'size',
                                value: null
                            },
                        labelAnchor:
                            {
                                desc: 'The anchor point for the label of the control button',
                                type: 'boolean',
                                value: false
                            },
                        state:
                            {
                                desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the control node is enbaled',
                                type: 'boolean',
                                value: false
                            },
                        selected:
                            {
                                desc: 'Indicate whether the control node is selected',
                                type: 'boolean',
                                value: false
                            },
                        highlighted:
                            {
                                desc: 'Indicate whether the control node is highlighted',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ControlColourPicker:
                    {
                        state:
                            {
                                desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the control node is enbaled',
                                type: 'boolean',
                                value: false
                            },
                        selected:
                            {
                                desc: 'Indicate whether the control node is selected',
                                type: 'boolean',
                                value: false
                            },
                        highlighted:
                            {
                                desc: 'Indicate whether the control node is highlighted',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ControlHuePicker:
                    {
                        hue: {desc: 'The hue value', type: 'number', value: 0},
                        huePercent: {desc: 'The hue value in percentage', type: 'number', value: 0},
                        startPos:
                            {
                                desc: '<@readonly> The start position of the picker',
                                type: 'point',
                                value: null,
                                readonly: true
                            },
                        state:
                            {
                                desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the control node is enbaled',
                                type: 'boolean',
                                value: false
                            },
                        selected:
                            {
                                desc: 'Indicate whether the control node is selected',
                                type: 'boolean',
                                value: false
                            },
                        highlighted:
                            {
                                desc: 'Indicate whether the control node is highlighted',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ControlPotentiometer:
                    {
                        value:
                            {
                                desc: 'The current value of the potentionmeter',
                                type: 'number',
                                value: 0
                            },
                        minValue:
                            {
                                desc: 'The minimum value of the potentionmeter',
                                type: 'number',
                                value: 0
                            },
                        maxValue:
                            {
                                desc: 'The maximum value of the potentionmeter',
                                type: 'number',
                                value: 0
                            },
                        prevLocation:
                            {
                                desc: 'The previous location of the potentionmeter',
                                type: 'point',
                                value: null
                            },
                        state:
                            {
                                desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the control node is enbaled',
                                type: 'boolean',
                                value: false
                            },
                        selected:
                            {
                                desc: 'Indicate whether the control node is selected',
                                type: 'boolean',
                                value: false
                            },
                        highlighted:
                            {
                                desc: 'Indicate whether the control node is highlighted',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ControlSaturationBrightnessPicker:
                    {
                        saturation:
                            {
                                desc: '<@readonly> Saturation value of the picker',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        brightness:
                            {
                                desc: '<@readonly> Brightness value of the picker',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        startPos:
                            {
                                desc: '<@readonly> The start position of the picker',
                                type: 'point',
                                value: null,
                                readonly: true
                            },
                        state:
                            {
                                desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the control node is enbaled',
                                type: 'boolean',
                                value: false
                            },
                        selected:
                            {
                                desc: 'Indicate whether the control node is selected',
                                type: 'boolean',
                                value: false
                            },
                        highlighted:
                            {
                                desc: 'Indicate whether the control node is highlighted',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ControlSlider:
                    {
                        value: {desc: 'The value of the slider', type: 'number', value: 0},
                        minValue:
                            {
                                desc: 'The minimum value of the slider',
                                type: 'number',
                                value: 0
                            },
                        maxValue:
                            {
                                desc: 'The maximum value of the slider',
                                type: 'number',
                                value: 0
                            },
                        minAllowedValue:
                            {
                                desc: 'The minimum allowed value of the slider',
                                type: 'number',
                                value: 0
                            },
                        maxAllowedValue:
                            {
                                desc: 'The maximum allowed value of the slider',
                                type: 'number',
                                value: 0
                            },
                        thumbSprite:
                            {
                                desc: '<@readonly> Brightness value of the picker',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        state:
                            {
                                desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the control node is enbaled',
                                type: 'boolean',
                                value: false
                            },
                        selected:
                            {
                                desc: 'Indicate whether the control node is selected',
                                type: 'boolean',
                                value: false
                            },
                        highlighted:
                            {
                                desc: 'Indicate whether the control node is highlighted',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                ControlStepper:
                    {
                        wraps:
                            {
                                desc: 'Indicate whether the stepper wraps',
                                type: 'boolean',
                                value: false
                            },
                        value:
                            {
                                desc: 'The value of the stepper control',
                                type: 'number',
                                value: 0
                            },
                        minValue:
                            {
                                desc: 'The minimum value of the stepper control',
                                type: 'number',
                                value: 0
                            },
                        maxValue:
                            {
                                desc: 'The maximum value of the stepper control',
                                type: 'number',
                                value: 0
                            },
                        stepValue:
                            {
                                desc: 'The interval value for each step of the stepper control',
                                type: 'number',
                                value: 0
                            },
                        continuous:
                            {
                                desc: '<@readonly> Indicate whether the stepper value is continuous',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        state:
                            {
                                desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        enabled:
                            {
                                desc: 'Indicate whether the control node is enbaled',
                                type: 'boolean',
                                value: false
                            },
                        selected:
                            {
                                desc: 'Indicate whether the control node is selected',
                                type: 'boolean',
                                value: false
                            },
                        highlighted:
                            {
                                desc: 'Indicate whether the control node is highlighted',
                                type: 'boolean',
                                value: false
                            },
                        opacity: {desc: 'Opacity of layer', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of layer', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Spacer:
                    {
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    },
                Scale9Sprite:
                    {
                        preferredSize:
                            {
                                desc: 'The preferred size of the 9-slice sprite',
                                type: 'size',
                                value: null
                            },
                        insetLeft:
                            {
                                desc: 'The left inset of the 9-slice sprite',
                                type: 'number',
                                value: 0
                            },
                        insetTop:
                            {
                                desc: 'The top inset of the 9-slice sprite',
                                type: 'number',
                                value: 0
                            },
                        insetRight:
                            {
                                desc: 'The right inset of the 9-slice sprite',
                                type: 'number',
                                value: 0
                            },
                        insetBottom:
                            {
                                desc: 'The bottom inset of the 9-slice sprite',
                                type: 'number',
                                value: 0
                            },
                        opacity: {desc: 'Opacity of node', type: 'number', value: 0},
                        opacityModifyRGB:
                            {
                                desc: 'Indicate whether or not the opacity modify color',
                                type: 'boolean',
                                value: false
                            },
                        cascadeOpacity:
                            {
                                desc: 'Indicate whether or not it will set cascade opacity',
                                type: 'boolean',
                                value: false
                            },
                        color: {desc: 'Color of node', type: 'color', value: null},
                        cascadeColor:
                            {
                                desc: 'Indicate whether or not it will set cascade color',
                                type: 'boolean',
                                value: false
                            },
                        x: {desc: 'x axis position of node', type: 'number', value: 0},
                        y: {desc: 'y axis position of node', type: 'number', value: 0},
                        width: {desc: 'Width of node', type: 'number', value: 0},
                        height: {desc: 'Height of node', type: 'number', value: 0},
                        anchorX:
                            {
                                desc: 'Anchor point\'s position on x axis',
                                type: 'number',
                                value: 0
                            },
                        anchorY:
                            {
                                desc: 'Anchor point\'s position on y axis',
                                type: 'number',
                                value: 0
                            },
                        skewX: {desc: 'Skew x', type: 'number', value: 0},
                        skewY: {desc: 'Skew y', type: 'number', value: 0},
                        zIndex:
                            {
                                desc: 'Z order in depth which stands for the drawing order',
                                type: 'number',
                                value: 0
                            },
                        vertexZ:
                            {
                                desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
                                type: 'number',
                                value: 0
                            },
                        rotation: {desc: 'Rotation of node', type: 'number', value: 0},
                        rotationX: {desc: 'Rotation on x axis', type: 'number', value: 0},
                        rotationY: {desc: 'Rotation on y axis', type: 'number', value: 0},
                        scale: {desc: 'Scale of node', type: 'number', value: 0},
                        scaleX: {desc: 'Scale on x axis', type: 'number', value: 0},
                        scaleY: {desc: 'Scale on y axis', type: 'number', value: 0},
                        childrenCount:
                            {
                                desc: '<@readonly> Number of children',
                                type: 'number',
                                value: 0,
                                readonly: true
                            },
                        visible:
                            {
                                desc: 'Indicate whether node is visible or not',
                                type: 'boolean',
                                value: false
                            },
                        running:
                            {
                                desc: '<@readonly> Indicate whether node is running or not',
                                type: 'boolean',
                                value: false,
                                readonly: true
                            },
                        ignoreAnchor:
                            {
                                desc: 'Indicate whether ignore the anchor point property for positionning',
                                type: 'boolean',
                                value: false
                            },
                        tag: {desc: 'Tag of node', type: 'number', value: 0},
                        arrivalOrder:
                            {
                                desc: 'The arrival order, indicates which children is added previously',
                                type: 'number',
                                value: 0
                            },
                        glServerState:
                            {
                                desc: 'The state of OpenGL server side',
                                type: 'number',
                                value: 0
                            }
                    }
            };
            //2222: InspectElement
            (function (global, factory) {
                global['InspectElement'] = factory({}); // <script>
            }(aa, function (exports) {
                var InspectElement = function () {
                    var me = this;
                    var scene, scene_data = [],
                        scene_hash = {};
                    var scenedraw, scenedraw_nodes = {
                            node: null,
                            selected_node: null
                        },
                        SCENEDRAW_NAME = 'INSPECT_ELEMENT_DRAWING';
                    var base_url = get_base_url();

                    function get_selected() {
                        return scenedraw_nodes.selected_node;
                    }

                    me.get_selected = get_selected;

                    // to public
                    // me.scene_data = scene_data, me.scene_hash = scene_hash;

                    function set_attr(to, from, name, type, readonly, value, desc) {
                        try {
                            if (name == 'glServerState') return;
                            if (type == 'point') return;
                            if (type == 'size') return;

                            to[name] = {
                                type: type,
                                readonly: readonly,
                                //value: from[name],//,//from[name] == null ? from[name] : value
                                desc: desc || name
                            };

                            if (type == 'image') {
                                from[name] && from[name].url && (to[name].value = base_url + '/' + cc.loader.resPath + '/' + from[name].url);
                            } else if (type == 'color') {
                                var value = from[name];
                                var r = 255,
                                    g = 255,
                                    b = 255,
                                    a = 255;
                                // 为兼容cocos2d某个版本的webgl下,color,无rgb属性的bug
                                if (value.r) { // 正常的color能取到rgb
                                    r = (value.r || value.red), g = (value.g || value.green), b = (value.b || value.blue);
                                } else if (value._aU8) { // 非正常的color
                                    r = value._rU8[0], g = value._gU8[0], b = value._bU8[0];
                                }
                                to[name].value = {
                                    r: r,
                                    g: g,
                                    b: b,
                                    a: a
                                };
                            } else {
                                to[name].value = from[name];
                            }
                        } catch (e) {
                        }
                    }

                    function get_base_url() {
                        var p = location.pathname.split('/');
                        p.pop();
                        return location.protocol + '//' + location.host + p.join('/');
                    }

                    function serialize_item_data(node) {
                        //console.log('serialize_item_data',node);
                        if (!node) return {
                            data: {
                                id: null
                            },
                            node: {
                                __instanceId: null
                            }
                        };
                        var parent = node.getParent && node.getParent() || {};
                        var data = {
                            id: node.__instanceId || null,
                            parentId: parent.__instanceId || null,
                            // attr: {
                            // __instanceId: node.__instanceId || null,
                            // tag: node.tag,
                            // x: node.x, y: node.y, width: node.width, height: node.height,
                            // visible: node.visible, zIndex: node.zIndex
                            // },
                            attr: {},
                            className: node._className || null
                        };
                        set_attr(data.attr, node, '__instanceId', 'string', true);

                        var attr_hash = InspectElementConfig[node._className] || {};
                        for (var attr_name in attr_hash) {
                            set_attr(data.attr, node, attr_name, attr_hash[attr_name].type, attr_hash[attr_name].readonly, attr_hash[attr_name].value, attr_hash[attr_name].desc);
                        }

                        if (node.getChildren().length > 0) {
                            // add a place-holder,and tell someone "i have a child"
                            data.nodes = [];
                            data.nodes.length = node.getChildren().length;
                            //d.nodes = [{id:null}];
                        }

                        // in chrome
                        //if (node._className == 'LabelTTF'){
                        //    data.text = node.getString();
                        //}
                        // in plugin or webpage
                        //data.name = node.constructor.name || null;

                        // find var name form parent
                        for (var i in parent) {
                            try {
                                if (parent[i] && parent[i].__instanceId && parent[i].__instanceId == node.__instanceId) {
                                    data.name = i;
                                    break;
                                }
                            } catch (e) {
                                continue
                            }
                        }
                        // find var name form grandpa
                        // if (!data.name){
                        // var grandpa = parent && parent.getParent && parent.getParent() || {};
                        // for (var i in grandpa){
                        // try{
                        // if (grandpa[i] && grandpa[i].__instanceId && grandpa[i].__instanceId == node.__instanceId) {
                        // data.name = i;
                        // break;
                        // }
                        // }catch(e){ continue }
                        // }
                        // }

                        data.text = node._className || null;
                        return {
                            data: data,
                            node: node
                        };
                    }

                    function getChildren(node) {
                        //node._children getChildren
                    }

                    function get_node_children(node, fn) {
                        var tree_children = [];
                        // get root
                        if (node == null) {
                            try {
                                tree_children = cc.director.getRunningScene().getChildren();
                            } catch (e) {
                                console.log('error', e, tree_children);
                                return [];
                            }
                        }
                        // get node's children
                        if (node instanceof cc.Node) tree_children = node.getChildren();
                        // get by id
                        if (typeof node == 'number' || typeof node == 'string') {
                            if (scene_hash[node]) {
                                tree_children = scene_hash[node].getChildren() || [];
                            } else {
                                return [];
                            }
                        }

                        if (tree_children.length == 0) return [];

                        var a, d, node, tree_data = [];
                        for (var i = 0, j = tree_children.length; i < j; i++) {
                            if (tree_children[i].getTag() != SCENEDRAW_NAME) {
                                a = serialize_item_data(tree_children[i]),
                                    d = a.data,
                                    node = a.node;

                                tree_data.push(d);
                                /*
                    if (node.getChildren().length > 0) {
                        // add a place-holder,and tell someone "i have a child"
                        d.nodes = []; d.nodes.length = node.getChildren().length;
                        //d.nodes = [{id:null}];
                        tree_data.push(d);
                    }else{
                        tree_data.push(d);
                    }
                    */
                                // get hash
                                scene_hash[node.__instanceId] = node;
                            }
                        }

                        if (!scenedraw) {
                            create_scenedraw(cc.director.getRunningScene());
                        }

                        fn && fn(tree_data);
                        return tree_data;
                    }

                    me.get_node_children = get_node_children;

                    function get_hierarchy(sc) {
                        if (!sc) {
                            if (cc.director) {
                                scene = cc.director.getRunningScene();
                            } else {
                                console.log("please wait for the engine power on");
                                return;
                            }
                        } else {
                            scene = sc;
                        }

                        // scenedraw && scenedraw.clear && scenedraw.clear();
                        var sceneChildren = scene.getChildren();

                        function find(tree_children, tree_data) {
                            var a, d, node;
                            for (var i = 0, j = tree_children.length; i < j; i++) {
                                a = serialize_item_data(tree_children[i]),
                                    d = a.data,
                                    node = a.node;

                                if (node.getChildren().length > 0) {
                                    d.nodes = [];
                                    tree_data.push(d);
                                    find(node.getChildren && node.getChildren(), d.nodes);
                                } else {
                                    tree_data.push(d);
                                }
                                // get hash
                                scene_hash[node.__instanceId] = node;
                            }
                        }

                        // reset scene_data
                        scene_data = [], scene_hash = {};
                        find(sceneChildren, scene_data);

                        // is added ?
                        if (!scenedraw) {
                            create_scenedraw(scene);
                        }
                        return scene_data;
                    }

                    me.get_hierarchy = get_hierarchy;


                    function begin_inspect(sc) {
                        try {
                            if (document.getElementById('cocos2d_inspect_layer')) return;
                            var pos = {
                                    x: 0,
                                    y: 0
                                },
                                inspect_node;

                            function find(tree_children) {
                                var node, result = null,
                                    box;
                                for (var i = tree_children.length - 1; i >= 0; i--) {
                                    node = tree_children[i];
                                    box = node.getBoundingBoxToWorld();

                                    // if hittest
                                    if (node.visible &&
                                        pos.x >= box.x &&
                                        pos.y >= box.y &&
                                        pos.x <= box.x + box.width &&
                                        pos.y <= box.y + box.height
                                    ) {
                                        result = node;
                                        break;
                                    }
                                }
                                if (result != null) {
                                    if (result.getLocalZOrder() < 0) return result;

                                    if (result.getChildren().length > 0) {
                                        var r = find(result.getChildren());
                                        if (r != null) return r;
                                    }
                                }
                                return result;
                            }

                            function find_fullpath(node) {
                                var path = [serialize_item_data(node).data]; // default is me
                                function f(n) {
                                    if (n && n.getParent && n.getParent() != null && !(n.getParent() instanceof cc.Scene)) {
                                        path.push(serialize_item_data(n.getParent()).data);
                                        f(n.getParent());
                                    }
                                }

                                f(node);
                                return path.reverse(); // the order is [root, ... grandpa, papa, me]
                            }

                            var el = document.createElement('DIV');
                            el.id = 'cocos2d_inspect_layer';
                            el.style.position = 'absolute';
                            el.style.zIndex = '10';
                            el.style.width = '100%';
                            el.style.height = '100%';
                            el.style.top = '0px';
                            el.innerHTML = '<style>\
                    @-webkit-keyframes inspect_pulse_glow {\
                        0% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(102,170,238,.8);\
                        }\
                        50% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(255,238,128,1);\
                        }\
                        100% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(102,170,238,.8);\
                        }\
                    }\
                    @keyframes inspect_pulse_glow {\
                        0% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(102,170,238,.8);\
                        }\
                        50% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(255,238,128,1);\
                        }\
                        100% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(102,170,238,.8);\
                        }\
                    }\
                    .inspect_pulse_glow {\
                        -webkit-animation-duration: 1500ms;\
                        -moz-animation-duration: 1500ms;\
                        animation-duration: 1500ms;\
                        -webkit-animation-iteration-count: infinite;\
                        -moz-animation-iteration-count: infinite;\
                        animation-iteration-count: infinite;\
                        -webkit-animation-name: inspect_pulse_glow;\
                        animation-name: inspect_pulse_glow\
                    }\
                    </style>';
                            //el.style.boxShadow = 'inset 0px 0px 0px 10px rgba(51,128,224,.5)';
                            el.className = 'inspect_pulse_glow';
                            cc.container.style.outline = 'rgba(51,128,224,.5) solid 2px';
                            cc.container.style.boxShadow = '0px 0px 20px 10px rgba(51,128,224,.5)';

                            el.onmousemove = function (e) {
                                //console.log(e.x - cc.container.offsetLeft, e.y - cc.container.offsetTop);
                                var layerX = (e.layerX == null) ? (e.x - cc.container.offsetLeft + window.scrollX) : e.layerX,
                                    layerY = (e.layerY == null) ? (e.y - cc.container.offsetTop + window.scrollY) : e.layerY;

                                pos = {
                                    x: Math.round(layerX / cc.view.getScaleX()),
                                    y: Math.round((cc.container.clientHeight - layerY) / cc.view.getScaleY())
                                };

                                inspect_node = find(cc.director.getRunningScene().getChildren());
                                draw_rect(inspect_node, scenedraw_nodes.selected_node);
                            };
                            el.onclick = function (e) {
                                end_inspect();
                                me.on_inspect_node && me.on_inspect_node(
                                    serialize_item_data(inspect_node).data, // current node
                                    find_fullpath(inspect_node) // find full path
                                );
                            };
                            el.onblurclick = function (e) {
                                if (e.target.name == 'btn-insp') return;
                                if (e.target.id == 'cocos2d_inspect_layer') return;
                                end_inspect();
                            };
                            cc.container.appendChild(el);
                            document.body.addEventListener('click', el.onblurclick);

                        } catch (e) {
                            console.log(e)
                        }
                    }

                    me.begin_inspect = begin_inspect;

                    function end_inspect() {
                        try {
                            var el = document.getElementById('cocos2d_inspect_layer');
                            document.body.removeEventListener('click', el.onblurclick);
                            el.onmousemove = el.onclick = el.onblurclick = null;
                            cc.container.style.outline = '';
                            cc.container.style.boxShadow = '';
                            cc.container.removeChild(el);
                            el = null;

                        } catch (e) {
                            console.log(e)
                        }
                    }

                    me.end_inspect = end_inspect;

                    function create_scenedraw(sc) {
                        var last_scenedraw = sc.getChildByTag(SCENEDRAW_NAME);
                        if (last_scenedraw) {
                            //scenedraw = last_scenedraw;
                            //clear_rect();
                            //return;
                            last_scenedraw.getParent().removeChild(last_scenedraw);
                        }
                        scenedraw = null;
                        scenedraw = cc.DrawNode.create();
                        scenedraw.setTag(SCENEDRAW_NAME);
                        sc.addChild(scenedraw, 1000000); // top level
                    }

                    function compare_hierarchy() {

                    }

                    function clear_rect() {
                        scenedraw && scenedraw.clear && scenedraw.clear()
                    }

                    me.clear_rect = clear_rect;

                    function draw_rect(node, selected_node) {
                        (typeof node == 'number' || typeof node == 'string') && (node = scene_hash[node]);
                        (typeof selected_node == 'number' || typeof selected_node == 'string') && (selected_node = scene_hash[selected_node]);
                        clear_rect();
                        var box, left, top, right, bottom;
                        scenedraw_nodes.node = node;
                        scenedraw_nodes.selected_node = selected_node;

                        if (node instanceof cc.Node && scenedraw) {
                            box = node.getBoundingBoxToWorld();
                            left = box.x, top = box.y, right = box.x + (box.width || 2), bottom = box.y + (box.height || 2);
                            scenedraw.drawRect(cc.p(left, top), cc.p(right, bottom), cc.color(102, 170, 238, 60), 2, cc.color(102, 170, 238, 255));
                        }
                        //console.log('selected_node', selected_node, scene_hash[selected_node], selected_node instanceof cc.Node && scenedraw)
                        if (selected_node instanceof cc.Node && scenedraw) {
                            box = selected_node.getBoundingBoxToWorld();
                            left = box.x, top = box.y, right = box.x + (box.width || 2), bottom = box.y + (box.height || 2);
                            // cc.color(0,0,0,1) 这地方很诡异，如果alpha设置成0，在某些场景下会画出黑色实心矩形
                            // 目前真相不明，暂时设置为1，可以保证开启画一个内部透明的矩形。
                            scenedraw.drawRect(cc.p(left, top), cc.p(right, bottom), cc.color(0, 0, 0, 1), 2, cc.color(238, 204, 102, 240));
                        }
                    }

                    me.draw_rect = draw_rect;

                    function modify_node(node, attr) {
                        if (typeof node == 'number' || typeof node == 'string') node = scene_hash[node];
                        if (node instanceof cc.Node) {
                            attr = attr || {};
                            // set common
                            for (var i in attr) node[i] = attr[i];
                        }
                    }

                    me.modify_node = modify_node;

                    function send_hierarchy(id) {
                        get_hierarchy();
                        /*
            websocket.send(JSON.stringify({
                method: 'DOM.refresh',
                params: scene_data,
                id: id
            }));*/
                    }

                    // cc hacks: redraw the hierarchy when scene is updated

                    var tk, tk_update, // ticker
                        delay = 10, // interval delay is 10ms
                        timeout = 0, // init value
                        timeout_max = 10 * 1000; // 10s
                    me.start = function () {
                        tk = setInterval(function () {
                            timeout += delay;
                            if (timeout > timeout_max) {
                                clearInterval(tk);
                                tk = null;
                                console.log('timeout: cocos2d engine is not be loaded.');
                                return;
                            }

                            if (document && !document.getElementsByTagName('canvas').length) return; // no canvas
                            //alert(cc.director._runScene)
                            if (typeof cc != "object" || !cc.director) {
                                //if (!cc || !cc.director){
                                return; // no cc
                            }

                            // is injected ?
                            if (cc.director._runScene) {
                                me.on_start && me.on_start();
                                clearInterval(tk);
                                return;
                            }

                            console.log('cc is done!', cc);
                            /*
                function on_update(sc){
                    get_hierarchy();
                    create_scenedraw(sc);

                    me.on_update && me.on_update(sc, scene_data, scene_hash);
                    /*
                    websocket.send(JSON.stringify({
                        method: 'DOM.documentUpdated'
                    }));*/

                            //    console.log(sc)
                            //};

                            // cc.loader._getRes = cc.loader.getRes;
                            /*cc.loader.getRes = function(a){
                    //cc.loader._getRes.apply(cc.loader,Array.prototype.slice.call(arguments))
                    console.log(a)
                    return cc.loader.cache[a]||cc.loader.cache[cc.loader._aliases[a]]
                };
                */
                            cc.director._runScene = cc.director.runScene;
                            cc.director.runScene = function (sc) {
                                cc.director._runScene(sc);

                                //hack code: delay 200ms wait for rendering on next frame.
                                setTimeout(function () {

                                    //get_hierarchy(sc);
                                    scene_data = [], scene_hash = {};
                                    var tree_data = get_node_children(sc);
                                    create_scenedraw(sc);

                                    //console.log(sc._className, sc, sc._children[0]._className, sc.childrenCount, tree_data, scene_hash);
                                    me.on_update && me.on_update(sc, tree_data, scene_hash);

                                }, 200);
                            };

                            cc.director._pushScene = cc.director.pushScene;
                            cc.director.pushScene = function (sc) {
                                cc.director._pushScene(sc);

                                //hack code: delay 200ms wait for rendering on next frame.
                                setTimeout(function () {

                                    scene_data = [], scene_hash = {};
                                    var tree_data = get_node_children(sc);
                                    create_scenedraw(sc);

                                    me.on_update && me.on_update(sc, tree_data, scene_hash);

                                }, 200);
                            };

                            cc.director._popScene = cc.director.popScene;
                            cc.director.popScene = function () {
                                cc.director._popScene();

                                //wait for animation
                                setTimeout(function () {
                                    create_scenedraw(cc.director.getRunningScene());
                                    me.on_start && me.on_start();

                                }, 1000);
                            };

                            cc.Node.prototype._addChild = cc.Node.prototype.addChild;
                            cc.Node.prototype.addChild = function (child, localZOrder, tag) {
                                cc.Node.prototype._addChild.apply(this, [child, localZOrder, tag]);
                                //try{
                                var a = serialize_item_data(child),
                                    data = a.data,
                                    node = a.node,
                                    is_root = false;
                                if (cc.director.getRunningScene() && cc.director.getRunningScene().__instanceId == data.parentId) {
                                    is_root = true;
                                }
                                scene_hash[node.__instanceId] = node;
                                me.on_addChild && me.on_addChild(node, data, is_root);
                                //}catch(e){}
                                //console.log('parentId', child.getParent().__instanceId)
                            };

                            cc.Node.prototype._removeChild = cc.Node.prototype.removeChild;
                            cc.Node.prototype.removeChild = function (child, cleanup) {
                                var parent,
                                    data = {},
                                    is_root = false;
                                try {
                                    if (child == null || child.__instanceId == null) return;

                                    scene_hash[child.__instanceId] = null;
                                    delete scene_hash[child.__instanceId];
                                    parent = child.getParent() || {};
                                    data = {
                                        id: child.__instanceId,
                                        parentId: parent.__instanceId || null
                                    };
                                    if (cc.director.getRunningScene() && cc.director.getRunningScene().__instanceId == data.parentId) {
                                        is_root = true;
                                    }
                                } catch (e) {
                                }

                                cc.Node.prototype._removeChild.apply(this, [child, cleanup]);
                                me.on_removeChild && me.on_removeChild(child, data, is_root);
                            };

                            tk_update = setInterval(function () {
                                draw_rect(scenedraw_nodes.node, scenedraw_nodes.selected_node)
                            }, 80);

                            me.on_start && me.on_start();
                            clearInterval(tk);
                        }, delay);
                    };

                    me.end = function () {
                        clearInterval(tk);
                        clearInterval(tk_update);
                    };

                };

                return InspectElement;
            }));
            //3333: PipePage
            (function () {
                window.PipePage = function () {
                    var me = this;
                    me.messagePool = [];

                    me.send = function (message) {
                        me.messagePool.push(message);
                        //console.log('send :', message);
                    };

                    me.onMessage = function (message) {
                        //console.log('receive :', message);
                    };

                    me.flush = function () {
                        var temp = me.messagePool;
                        me.messagePool = [];
                        return temp;
                    };
                };
            })();
            //4444: Injector {TreeList,}
            (function () {
                var pipePage = new PipePage;
                pipePage.onMessage = function (message) {
                    //console.log('receive :', message);
                    try {
                        var f = eval(message.id);
                        return f.apply(this, message.data);
                    } catch (e) {
                        console.log(e)
                    }

                };
                window.pipePage = pipePage;

                // ----------------

                var ie = {}, at = {}, tt = {};
                at.clear = function () {
                    pipePage.send({id: 'at.clear', data: Array.prototype.slice.call(arguments)})
                }
                tt.clear = function () {
                    pipePage.send({id: 'tt.clear', data: Array.prototype.slice.call(arguments)})
                }
                tt.update = function () {
                    pipePage.send({id: 'tt.update', data: Array.prototype.slice.call(arguments)})
                }
                tt.insert = function () {
                    pipePage.send({id: 'tt.insert', data: Array.prototype.slice.call(arguments)})
                }
                tt.remove = function () {
                    pipePage.send({id: 'tt.remove', data: Array.prototype.slice.call(arguments)})
                }

                var ie = new InspectElement();
                ie.on_update = function (sc, scene_data) {
                    ie.draw_rect(null, null);
                    at.clear();
                    tt.update(scene_data);
                };
                ie.on_addChild = function (node, node_data) {
                    //console.log('addChild',node,node_data,node_data.parentId);
                    tt.insert(node_data, node_data.parentId);
                };
                ie.on_removeChild = function (node, node_data) {
                    //console.log('removeChild',node,node_data,node_data.parentId);
                    tt.remove(node_data, node_data.parentId);
                };
                ie.on_start = function () {
                    // init
                    // the chrome extension mode will init when the first time
                    ie.get_node_children(null, function (v) {
                        //console.log('vvvvvvvvv',v)
                        ie.draw_rect(null, null);
                        tt.update(v);
                    });
                    (function () {
                        //5555: TreeList
                        (function (global, factory) {
                            global['TreeList'] = factory({}); // <script>
                        }(this, function (exports) {
                            //var Tree = function(root){
                            exports = function (root) {
                                var me = this;
                                me.element = null;
                                me.selected = null;

                                (function init() {
                                    add_css('\
            .clear:after{ content: ".";clear: both;display: block;height: 0;visibility: hidden;font-size: 0;line-height: 0; }\
            .tl-ui-scroll{overflow-y:overlay;} .tl-ui-scroll::-webkit-scrollbar {height:8px;overflow:visible;width:8px;background-color:transparent} .tl-ui-scroll::-webkit-scrollbar-thumb {border-radius:8px;background-color:rgba(0,0,0,0.2);}\
            @-moz-document url-prefix() { .tl-ui-scroll{overflow-y:scroll} }\
            \
            /* tree css */\
            .tl-ui-tree {display:block; overflow: auto; position: relative;}\
            .tl-ui-tree:focus{ outline: 0px !important; }\
            .tl-ui-tree .nd{ -moz-user-select:none; -webkit-user-select:none; cursor: default; color: #339; font-size: 12px; overflow: hidden; font-family: Consolas, Lucida Console, monospace; line-height: 16px; padding: 1px 0px 0px 16px}\
            \
            .tl-ui-tree .nd b{ font-weight:100; display: block}\
            .tl-ui-tree .nd .c1{ color:#969 }\
            .tl-ui-tree .nd b:hover:before{ content:" "; pointer-events: none; position:absolute; left:2px; right:2px; height: 16px; background-color:rgba(128,192,255,0.12); border-radius: 4px;}\
            \
            .tl-ui-tree .nd[selected="true"] > b:before{ content:" "; pointer-events: none; position:absolute; left:0px; right:0px; height: 16px; z-index:-1; background-color:rgba(51,128,224,0.8); border-radius: 0px; }\
            .tl-ui-tree .nd[selected="true"] > b{ color:#fff }\
            .tl-ui-tree .nd[selected="true"] > b > *{ color:#fff }\
            \
            .tl-ui-tree:hover .nd[selected="true"] > b:before{ background-color:rgba(51,128,224,.9); }\
            \
            .tl-ui-tree .nd:last-child {}\
            \
            .tl-ui-tree .c{padding-left:6px !@important}\
            .tl-ui-tree .c > .nd{display:none}\
            .tl-ui-tree .c:before,\
            .tl-ui-tree .e:before{ content:" "; pointer-events:none; display:inline-block; position:relative; left:-4px; top:4px; width:0px; height:0px; border-color:transparent; border-style: solid;float:left}\
            \
            .tl-ui-tree .c:before{ border-width: 4px 0 4px 8px;border-left-color: rgba(51,51,51,.5); }\
            .tl-ui-tree .e:before{ border-width: 8px 4px 0px 4px;border-top-color: rgba(51,51,51,.5); }\
            .tl-ui-tree .c[selected="true"]:before { border-left-color: #fff; }\
            .tl-ui-tree .e[selected="true"]:before { border-top-color: #fff; }\
                ');

                                    var el = document.createElement('DIV');
                                    el.className = 'tl-ui-tree';
                                    el.id = parseInt((new Date).getTime());
                                    el.setAttribute('tabindex', 1);
                                    (root || document.body).appendChild(el);
                                    me.element = el;

                                    el.addEventListener('mouseover', function (e) {
                                        var nd_dom = e.target;
                                        (nd_dom.tagName == 'EM') && (nd_dom = nd_dom.parentNode.parentNode);
                                        (nd_dom.tagName == 'SPAN' || nd_dom.tagName == 'B' || nd_dom.tagName == 'I') && (nd_dom = nd_dom.parentNode); // get node dom, <div><b>name ...

                                        me.on_hover && me.on_hover(nd_dom);
                                    });

                                    el.addEventListener('mouseout', function (e) {
                                        e.stopPropagation();
                                        e.preventDefault();

                                        me.on_out && me.on_out();
                                    });

                                    el.addEventListener('mousedown', function (e) {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        var nd_dom = e.target;

                                        (nd_dom.tagName == 'EM') && (nd_dom = nd_dom.parentNode.parentNode);
                                        (nd_dom.tagName == 'SPAN' || nd_dom.tagName == 'B' || nd_dom.tagName == 'I') && (nd_dom = nd_dom.parentNode); // get node dom, <div><b>name ...
                                        select_item(nd_dom);
                                        el.focus();
                                        //console.log(nd_dom, nd_dom.__nodes);
                                    });

                                    function find_parent_sibling(nd) {
                                        var f = function (_n) {
                                            var n = _n.nextSibling;
                                            //if (!n) return;
                                            if (_n.className.indexOf('e') > -1) {// && me.selected.__data && me.selected.__data.nodes && me.selected.__data.nodes.length){
                                                n = _n.getElementsByClassName('nd')[0];
                                            }
                                            return n;
                                        };
                                        return f(nd);
                                    }

                                    el.addEventListener('keydown', function (e) {
                                        if (!me.selected) return;
                                        if (e.keyCode == 38) { // up
                                            var n = me.selected.previousSibling;
                                            // 处理某个元素移动向上一个已经展开的情况
                                            if (!n || n.tagName == 'B') {
                                                n = me.selected.parentNode;
                                                if (n.id == me.element.id) return;
                                            }
                                            // 处理某个子元素移动向上一个已经展开的元素的情况
                                            else if (n.className.indexOf('e') > -1) { // has class e
                                                var i = 0, tmp_n = n, nd_arr, nd_len;
                                                while (i < 1000) { // max 1000 times
                                                    nd_arr = tmp_n.getElementsByClassName('nd');
                                                    nd_len = nd_arr.length;
                                                    tmp_n = nd_arr[nd_len - 1]; // last child
                                                    if (tmp_n.className.indexOf('e') > -1) { /*continue*/
                                                    } else {
                                                        n = tmp_n;
                                                        break;
                                                    }
                                                    i++;
                                                }
                                            }
                                            if (!n) return;
                                            select(n);
                                        } else if (e.keyCode == 40) { // down
                                            var n = me.selected.nextSibling;
                                            // 处理某个元素移动向下一个已经展开的情况
                                            if (me.selected.className.indexOf('e') > -1) { // has class e
                                                n = me.selected.getElementsByClassName('nd')[0];
                                            }
                                            // 处理已经展开的某个子元素移动向下一个元素的情况
                                            else if (!n) {
                                                var i = 0, tmp_n = me.selected;
                                                while (i < 1000) { // max 1000 times
                                                    tmp_n = tmp_n.parentNode;
                                                    if (tmp_n.id == me.element.id) return; // is root
                                                    if (tmp_n.nextSibling) {
                                                        n = tmp_n.nextSibling;
                                                        break;
                                                    }
                                                    i++;
                                                }
                                            }
                                            if (!n) return;
                                            select(n);
                                        } else if (e.keyCode == 39) {
                                            toggle(me.selected);
                                        }
                                    });

                                })();

                                function add_css(v) {
                                    var d = document, b = d.createElement("style"), s = d.styleSheets;
                                    for (var i in s) {
                                        if (s[i].textContent == v) return;
                                    }
                                    b.appendChild(d.createTextNode(v)), d.head.appendChild(b);
                                }

                                function toggle(nd_dom) {
                                    var callback = function () {
                                        if (nd_dom.__is_not_inited && nd_dom.__data && nd_dom.__data.nodes) {
                                            insert(nd_dom.__data.nodes, nd_dom);
                                            nd_dom.__is_not_inited = false;
                                        }
                                        if (nd_dom.className == 'nd e') {
                                            nd_dom.className = 'nd c'
                                        } else if (nd_dom.className == 'nd c') {
                                            nd_dom.className = 'nd e';
                                        }
                                        me.on_after_toggle && me.on_after_toggle(nd_dom);
                                    };
                                    // toggle
                                    me.on_before_toggle ? me.on_before_toggle(nd_dom, callback) : callback();
                                }

                                function select(nd_dom) {
                                    // select a node
                                    me.selected && me.selected.removeAttribute && me.selected.removeAttribute('selected');
                                    nd_dom.setAttribute('selected', true);
                                    me.selected = nd_dom;
                                    me.on_select && me.on_select(nd_dom);
                                }

                                function select_item(nd_dom) {
                                    select(nd_dom);
                                    toggle(nd_dom);
                                }

                                me.select_item = select_item;

                                function explore(path) {
                                    path = path || [];
                                    var nd, nd_dom;

                                    var callback = function () {
                                        if (nd_dom.__is_not_inited && nd_dom.__data && nd_dom.__data.nodes) {
                                            insert(nd_dom.__data.nodes, nd_dom);
                                            nd_dom.__is_not_inited = false;
                                        }
                                        if (nd_dom.className == 'nd c') {
                                            nd_dom.className = 'nd e'
                                        }
                                        find_by_path_and_expand_node();
                                        me.on_after_toggle && me.on_after_toggle(nd_dom);
                                    };

                                    function find_by_path_and_expand_node() {
                                        if (path.length <= 0) {
                                            return;
                                        }
                                        nd = path.shift();
                                        nd_dom = document.getElementById(nd.id);

                                        me.on_before_toggle ? me.on_before_toggle(nd_dom, callback) : callback();
                                    }

                                    find_by_path_and_expand_node();
                                    select(nd_dom); // select a nd_dom
                                    me.element.parentNode.scrollTop = nd_dom.offsetTop; // scroll to selection

                                };
                                me.explore = explore;

                                function remove(d, parent) {
                                    var nd, nd_dom;
                                    if (typeof parent == 'number' || typeof parent == 'string') {
                                        parent = document.getElementById(parent);
                                    }
                                    if (parent == null) return;
                                    nd = d || {};
                                    nd_dom = document.getElementById(nd.id);
                                    nd_dom && parent.removeChild(nd_dom);
                                    me.on_remove && me.on_remove(nd, parent);
                                }

                                me.remove = remove;

                                function insert(d, parent) {
                                    var nd, nd_dom;
                                    if (typeof parent == 'number' || typeof parent == 'string') {
                                        parent = document.getElementById(parent);
                                    }
                                    if (parent == null) return;

                                    function ir() {
                                        nd_dom = document.createElement('DIV');
                                        nd_dom.id = nd.id || null;
                                        nd_dom.className = 'nd';
                                        nd_dom.setAttribute('name', nd.text);
                                        nd_dom.innerHTML = '<b>' + ((nd.name != undefined) ? ('<em class="c1">' + nd.name + '</em>:') : '') + nd.text || '..' + '</b>';
                                        // set the source data
                                        nd && (typeof nd == 'object') && (nd_dom.__data = nd);
                                        if (nd && nd.nodes && nd.nodes.length) {
                                            //nd_dom.__nodes = nd.nodes;
                                            nd_dom.className += ' c'; // collapsed, expanded
                                            nd_dom.__is_not_inited = true;
                                        }
                                        parent.appendChild(nd_dom);
                                    }

                                    if (d.constructor.name == 'Array') {
                                        for (var i = 0, j = d.length; i < j; i++)
                                            nd = d[i], ir();
                                    } else {
                                        nd = d, ir();
                                    }
                                    me.on_insert && me.on_insert(d, parent);
                                }

                                me.insert = insert;

                                function clear_children(el) {
                                    el = el || me.element;
                                    el.innerHTML = String(el.innerHTML).match(/<b>.*?<\/b>/)[0];  // reserve title and clean nodes
                                    //el.innerHTML = String(el.innerHTML).match(/<b>\S+<\/b>/)[0];  // reserve title and clean nodes
                                }

                                me.clear_children = clear_children;

                                function clear(el) {
                                    el = el || me.element;
                                    el.innerHTML = '';  // clear
                                    me.selected = null;
                                }

                                me.clear = clear;

                                function update(d, el) {
                                    el = el || me.element;
                                    el.innerHTML = '';  // clear
                                    me.selected = null;
                                    insert(d, el);
                                }

                                me.update = update;

                                return me;
                            };

                            return exports;
                        }));
                        //6666: ScaleProfiles
                        (function (global, factory) {
                            global['ScaleProfiles'] = factory({}); // <script>Z
                        }(this, function (exports) {
                            exports = function (root) {
                                /*t.apply(this, arguments), */
                                this.element = document.createElement('DIV');
                                this.element.className = 'tl-ui-scaleprofiles';
                                this.element.style.position = 'relative';
                                var SPEED_CONFIG = [
                                    0, .05, .1, .25, .5, .75,
                                    1,
                                    1.5, 2, 3, 4, 8, 16, 32
                                ];

                                add_css('\
            .tl-ui-scaleprofiles input[type="range"]{\
              -webkit-appearance:none;\
              height:28px;\
              background: linear-gradient(to right, #eee 0%, #eee 100%);\
              background-size:100% 4px;\
              background-position:center;\
              background-repeat:no-repeat;\
              overflow:hidden;\
              padding-right:1px;padding-left:.5px;\
              margin:0px;\
            }\
            .tl-ui-scaleprofiles input[type="range"]::-webkit-slider-thumb{\
              -webkit-appearance:none;\
              width:20px;\
              height:20px;\
              border-radius: 100%;\
              background:#fff;\
              position:relative;\
              z-index:3;\
              box-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 1px 3px 5px rgba(0, 0, 0, 0.25);\
              cursor: pointer;\
            }\
            .tl-ui-scaleprofiles input[type="range"]::-webkit-slider-thumb:after{\
              content:" ";\
              width:2000px;\
              height:4px;\
              position:absolute;\
              z-index:1;\
              right:20px;\
              top:8px;\
              background: rgba(51,128,224,0.8);\
              /*background: #ff5b32;\
              background: linear-gradient(to right, #f088fc 1%, #AC6CFF 70%);*/\
            }\
        ');

                                function add_css(v) {
                                    var d = document, b = d.createElement("style"), s = d.styleSheets;
                                    for (var i in s) {
                                        if (s[i].textContent == v) return;
                                    }
                                    b.appendChild(d.createTextNode(v)), d.head.appendChild(b);
                                }


                                var me = this;
                                this.element.innerHTML = '\
            <fieldset style="border:1px solid #ccc;margin:10px;border-radius:4px;text-align:center;font:normal 14px arial;">\
                <legend>' + (typeof I18n && I18n('Set speed:')) + ' <b>1x</b></legend>\
                <input type="range" class="speed-range" name="set-speed" min="0" max="' + (SPEED_CONFIG.length - 1) + '" style="width:80%;outline:none;" value="6" />\
            </fieldset>';
                                this.element.style.color = '#333';

                                this.element.addEventListener('mousemove', function (e) {
                                    var nd_dom = e.target;
                                    if (nd_dom.type == 'range' && nd_dom.name == 'set-speed') {
                                        nd_dom.parentNode.children[0].children[0].innerHTML = SPEED_CONFIG[nd_dom.value] + 'x';
                                    }
                                });
                                this.element.addEventListener('change', function (e) {
                                    var nd_dom = e.target;
                                    e.stopPropagation();
                                    e.preventDefault();

                                    if (nd_dom.type == 'range' && nd_dom.name == 'set-speed') {
                                        nd_dom.parentNode.children[0].children[0].innerHTML = SPEED_CONFIG[nd_dom.value] + 'x';
                                        me.on_change && me.on_change('speed', SPEED_CONFIG[nd_dom.value]);
                                    }
                                });

                                root.appendChild(this.element);
                            }

                            // exports.prototype.on_change = function(t){

                            // };

                            return exports;
                        }));
                        //7777：AttrTable
                        (function (global, factory) {
                            global['AttrTable'] = factory({}); // <script>
                        }(this, function (exports) {
                            //var AttrTable = function(root){
                            exports = function (root) {
                                var me = this;
                                me.element = null;

                                (function init() {
                                    add_css('\
            .clear:after{ content: ".";clear: both;display: block;height: 0;visibility: hidden;font-size: 0;line-height: 0; }\
            .tl-ui-scroll{overflow-y:overlay;} .tl-ui-scroll::-webkit-scrollbar {height:8px;overflow:visible;width:8px;background-color:transparent} .tl-ui-scroll::-webkit-scrollbar-thumb {border-radius:8px;background-color:rgba(0,0,0,0.2);}\
            @-moz-document url-prefix() { .tl-ui-scroll{overflow-y:scroll} }\
            \
            /* attribute table css */\
            .tl-ui-attr {display:block; position: relative;}\
            .tl-ui-attr:focus{ outline: 0px !important; }\
            .tl-ui-attr-i {border-bottom:1px solid gainsboro}\
            .tl-ui-attr label {text-indent:10px; display: inline-block; width: 60%; color:#666; font: 100 12px Consolas, Lucida Console, monospace; vertical-align:middle; pointer-events:none;}\
            .tl-ui-attr input, .tl-ui-attr textarea{ vertical-align:middle; display: inline-block; font:100 12px Consolas, Lucida Console, monospace; padding:0; margin:0px 0px}\
            .tl-ui-attr-i[readonly="true"], .tl-ui-attr [readonly="true"]{ opacity:.5 }\
            \
            .tl-ui-attr input[type="text"], .tl-ui-attr input[type="number"], .tl-ui-attr input[type="image"],\
            .tl-ui-attr textarea{ line-height:20px; width:40%; border:none; }\
            \
            .tl-ui-attr input[type="number"]{ color:rgb(28, 0, 207); }\
            .tl-ui-attr input[type="text"],.tl-ui-attr textarea{ color:rgb(196, 26, 22); }\
            .tl-ui-attr input[type="image"]{ border:none; height:40px; width:40px; }\
            .tl-ui-attr a.image{ border:none; display: inline-block; background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC); }\
            \
            .tl-ui-attr input[type="checkbox"]{ height:14px; width:14px; margin:2px 0;}\
            /*.tl-ui-attr input[type="checkbox"]{ border-radius:20px; background:gainsboro; width:48px; height:20px; -webkit-appearance:none; vertical-align: middle; transition: all .4s ease; }\
            .tl-ui-attr input[type="checkbox"]:checked{ background: limegreen; }\
            .tl-ui-attr input[type="checkbox"]:before{ border-radius:20px; transition: all .2s ease;content: " "; position: relative; display: block; background: white; width: 16px; height: 16px; top:2px; left:30px; z-index:1; }\
            .tl-ui-attr input[type="checkbox"]:checked:before{top:2px;left:2px;}*/\
            \
            .tl-ui-attr input[type="color"]{ border:none; background:transparent; margin:0px; width:48px;height:20px; }\
                ');

                                    var el = document.createElement('DIV');
                                    el.className = 'tl-ui-attr';
                                    el.id = parseInt((new Date).getTime());
                                    el.setAttribute('tabindex', 2);
                                    (root || document.body).appendChild(el);
                                    me.element = el;

                                    el.addEventListener('click', function (e) {
                                        var nd_dom = e.target;
                                        //e.stopPropagation();
                                        //e.preventDefault();

                                        if (nd_dom.getAttribute('readonly')) return;
                                        if (nd_dom.type == 'image') return;

                                        if (navigator.userAgent.match('Chrome')) {
                                            if (nd_dom.tagName == 'INPUT' && nd_dom.type == 'number') {
                                                me.element.parentNode.style.overflowY = 'hidden';
                                            } else {
                                                me.element.parentNode.style.overflowY = 'overlay';
                                            }
                                        }
                                    });

                                    el.addEventListener('mousewheel', function (e) {
                                        var nd_dom = e.target;

                                        if (nd_dom.getAttribute('readonly')) return;

                                        //if (nd_dom.tagName == 'INPUT' || nd_dom.tagName == 'TEXTAREA'){
                                        if (nd_dom.tagName == 'INPUT' && nd_dom.type == 'number') {
                                            on_change(nd_dom, nd_dom.attr, get_value(nd_dom));
                                        }
                                    });

                                    el.addEventListener('change', function (e) {
                                        var nd_dom = e.target;
                                        e.stopPropagation();
                                        e.preventDefault();

                                        if (nd_dom.getAttribute('readonly')) return;
                                        if (nd_dom.type == 'image') return;

                                        if (nd_dom.tagName == 'INPUT' || nd_dom.tagName == 'TEXTAREA') {
                                            on_change(nd_dom, nd_dom.attr, get_value(nd_dom));
                                        }
                                    });

                                    el.addEventListener('keydown', function (e) {
                                        me.disable_change = false
                                    });
                                    el.addEventListener('mousedown', function (e) {
                                        me.disable_change = false
                                    });

                                    el.addEventListener('keyup', function (e) {
                                        var nd_dom = e.target;
                                        e.stopPropagation();
                                        e.preventDefault();

                                        if (nd_dom.getAttribute('readonly')) return;
                                        if (nd_dom.type == 'image') return;

                                        if (nd_dom.tagName == 'INPUT' || nd_dom.tagName == 'TEXTAREA') {
                                            on_change(nd_dom, nd_dom.attr, get_value(nd_dom));
                                        }
                                    });

                                })();

                                function add_css(v) {
                                    var d = document, b = d.createElement("style"), s = d.styleSheets;
                                    for (var i in s) {
                                        if (s[i].textContent == v) return;
                                    }
                                    b.appendChild(d.createTextNode(v)), d.head.appendChild(b);
                                }

                                function on_change(nd_dom, attr, value) {
                                    if (me.disable_change) return;
                                    me.on_change && me.on_change(nd_dom, attr, value);
                                }

                                function rgb2hex(red, green, blue) {
                                    //var decColor = red + 256 * green + 65536 * blue;
                                    //return '#' + decColor.toString(16);
                                    return '#' + ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1);
                                }

                                function hex2rgb(hex) {
                                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                                    return result ? {
                                        r: parseInt(result[1], 16),
                                        g: parseInt(result[2], 16),
                                        b: parseInt(result[3], 16)
                                    } : null;
                                }

                                function get_value(nd_dom) {
                                    if (nd_dom.type == 'number') {
                                        return Number(nd_dom.value);
                                    } else if (nd_dom.type == 'color') {
                                        var color = hex2rgb(nd_dom.value);
                                        nd_dom.title = ['R:' + color.r, 'G:' + color.g, 'B:' + color.b].join();
                                        return color;
                                    } else if (nd_dom.type == 'checkbox') {
                                        return Boolean(nd_dom.checked);
                                    }
                                    return nd_dom.value;
                                }

                                function create_item(attr, data) {
                                    var el = document.createElement('DIV');
                                    el.className = 'tl-ui-attr-i';
                                    el.innerHTML = '<label>' + attr + ':</label>';
                                    el.title = data.desc || attr;

                                    var o = document.createElement('input');
                                    data = data || {};
                                    var value = data.value;
                                    if (data.type == 'color') {
                                        o.type = 'color';
                                        value = value || {};
                                        if (typeof value == 'object') {  // convert to hex color, et. #336699
                                            var r = value.r, g = value.g, b = value.b;
                                            value = rgb2hex(r, g, b);
                                            o.title = ['R:' + r, 'G:' + g, 'B:' + b].join();
                                        }
                                    } else if (data.type == 'image') {
                                        o.type = 'image';
                                        o.title = value;
                                        o.setAttribute('attr', attr);

                                        var img = new Image(), max_h = 100, max_w = 100,
                                            _o = o, a = document.createElement('A');
                                        img.onload = function () {
                                            var scale = 1;
                                            if (img.width > img.height) {
                                                scale = max_w / img.width;
                                                img.width = max_w;
                                                img.height = img.height * scale;
                                            } else {
                                                scale = max_h / img.height;
                                                img.width = img.width * scale;
                                                img.height = max_h;
                                            }
                                            _o.style.width = img.width + 'px', _o.style.height = img.height + 'px';
                                            img.onload = null, img = null;
                                        };

                                        if (value != undefined) {
                                            o.src = value;
                                            o.setAttribute('value', value);

                                            img.src = value;
                                            a.href = value;
                                            a.target = '_blank';
                                        } else {
                                            navigator.userAgent.match('Firefox') && o.setAttribute('value', '');
                                            o.style.cursor = 'default';

                                            a.href = 'javascript:void(0)';
                                            a.style.cursor = 'default';
                                        }

                                        a.className = 'image', a.appendChild(_o);
                                        o = a; // reset o
                                    } else if (data.type == 'boolean') {
                                        o.type = 'checkbox';
                                        o.checked = value;
                                    } else if (data.type == 'number') {
                                        o.type = 'number';
                                        o.step = 'any';
                                    } else if ({'string': 1, 'text': 1, 'title': 1}[attr]) {
                                        o = document.createElement('textarea');
                                        o.attr = attr;
                                        o.setAttribute('attr', attr);
                                        o.innerHTML = value;
                                    } else { // string
                                        o.type = 'text';
                                    }

                                    if (navigator.userAgent.match('Chrome')) {
                                        o.onblur = function () {
                                            me.element.parentNode.style.overflowY = 'overlay'
                                        };
                                    }
                                    o.attr = attr;
                                    o.setAttribute('attr', attr);
                                    o.value = value;
                                    if (data.readonly) el.setAttribute('readonly', true), o.setAttribute('readonly', true), o.setAttribute('disabled', true);

                                    el.appendChild(o);
                                    me.element.appendChild(el);
                                }

                                function clear(el) {
                                    el = el || me.element;
                                    el.innerHTML = '';  // clear
                                }

                                me.clear = clear;

                                function update(d) {
                                    // Object.prototype.toString.call([]) == "[object Array]"
                                    me.disable_change = true; // avoid the on_change event was triggered when reset element
                                    me.element.innerHTML = '';
                                    for (var attr in d) {
                                        create_item(attr, d[attr]);
                                    }
                                    me.disable_change = false;
                                }

                                me.update = update;
                            };

                            return exports;
                        }));
                        //8888: ChartFPS
                        (function (global, factory) {
                            global['ChartFPS'] = factory({}); // <script>
                        }(this, function (exports) {
                            exports = function (w, h, root) {
                                /*t.apply(this, arguments), */
                                this.element = document.createElement('DIV');
                                this.element.className = 'tl-ui-chartfps';
                                this.element.style.color = '#333';
                                this.element.style.position = 'relative';
                                this.fps_txt = document.createElement('DIV');
                                this.fps_txt.style.position = 'absolute', this.fps_txt.style.zIndex = 9, this.fps_txt.style.font = 'normal 18px arial';
                                this.cvs = document.createElement('CANVAS');
                                this.cvs.width = (this.element.clientWidth || 1000), this.cvs.height = (this.element.clientHeight || 100),
                                    this.cvs.style.width = "100%", this.cvs.style.height = this.cvs.height + 'px',
                                    this.MAX_FPS = 80, this.MAX_LINES = Math.round(this.cvs.width / 10), this._fps_data = [], this._fps = 0;

                                this.ctx = /*document.getElementById("fpsChart")*/ this.cvs.getContext("2d");
                                this.ctx.webkitImageSmoothingEnabled = false;
                                this.ctx.mozImageSmoothingEnabled = false;
                                this.fps && this.fps(0);

                                root = root || document.body;
                                this.element.appendChild(this.fps_txt);
                                this.element.appendChild(this.cvs);
                                root.appendChild(this.element);
                            }

                            exports.prototype.fps = function (t) {
                                if (t == undefined) {
                                    return this._fps
                                } else {
                                    this._fps = t, this._fps_data.push(t), this._fps_data.length > this.MAX_LINES && this._fps_data.shift(), this.draw_cc(), this.on_fps && this.on_fps()
                                }
                            };

                            exports.prototype.draw_cc = function () {
                                var t = this._fps_data.length, c = this.ctx, w = c.canvas.width, h = c.canvas.height,
                                    i = Math.round(w / this.MAX_LINES), o = Math.min.apply(Math, this._fps_data);
                                o = Math.min(o, 20), c.clearRect(0, 0, w, h);
                                c.shadowOffsetX = c.shadowOffsetY = c.shadowBlur = 0;
                                for (var r = 0; r < t; r++) {
                                    var s = this._fps_data[r],
                                        percent = Math.min(s / this.MAX_FPS, this.MAX_FPS), // MAX fps = 80
                                        red = Math.round((1 - percent) * 200),
                                        green = Math.round(percent * 255);

                                    c.fillStyle = "rgba(" + [red, Math.round(green * .6), green, .8].join() + ")", c.fillRect(r * i, Math.round((1 - percent) * h), i /*- 1*/, Math.round(percent * h));
                                }
                                for (var r = 1; r <= 4; r++) {
                                    c.fillStyle = "rgba(0,0,0,.2)", c.fillRect(0, Math.round((r / 4) * h) - 1, w, 1);
                                }

                                this.fps_txt.innerHTML = 'FPS:' + this._fps;
                                /*
                    c.shadowColor = "#fff";
                    c.shadowOffsetX = c.shadowOffsetY = c.shadowBlur = 1;
                    c.font = "bold 12px arial";
                    c.fillStyle = "#000";
                    c.fillText(this._fps,10,10);*/
                            };

                            return exports;
                        }));
                        //9999: I18n
                        (function (global, factory) {
                            global['I18n'] = factory({}); // <script>
                        }(this, function (exports) {
                            res = {}
                            var lang = 'zh-cn';
                            res['zh-cn'] = {
                                'Dock to left/top/right/bottom': '把窗口停靠到 左/上/右/下',
                                'Dock': '停靠',
                                'Elements': '场景元素',
                                'Profiles': '性能调试',
                                'Inspect Element': '检察元素',
                                'Refresh': '刷新列表',
                                'Set speed:': '设置APP速度：',

                                '_': '_' // rear
                            };

                            exports = function (t) {
                                if (!res[lang]) return String(t);
                                return String(res[lang][t] || t);
                            };

                            exports.lang = lang;

                            return exports;
                        }));
                        //10101010: web界面
                        (function (I18n) {
                            I18n = I18n || function (t) {
                                return String(t)
                            };

                            var tmpl = '\
            <style>\
                .tl-ui-tabs{ background-color:#ddd; height:30px; overflow:hidden }\
                .tl-ui-tabs .iconfont{ font-size:16px }\
                .tl-ui-tabs a{ font:normal 14px "Helvetica Neue", Helvetica, Arial, sans-serif; color:#666; text-decoration:none; }\
                .tl-ui-tabs > a{ line-height:30px; height:30px; padding:0px 10px; text-decoration:none; display:block; float:left }\
                .tl-ui-tabs > a.sel{ background-color:#fff; color:#333; font-weight:bold; box-shadow:0px 0px 6px rgba(0,0,0,.5) }\
                .tl-ui-tabs > a:hover{ color:#000; }\
                .tl-ui-tools { font:normal 14px "Helvetica Neue", Helvetica, Arial, sans-serif; line-height:26px; border-bottom:1px solid #eee; }\
                .tl-ui-tools > a{ color:#999; padding:0 8px; text-decoration:none; display:inline-block}\
                .tl-ui-tools > a:hover{ color:#666 }\
                .tl-ui-tools > a[name="btn-insp"]:focus{ background-color: rgba(51,128,224,.6); color:#fff; box-shadow:inset 0px 0px 0px 4px #fff; }\
                .clear:after{ content: ".";clear: both;display: block;height: 0;visibility: hidden;font-size: 0;line-height: 0; }\
                .jiathis_style .jiadiv_01 .link_01:first-child{ display:none !important }\
                .a2a_menu {font-size:13px !important; border-radius: 0px !important; }\
                .a2a_menu a {font-size:13px !important; border-radius: 0px !important; }\
                a.a2a_i, i.a2a_i{ line-height:20px !important; font-size:13px !important; padding: 2px 6px !important; }\
                a.a2a_i .a2a_svg, a.a2a_more .a2a_svg {background-size: 100% !important;height: 20px !important;line-height: 20px !important;width: 20px !important; }\
                @font-face {\
                  font-family: "uxiconfont";\
                  src_original: url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.eot");\
                  src_original: url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */\
                   url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.woff") format("woff"), /* chrome、firefox */\
                   url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/\
                   url("http://t.tbcdn.cn/g/thx/brix/fonts/uxiconfont.svg#svgFontName") format("svg");/* IE9*/\
                  /* iOS 4.1- */\
                }\
                .iconfont {font-family: "uxiconfont" !important;font-style: normal; font-weight:normal; -webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}\
            </style>\
            <div class="tl-ui-tabs clear">\
                <a name="tab-dock" title="' + I18n('Dock to left/top/right/bottom') + '" style="float:right" href="javascript:void(0)"><em class="iconfont">Ġ</em> ' + I18n('Dock') + '</a>\
                <a name="tab-elements" href="javascript:void(0)" class="sel">' + I18n('Elements') + '</a>\
                <a name="tab-profiles" href="javascript:void(0)">' + I18n('Profiles') + '</a>\
                '
                                +
                                '</div>\
                    <div class="clear" style="position:relative;height:200px;right:0px;left:0px;z-index:9999;background-color:#fff">\
                        <div id="container-elements" style="height:100%;">\
                            <div class="tl-ui-tools">\
                                <a href="javascript:void(0)" name="btn-insp"><em class="iconfont">Ċ</em> ' + I18n('Inspect Element') + '</a>\
                        <a href="javascript:void(0)" name="btn-refresh"><em class="iconfont">ş</em> ' + I18n('Refresh') + '</a>\
                    </div>\
                    <div id="left" class="tl-ui-scroll" style="width:60%;height:100%;float:left;">\
                    </div>\
                    <div id="right" class="tl-ui-scroll" style="width:40%;height:100%;float:left;box-shadow:inset 1px 0px 0px silver;">\
                    </div>\
                </div>\
                <div id="container-profiles" class="tl-ui-scroll" style="display:none;height:100%;"></div>\
            </div>\
    ';

                            var el = document.createElement('div');
                            el.style.backgroundColor = '#fff';
                            el.style.zIndex = 9999;
                            el.style.boxShadow = '0px 0px 0px 1px #ccc';
                            el.style.overflow = 'hidden';
                            el.innerHTML = tmpl;
                            el.className = "devlop-tool";
                            document.body.appendChild(el);
                            document.body.style.overflow = 'auto';
                            window.scrollTo(0, document.body.clientHeight);

                            var left = document.getElementById('left'),
                                right = document.getElementById('right'),
                                container_elements = document.getElementById('container-elements'),
                                container_profiles = document.getElementById('container-profiles'),
                                tabs = el.children[1],
                                containers = el.children[2],
                                btn_elem = document.getElementById('btn_elem'),
                                btn_dock = tabs.children[0];

                            el.addEventListener('click', function (e) {
                                //e.stopPropagation();
                                //e.preventDefault();
                                var d = e.target,
                                    n = d.name;

                                function clear_tabs() {
                                    for (var i = 0, j = tabs.children.length; i < j; i++) {
                                        if (tabs.children[i].tagName == 'A')
                                            tabs.children[i].className = '';
                                    }
                                    for (var i = 0, j = containers.children.length; i < j; i++) {
                                        containers.children[i].style.display = 'none';
                                    }
                                }

                                if (n == 'tab-elements') {
                                    clear_tabs();
                                    d.className = 'sel';
                                    container_elements.style.display = 'block';

                                } else if (n == 'tab-profiles') {
                                    clear_tabs();
                                    d.className = 'sel';
                                    container_profiles.style.display = 'block';

                                } else if (n == 'btn-refresh') {
                                    try {
                                        window._cocos_devtools.ie.on_update(null, window._cocos_devtools.ie.get_node_children())
                                    } catch (e) {
                                    }
                                } else if (n == 'btn-insp') {
                                    try {
                                        window._cocos_devtools.ie.begin_inspect()
                                    } catch (e) {
                                    }
                                }
                            });

                            // update tree

                            btn_dock.onclick = function () {
                                btn_dock.dock = btn_dock.dock || 0;
                                btn_dock.dock++;
                                if (btn_dock.dock == 4) {
                                    btn_dock.dock = 0;
                                }

                                if (btn_dock.dock == 0) {
                                    change_dock('bottom');
                                    localStorage.setItem('change_dock', 'bottom');
                                } else if (btn_dock.dock == 1) {
                                    change_dock('left');
                                    localStorage.setItem('change_dock', 'left');
                                } else if (btn_dock.dock == 2) {
                                    change_dock('top');
                                    localStorage.setItem('change_dock', 'top');
                                } else if (btn_dock.dock == 3) {
                                    change_dock('right');
                                    localStorage.setItem('change_dock', 'right');
                                }
                            };

                            function change_dock(mode) {
                                if (mode == 'bottom') {
                                    el.style.position = 'static';
                                    el.style.width = 'auto';
                                    el.style.height = 'auto';
                                    el.style.top = 'auto';
                                    el.style.right = 'auto';

                                    left.style.width = '60%';
                                    left.style.height = 'calc(100% - 28px)';
                                    left.style.float = 'left';

                                    right.style.width = '40%';
                                    right.style.height = 'calc(100% - 28px)';
                                    right.style.float = 'left';

                                    el.children[2].style.height = '200px';
                                    el.parentNode.appendChild(el);
                                    window.scrollTo(0, document.body.clientHeight);
                                } else if (mode == 'left') {
                                    el.style.position = 'absolute';
                                    el.style.width = '25%';
                                    el.style.height = '100%';
                                    el.style.top = '0px';
                                    el.style.right = 'auto';

                                    left.style.width = '100%';
                                    left.style.height = 'calc(60% - 30px)';
                                    left.style.float = 'none';

                                    right.style.width = '100%';
                                    right.style.height = '40%';
                                    right.style.float = 'none';

                                    el.children[2].style.height = 'calc(100% - 30px)';
                                    el.parentNode.appendChild(el);
                                    window.scrollTo(0, 0);
                                } else if (mode == 'top') {
                                    el.style.position = 'relative';
                                    el.style.width = 'auto';
                                    el.style.height = 'auto';
                                    el.style.top = 'auto';
                                    el.style.right = 'auto';

                                    left.style.width = '60%';
                                    left.style.height = 'calc(100% - 28px)';
                                    left.style.float = 'left';

                                    right.style.width = '40%';
                                    right.style.height = 'calc(100% - 28px)';
                                    right.style.float = 'left';

                                    el.children[2].style.height = '200px';
                                    el.parentNode.insertBefore(el, el.parentNode.children[0]);
                                    window.scrollTo(0, 0);
                                } else if (mode == 'right') {
                                    el.style.position = 'absolute';
                                    el.style.width = '25%';
                                    el.style.height = '100%';
                                    el.style.top = '0px';
                                    el.style.right = '0px';

                                    left.style.width = '100%';
                                    left.style.height = 'calc(60% - 30px)';
                                    left.style.float = 'none';

                                    right.style.width = '100%';
                                    right.style.height = '40%';
                                    right.style.float = 'none';

                                    el.children[2].style.height = 'calc(100% - 30px)';
                                    el.parentNode.appendChild(el);
                                    window.scrollTo(0, 0);
                                }
                            }

                            // remember dock
                            (function () {
                                var d = localStorage.getItem('change_dock') || 'bottom';
                                change_dock(d);
                                btn_dock.dock = {'bottom': 0, 'left': 1, 'top': 2, 'right': 3}[d];
                            })();
                        })(I18n);
                        //11111111: 其他
                        (function (_this) {
                            var _cd = {};
                            _this._cocos_devtools = _cd;
                            // ui
                            var tt, at, cf, sp, // ui
                                ie, cfps, sph; // inject

                            tt = new _this['TreeList'](document.getElementById('left'));
                            tt.on_hover = function (nd) {
                                nd && nd.__data && ie && ie.draw_rect(nd.__data.id, tt.selected ? tt.selected.id : null);
                            };
                            tt.on_out = function () {
                                ie && ie.draw_rect(null, tt.selected ? tt.selected.id : null);
                            };
                            tt.on_select = function (nd) {
                                nd && nd.__data && at && at.update(nd.__data.attr);
                                nd && nd.__data && ie && ie.draw_rect(nd.__data.id, tt.selected ? tt.selected.id : null);
                            };
                            tt.on_before_toggle = function (nd, next) {
                                // clear current node's children
                                tt.clear_children(nd);
                                // get new data, and set to the node's __data, it's will re-load data as tree when next expanded
                                nd.__is_not_inited = true;
                                ie.get_node_children(nd.id, function (v) {
                                    nd.__data.nodes = v;
                                    next();
                                });
                            };
                            tt.on_after_toggle = function (nd) {
                                if (nd.children.length < 2) { // index 0 is <b>title</b>
                                    nd.className = 'nd';
                                }
                            };
                            tt.on_remove = function (nd) {
                                // remove an arrow when a node is void.
                                var p = document.getElementById(nd.parentId);// find parent
                                if (p) {
                                    p.__data.nodes = p.__data.nodes || [];
                                    if (p.__is_not_inited) {
                                        p.__data.nodes.pop();
                                    } else { // find by id
                                        for (var i = 0, j = p.__data.nodes.length; i < j; i++) {
                                            if (p.__data.nodes[i] && p.__data.nodes[i].id == nd.id) {
                                                p.__data.nodes.slice(i, 1);
                                                break;
                                            }
                                        }
                                    }
                                    //console.log(p.children, p.__data.nodes)
                                    if (p.className == 'nd c' && p.__data.nodes.length == 0) { // index 0 is <b>title</b>
                                        p.className = 'nd';
                                    } else if (p.className == 'nd e' && p.children.length < 2) {
                                        p.className = 'nd';
                                    }
                                }
                                if (tt && nd && tt.selected && nd.id == tt.selected.id) {
                                    at.clear()
                                }
                            };
                            tt.on_insert = function (nd) {
                                // show an arrow when a collapsed node is void.
                                var p = document.getElementById(nd.parentId);// find parent
                                if (p) {
                                    p.__data.nodes = p.__data.nodes || [];
                                    if (p.__data.nodes.length == 0) p.__is_not_inited = true;
                                    if (p.className == 'nd') {
                                        p.className = 'nd c';
                                    }
                                    p.__data.nodes.push(nd); // add a place-holder
                                }
                            };

                            at = new _this['AttrTable'](document.getElementById('right'));
                            at.on_change = function (nd, attr, value) {
                                if (tt.selected) {
                                    var attr_obj = {};// write an object for set attribute
                                    attr_obj[attr] = value;
                                    //tt.selected.__data.attr[attr] = value; // set the tree data
                                    tt.selected.__data.attr[attr].value = value; // set the tree data
                                    ie.modify_node(tt.selected.__data.id, attr_obj); // set the canvas
                                }
                            };

                            cf = new _this['ChartFPS'](null, null, document.getElementById('container-profiles'));
                            cf.element.style.width = '100%';
                            cf.element.style.height = '100px';

                            sp = new _this['ScaleProfiles'](document.getElementById('container-profiles'));
                            sp.on_change = function (msg, value) {
                                if (msg == 'speed') {
                                    sph && sph.adjust && sph.adjust(value);
                                }
                            };

                            //--------------------------------------------
                            // inject

                            var FpsCalc = function () {
                                this.frames = 0;
                                this.lastUpdate = Date.now();
                                this.tick = function () {
                                    this.frames++;
                                    var now = Date.now();
                                    var deltaTime = (now - this.lastUpdate) / 1000;
                                    if (deltaTime > cc.DIRECTOR_FPS_INTERVAL) {
                                        frameRate = this.frames / deltaTime;
                                        this.frames = 0;
                                        this.lastUpdate = now;
                                        return frameRate.toFixed(1);
                                    }
                                }
                            };
                            cfps = new FpsCalc();
                            cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_DRAW, function () {
                                cf.fps(cfps.tick());
                            });

                            var SpeedHook = function () {
                                return {
                                    speed: 1,
                                    bind: function () {
                                        var _this = this;
                                        if (cc.director.__calculateDeltaTime) return;
                                        cc.director.__calculateDeltaTime = cc.director.calculateDeltaTime;
                                        cc.director.calculateDeltaTime = function () {
                                            cc.director._deltaTime = (1 / cc.game.config.frameRate) * _this.speed;
                                            cc.director._lastUpdate = Date.now();
                                        }
                                    },
                                    adjust: function (t) {
                                        this.bind();
                                        this.speed = t;
                                    },
                                    unbind: function () {
                                        cc.director.calculateDeltaTime = cc.director.__calculateDeltaTime;
                                    }
                                }
                            };
                            sph = new SpeedHook();

                            ie = new InspectElement();

                            ie.on_update = function (sc, scene_data) {
                                ie.draw_rect(null, null);
                                at.clear();
                                tt.update(scene_data);
                                //console.log('update',scene_data);
                            };
                            ie.on_addChild = function (node, node_data, is_root) {
                                //console.log('addChild',node,node_data,node_data.parentId);
                                if (is_root) {
                                    tt.insert(node_data, tt.element); // add to root of tree
                                } else {
                                    tt.insert(node_data, node_data.parentId); // add to a node of tree
                                }
                            };
                            ie.on_removeChild = function (node, node_data, is_root) {
                                //console.log('removeChild',node,node_data,node_data.parentId);
                                if (is_root) {
                                    tt.remove(node_data, tt.element); // remove from root of tree
                                } else {
                                    tt.remove(node_data, node_data.parentId); // remove from a node of tree
                                }
                            };
                            ie.on_inspect_node = function (node_data, node_fullpath) {
                                tt.explore(node_fullpath);
                            };
                            ie.start();

                            // load data first time
                            ie.on_update(null, ie.get_node_children());


                            // get global
                            _cd.tt = tt, _cd.at = at, _cd.ie = ie;
                            // current selected node
                            _cd.__defineGetter__('curr', function () {
                                return ie.get_selected()
                            });
                        })(this);
                    })();
                };

                ie.start();
                window.ie = ie;

                window.onbeforeunload = function () {
                    at.clear();
                    tt.clear();
                };

                //tt.update(ie.get_hierarchy());

            })();
        })(window);
    })();

};

module.exports = DebugGuiUtil;