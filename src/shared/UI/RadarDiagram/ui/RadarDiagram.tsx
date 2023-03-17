import { memo } from 'react';
import {
    Legend, PolarAngleAxis, PolarGrid,
    PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import classes from './RadarDiagram.module.scss';

export interface ColorInterface {
    fill?: string;
    stroke?: string;
}

interface RadarDiagramProps {
    className?: string;
    multiple?: boolean;
    width?: number | string;
    height?: number | string;
    data: any;
    names?: string | string[];
    onLabelClickHandler?: (e: any) => void
    colors?: ColorInterface;
}

export const RadarDiagram = memo((props: RadarDiagramProps) => {
    const {
        className,
        multiple = true,
        data,
        height = 300,
        width = '100%',
        names,
        colors,
        onLabelClickHandler,
    } = props;

    if (!multiple) {
        return (
            <ResponsiveContainer
                width={width}
                height={height}
            >
                <RadarChart
                    // outerRadius="80%"
                    data={data}
                    onClick={onLabelClickHandler}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis domain={[0, 10]} />
                    <Radar
                        className={classes.radar}
                        name={names?.[0]}
                        dataKey="A"
                        fillOpacity={0.5}
                    />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        );
    }

    return (
        <ResponsiveContainer
            width={width}
            height={height}
        >
            <RadarChart
                // outerRadius="80%"
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                    name={names?.[0]}
                    dataKey="A"
                    stroke="red"
                    fill="crimson"
                    fillOpacity={0.5}
                />
                <Radar
                    name={names?.[1]}
                    dataKey="B"
                    stroke="blue"
                    fill="lightblue"
                    fillOpacity={0.5}
                />
                <Legend />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>
    );
});
