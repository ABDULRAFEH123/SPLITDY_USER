export default function ratingBar({ rating }) {
  // Safely extract the numeric part of the rating (e.g., "4.7/5" -> 4.7)
  const numericRating = typeof rating === 'string' && rating.includes('/')
  ? parseFloat(rating.split('/')[0])
  : 0;


  // console.log(numericRating, "numeric rating...");
  const totalCircles = 5;
  const filledCircles = Math.floor(numericRating); // Full circles
  const hasHalfCircle = numericRating % 1 !== 0; // Check if there's a half circle

  return (
    <div className="flex flex-row gap-[2px]">
      {Array.from({ length: totalCircles }).map((_, index) => (
        <div
          key={index}
          className="relative w-[18px] h-[18px] bg-gray-300 rounded-full overflow-hidden"
        >
          {index < filledCircles ? (
            <div className="absolute top-0 left-0 bg-[#00951b] w-full h-full"></div>
          ) : index === filledCircles && hasHalfCircle ? (
            <div
              className="absolute top-0 left-0 bg-[#00951b]"
              style={{ width: '50%', height: '100%' }}
            ></div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
