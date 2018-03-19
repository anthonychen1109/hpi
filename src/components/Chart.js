import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={100} width={140} data={props.data}>
        <SparklinesLine style={{ stroke: "white", fill: "white", fillOpacity: ".5" }} color={props.color} />
      </Sparklines>
    </div>
  )
}
