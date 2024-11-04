import React from 'react';
import PropTypes from 'prop-types';

function Step({ title, description }: { title: string; description: string }) {
    return (
        <li className="relative flex items-start space-x-4 text-white">
            <span className="absolute -left-3 top-1 rounded-full bg-white h-5 w-5" aria-hidden="true" />
            <div className="grid grid-cols-3">
                <h1 className="text-lg font-semibold col-span-1">{title}</h1>
                <p className="col-span-2">{description}</p>
            </div>
        </li>
    );
}

Step.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

interface Step {
    title: string;
    description: string;
}

function StepProgress({ steps }: { steps: Step[] }) {
    return (
        <div className="max-w-screen-2xl mx-auto p-6 relative">
            <div className="relative">
                <div className="absolute -left-1 top-1 h-full w-1 bg-gray-200"></div>
                <ol className="relative z-10 flex flex-col space-y-8 text-sm font-medium text-gray-500">
                    {steps.map((step, index) => (
                        <Step key={index} title={step.title} description={step.description} />
                    ))}
                </ol>
            </div>
        </div>
    );
}

StepProgress.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default StepProgress;
