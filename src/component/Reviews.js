import React, { useEffect, useState } from 'react'
import { useCreateReviewsMutation } from "../store/slices/reviews-slice";
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { BASE_URL } from '../constants';
import CommonRating from './Rating';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Reviews = ({ product }) => {
  const productId = product?._id;
  console.log(productId);
  const { userInfo } = useSelector(state => state.auth);
  let id = JSON.parse(localStorage.getItem("id") || null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const [createReviews] = useCreateReviewsMutation();
  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      await createReviews({ review, rating, product: productId, user: id }).unwrap();

      cogoToast.success('Review Submitted')
      setReview('');
      setRating(0);
      getReviews();

    } catch (err) {
      console.log(err?.data?.message || err?.message);

    }
  }
  const [reviews, setReviews] = useState([]);
  const getReviews = async () => {
    const { data } = await axios.get(BASE_URL + `/review?product=${productId}`)
    setReviews(data?.data)
    console.log(data?.data)

  }

  useEffect(() => {
    getReviews()
  }, [review, id])
  return (
    <div className='flex items-start flex-col p-2'>
      <h4 className='font-poppins text-[1rem] '>Customer Reviews</h4>
      {reviews && reviews?.length > 0 ? (reviews?.map((review) => (
        <div key={review?._id} style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <strong>{review.user.email}</strong>
          <CommonRating value={review.rating} />
          {/* <p>{review.createdAt.substring(0, 10)}</p> */}
          <p>{review.review}</p>
          <hr className='border border-gray-300' />
        </div>
      ))) : (<h4 className='text-[1rem] text-customOrange p-2'>No Reviews Yet</h4>)}
      <h4 className='font-poppins text-[1rem] '>Add Reviews</h4>
      {userInfo ? (
        <form onSubmit={submitHandler} class="form">
          <div class="form-group my-2" id="rating">
            <label for="rating">Rating</label>
            <CommonRating value={rating} onChange={(e) => setRating(e.target.value)} isReadOnly={false} />
          </div>
          <div class="form-group my-2" id="comment">
            <label for="comment">Comment</label>
            <textarea
              class="comment form-control"

              style={{ maxWidth: "100%", width: "30rem" }}
              id="comm"
              rows="3"
              required
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <button
            type='submit'
            className='px-4 py-2 bg-customOrange hover:bg-orange-300 text-white rounded-md'
          >
            Submit
          </button>
        </form>
      ) : (
        <h4>
          Please <Link to="/login"> sign in </Link> to write a review
        </h4>
      )}

    </div>
  )
}

export default Reviews