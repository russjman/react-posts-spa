import { put, takeLatest, call } from "redux-saga/effects";
import { searchPosts } from "../services/post.service";
import { getPostsSuccess, getPostsError } from "../actions/posts";

export function* getPosts() {
  try {
    const postData = yield call(searchPosts);
     put(getPostsSuccess(postData));
  } catch (error) {
     put(getPostsError(error.toString()));
  }
}

export function* watchGetPosts() {
  yield takeLatest('GET_POSTS', getPosts);
}
