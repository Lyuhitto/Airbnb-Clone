import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as Globe } from "./common/globe.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="features">
          <section className="feature">
            <h3>에어앤비지원</h3>
            <ul>
              <li>
                <Link to="/">도움말 센터</Link>
              </li>
              <li>
                <Link to="/">안전 정보</Link>
              </li>
              <li>
                <Link to="/">예약 취소 옵션</Link>
              </li>
              <li>
                <Link to="/">에어비앤비의 코로나 19 대응 방안</Link>
              </li>
              <li>
                <Link to="/">장애인 지원</Link>
              </li>
              <li>
                <Link to="/">이웃 민원 신고</Link>
              </li>
            </ul>
          </section>
          <section className="feature">
            <h3>커뮤니티</h3>
            <ul>
              <li>
                <Link to="/">Airbnb.org:재난 구호 숙소</Link>
              </li>
              <li>
                <Link to="/">아프간 난민 지원</Link>
              </li>
              <li>
                <Link to="/">차별 철폐를 위한 노력</Link>
              </li>
            </ul>
          </section>
          <section className="feature">
            <h3>호스팅</h3>
            <ul>
              <li>
                <Link to="/">호스팅 시작하기</Link>
              </li>
              <li>
                <Link to="/">호스트를 위한 에어커버</Link>
              </li>
              <li>
                <Link to="/">호스팅 자료 둘러보기</Link>
              </li>
              <li>
                <Link to="/">커뮤니티 포럼 방문하기</Link>
              </li>
              <li>
                <Link to="/">책임감 있는 호스팅</Link>
              </li>
            </ul>
          </section>
          <section className="feature">
            <h3>소개</h3>
            <ul>
              <li>
                <Link to="/">뉴스룸</Link>
              </li>
              <li>
                <Link to="/">새로운 기능에 대해 알아보기</Link>
              </li>
              <li>
                <Link to="/">에어비앤비 공동창업자의 메시지</Link>
              </li>
              <li>
                <Link to="/">채용정보</Link>
              </li>
              <li>
                <Link to="/">투자자 정보</Link>
              </li>
            </ul>
          </section>
        </div>
        <section className="others">
          <div className="other other-left">
            <div>© 2022 Airbnb, Inc.</div>
            <div>
              <span className="dot">·</span>
              <a>개인정보 처리방침</a>
              <span className="dot">·</span>
              <a>이용약관</a>
              <span className="dot">·</span>
              <a>사이트맵</a>
              <span className="dot">·</span>
              <a>한국의 변경된 환불 정책</a>
              <span className="dot">·</span>
              <a>회사 세부정보</a>
            </div>
          </div>
          <div className="other other-right">
            <div className="btns">
              <span className="btn-span-container">
                <button type="button" className="footer-btn">
                  <div className="btn-svg">
                    <Globe fill="#484848" width="16" height="16" />
                  </div>
                  <div>
                    <span>한국어</span>
                  </div>
                </button>
              </span>
              <span className="btn-span-container">
                <button type="button" className="footer-btn">
                  <div>
                    <i className="btn-svg fa-solid fa-won-sign" />
                  </div>
                  <div>
                    <span>KRW</span>
                  </div>
                </button>
              </span>
            </div>
            <div>
              <ul className="sns-list">
                <li className="sns-item">
                  <a target="_blank" href="">
                    <i
                      aria-hidden="false"
                      aria-label="페이스북으로 이동하기"
                      className="fa-brands fa-facebook-f"
                    ></i>
                  </a>
                </li>
                <li className="sns-item">
                  <a target="_blank" href="">
                    <i
                      aria-hidden="false"
                      aria-label="트위터로 이동하기"
                      className="fa-brands fa-twitter"
                    ></i>
                  </a>
                </li>
                <li className="sns-item">
                  <a target="_blank" href="">
                    <i
                      aria-hidden="false"
                      aria-label="인스타그램으로 이동하기"
                      className="fa-brands fa-instagram"
                    ></i>
                  </a>
                </li>
                <li className="sns-item">
                  <a>
                    <img
                      aria-hidden="false"
                      aria-label="네이버 블로그로 이동하기"
                      alt="blog"
                      src="img/blog.png"
                    ></img>
                  </a>
                </li>
                <li className="sns-item">
                  <a>
                    <img
                      aria-hidden="false"
                      aria-label="네이버 포스트로 이동하기"
                      alt="post"
                      src="img/post.png"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
