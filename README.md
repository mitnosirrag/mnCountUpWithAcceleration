# mnCountUpWithAcceleration jQuery extension

## `.mnCountUpWithAcceleration( value [, append] )`
### `@param Int value`
### `@param String append`
### Returns: `jQuery`
The final `text()` value for the handler.  If `value` is greater than the `.text()` of the handler to start, value will increment.  If `value` is less than the `.text()` of the handler to start, value will decrement.
As `value` gets closer to the final value, the speed will throttle back and at the end a nice visual highlight effect will happen to the parent object.

If `append` is set, the final value will be followed by `append`.

## TODO
- Convert `append` to `object` that accepts multiple parameters.
- Smoother deceleration at the end of the animation.
