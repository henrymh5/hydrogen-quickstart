import { useState } from "react"

export function ReviewCount(){
    const [reviewCount, setReviewCount] = useState(null);
    
    fetch('https://qiblanco-only-rating-serpapi.vercel.app/api/getLatestRun')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      console.log("Fetching review data...");
      return response.json();
    })
    .then(data => {
      setReviewCount(data.totalScore !== undefined ? data.totalScore : reviewCount);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setReviewCount(reviewCount);
    });

    return (
        <div className="ReviewCount">
            {reviewCount} ★★★★★
        </div>
    )
}