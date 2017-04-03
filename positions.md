Static: Default position and element will render as it should be rendered

Relative: Relative to itself

It does not changes anything except:

    1. Enales top, right, left, bottom. Other elements do not change
    2. Enables z-index on element
    3. Limits the scope of absolute child elements

So, we should apply relative, when we do not want to affect anything but a particular element by top, right, left, bottom

Absolute: Element is coming out of the flow

    1. Enables top, right, left, bottom
    2. Relative to parent having position relative or absolute


Fixed: relative to the viewport