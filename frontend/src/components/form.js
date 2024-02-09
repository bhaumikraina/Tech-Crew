import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ onAddReview }) => {
  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [sentiment, setSentiment] = useState('positive');
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/review', { email, text, user, sentiment, rating });
      onAddReview(response.data);
      setText('');
      setUser('');
      setEmail('');
      setSentiment('positive');
      setRating(1);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div>
      <form className="my-8" onSubmit={handleSubmit}>
        <table className="min-w-full table-auto">
          <tbody>
            <tr>
              <td className="py-2">
                <label htmlFor="reviewText" className="block mb-2 font-bold">
                  Enter Text:
                </label>
              </td>
              <td className="py-2">
                <textarea
                  id="reviewText"
                  className="border p-2 w-full"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <label htmlFor="email" className="block mb-2 font-bold">
                  Enter Email:
                </label>
              </td>
              <td className="py-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <label htmlFor="userName" className="block mb-2 font-bold">
                  Enter Username:
                </label>
              </td>
              <td className="py-2">
                <input
                  type="text"
                  id="userName"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <label htmlFor="sentiment" className="block mb-2 font-bold">
                  Sentiment:
                </label>
              </td>
              <td className="py-2">
                <select
                  id="sentiment"
                  value={sentiment}
                  onChange={(e) => setSentiment(e.target.value)}
                >
                  <option value="positive">Positive</option>
                  <option value="neutral">Neutral</option>
                  <option value="negative">Negative</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <label htmlFor="rating" className="block mb-2 font-bold">
                  Rating:
                </label>
              </td>
              <td className="py-2">
                <input
                  type="number"
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  min="1"
                  max="5"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button className="bg-blue-500 text-white p-2" type="submit">
          Add Review
        </button>
      </form>
      <section className="my-8">
        <h1 className="text-4xl mb-4 text-center">Reviews</h1>
      </section>
    </div>
  );
};

export default ReviewForm;
