import { useCallback } from "react"
import { Group } from "@visx/group";
import { scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { AreaClosed, Line } from "@visx/shape";
import { extent, bisector } from 'd3-array';
import { LinearGradient } from '@visx/gradient';
import { GridRows } from '@visx/grid';
import { useTooltip, TooltipWithBounds, defaultStyles, Tooltip } from '@visx/tooltip';
import { localPoint } from '@visx/event';


function Chart({ data, width, height }) {

    // tooltip parameters
    const { tooltipData, tooltipLeft = 0, tooltipTop = 0, showTooltip, hideTooltip } = useTooltip();

    // define margins from where to start drawing the chart
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };

    // defining inner measurements
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Defining selector functions
    const getRD = (d) => d.amount;
    const getDate = (d) => d.year;
    const bisectDate = bisector((d) => d.year).left;

    // Defining scales
    const timeScale = scaleLinear({
        range: [0, innerWidth],
        domain: extent(data, getDate),
        nice: true
    })

    const rdScale = scaleLinear({
        range: [innerHeight, 0],
        domain: extent(data, getRD),
        nice: true,
    });

    // defining tooltip styles
    const tooltipStyles = {
        ...defaultStyles,
        minWidth: 60,
        backgroundColor: 'rgba(0,0,0,0.9)',
        color: 'white',
    };

    const handleTooltip = useCallback((event) => {
        const { x } = localPoint(event) || { x: 0 };
        const x0 = timeScale.invert(x - margin.left); // get Date from the scale

        const index = bisectDate(data, x0, 1);
        const d0 = data[index - 1];
        const d1 = data[index];
        let d = d0;
        console.log(x0, d)

        if (d1 && getDate(d1)) {
            d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
        }
        showTooltip({
            tooltipData: d,
            tooltipLeft: x,
            tooltipTop: rdScale(getRD(d))
        })
    })
    return (
        <div style={{ position: 'relative' }}>
            <svg width={width} height={height} >
                <Group left={margin.left} top={margin.top}>
                    <GridRows scale={rdScale} width={innerWidth} height={innerHeight - margin.top} stroke='#EDF2F7' strokeOpacity={0.2} />
                    <LinearGradient id="area-gradient" from={'#43b284'} to={'#43b284'} toOpacity={0.1} />
                    <AxisLeft
                        tickTextFill={'#EDF2F7'}
                        stroke={'#EDF2F7'}
                        tickStroke={'#EDF2F7'}
                        scale={rdScale}
                        tickLabelProps={() => ({
                            fill: '#EDF2F7',
                            fontSize: 11,
                            textAnchor: 'end',
                        })} />
                    <text x="-125" y="20" transform="rotate(-90)" fontSize={12} fill='#EDF2F7'>
                        R&D Spend, RDDUSD
                    </text>
                    <AxisBottom
                        scale={timeScale}
                        stroke={'#fff'}
                        tickStroke={'#fff'}
                        tickTextFill={'#fff'}
                        top={innerHeight}
                        tickLabelProps={() => ({
                            fill: '#fff',
                            fontSize: 11,
                            textAnchor: 'middle',
                        })} />
                    <AreaClosed
                        data={data}
                        x={(d) => timeScale(getDate(d)) ?? 0}
                        y={(d) => rdScale(getRD(d)) ?? 0}
                        yScale={rdScale}
                        strokeWidth={1}
                        stroke="#43b284"
                        fill="url(#area-gradient)"
                        onMouseMove={handleTooltip}
                        onMouseLeave={() => hideTooltip()}
                    />

                    {tooltipData && (
                        <g>
                            <Line
                                from={{ x: tooltipLeft - margin.left, y: 0 }}
                                to={{ x: tooltipLeft - margin.left, y: innerHeight }}
                                stroke={'#43b284'}
                                strokeWidth={3}
                                pointerEvents="none"
                                strokeDasharray="5,2"
                            />
                            <Line
                                from={{ x: 0, y: tooltipTop }}
                                to={{ x: innerWidth, y: tooltipTop }}
                                stroke={'#43b284'}
                                strokeWidth={3}
                                pointerEvents="none"
                                strokeDasharray="5,2"
                            />
                            <circle
                                cx={tooltipLeft - margin.left}
                                cy={tooltipTop + 1}
                                r={4}
                                fill={'#43b284'}
                                stroke="white"
                                strokeWidth={2}
                                pointerEvents="none"
                            />
                        </g>
                    )}
                </Group>
            </svg>
            {/* render a tooltip */}
            {tooltipData ? (
                <TooltipWithBounds key={Math.random()}
                    top={tooltipTop}
                    left={tooltipLeft}
                    style={tooltipStyles}
                > <p>{`Spend: $${getRD(tooltipData)}`}</p>
                    <p>{`Year: ${getDate(tooltipData)}`}</p>
                </TooltipWithBounds>
            ) : null}
        </div>
    )
}

export default Chart