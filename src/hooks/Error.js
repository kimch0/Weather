export default function Error() {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <img src="./img/error.png" alt="..." width="125" className="" />
        <div className="fw-bold mt-5">
          <h3>Something went wrong.</h3>
          <ul style={{ listStyleType: "none" }} className='ps-0'>
            <li>
              <h4>You could be using an ad-block that blocked the requests</h4>
            </li>
            <li>
              <h4>
                Or my account could have run out of requests, this page is using
                a limited free API, please try it later...
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
