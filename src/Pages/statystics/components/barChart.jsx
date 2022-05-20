
import { ResponsiveBar } from '@nivo/bar';

export default function BarChart (props){

    

    return(
    <ResponsiveBar
        data={props.data}
        keys={[
            'ModelA',
            'Need Follow-up',
            'Hang up Call',
            'Not Interested'
        ]}
        itemWidth='%'
        indexBy="month"
        margin={{ top: 0, right: 60, bottom: 175, left: 60 }}
        padding={0.3}
        /* colors={({ id, data }) => String(data[`${id}Color`])} */
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}s
        groupMode="grouped"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ModelA'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Need Follow-up'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'Hang up Call'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Not Interested'
                },
                id: 'lines'
            }          
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            marginBottom:'1vh',
            tickSize: 0,
            tickPadding: 15,
            tickRotation: -90,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom',
                direction: 'column',
                justify: false,
                translateX: -150,
                translateY: 100,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        /* barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}} */
    />
    )
}