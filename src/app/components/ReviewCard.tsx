import React from 'react';

interface ReviewCardProps {
    review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <div className="max-w-xs rounded-md overflow-hidden shadow-lg bg-white mb-4 mr-4">
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">{review}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
