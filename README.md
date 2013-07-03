# mnCountUpWithAcceleration jQuery extension

## `.mnCountUpWithAcceleration( value [, options] )`
### `@param Int value`
### `@param Object options`
### Returns: `jQuery`
The final `text()` value for the handler.  If `value` is greater than the `.text()` of the handler to start, value will increment.  If `value` is less than the `.text()` of the handler to start, value will decrement.
As `value` gets closer to the final value, the speed will throttle back and at the end a nice visual highlight effect will happen to the parent object.

Available `options` are: 
`@param String append`: string to append to final value.
`@param Bool highlightOnComplete`: If true, container element will flash when final value is reached.

## TODO
- Smoother deceleration at the end of the animation.
