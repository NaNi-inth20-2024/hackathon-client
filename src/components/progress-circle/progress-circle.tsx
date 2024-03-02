import { FC } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import styles from './styles.module.scss';

type Props = {
    value: number;
    progressText: string;
    progressDescription?: string;
};

const ProgressCircle: FC<Props> = ({
    value,
    progressText,
    progressDescription,
}) => {
    return (
        <div className={styles.progressCircle}>
            <CircularProgressbar
                value={value}
                text={progressText}
                styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `#3bfdb0`,
                    textColor: '#3bfdb0',
                    trailColor: 'black',
                    backgroundColor: '#3e98c7',
                })}
            />
            {progressDescription && (
                <p className={styles.progressCircleDescription}>
                    {progressDescription}
                </p>
            )}
        </div>
    );
};

export { ProgressCircle };
