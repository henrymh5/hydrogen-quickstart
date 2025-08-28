import { useState } from "react"

export function ReviewCount(){
    const [reviewCount, setReviewCount] = useState(4.7);
    
    fetch('https://qiblanco-only-rating-serpapi.vercel.app/api/getLatestRun')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      console.log("Fetching review data...");
      return response.json();
    })
    .then(data => {
      setReviewCount(data.totalScore !== undefined ? data.totalScore : 4.7);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setReviewCount(4.7);
    });

    return (
        <div className="ReviewCount">
            {reviewCount} ★★★★★
        </div>
    )
}