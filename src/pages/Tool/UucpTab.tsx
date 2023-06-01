import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import { selectorCurrentUucp, selectorUucp } from "../../redux/mainFuture/selector";
import { IUseCasePointsUUCP } from "../../redux/mainFuture/model/UseCasePointsUUCP";
import Title from "../../components/Title";
import { _useCasePointCurrentUucpSuccess, _useCasePointUucpFectch } from "../../redux/mainFuture";
import { Toast } from "../../utils/Toast";
import { Link } from "react-router-dom";

const Uucp: React.FC = (props) => {
  const useUucp = useAppSelector(selectorUucp);
  const dispach =  useAppDispatch();
  const Curnumber =  useAppSelector(selectorCurrentUucp);
 
  const [Uucp, setUucp] = useState<IUseCasePointsUUCP>({
    average: 0,
    complex: 0,
    simple: 0,
    uucp: 0,
  });

  const handleUucp = (e:any)=>{
    dispach(_useCasePointUucpFectch({
      average:Uucp.average,
      simple:Uucp.simple,
      complex:Uucp.complex,
    }))

    dispach(_useCasePointCurrentUucpSuccess({
      uucp:{
        average:Uucp.average,
        simple:Uucp.simple,
        complex:Uucp.complex,
      } 
    }));
    Toast.ToastSuccess(
      {
        Success:"Uucw caculate complete",
      }
    )
    
  }

  useEffect(()=>{
    if(Curnumber.complex !=0 || Curnumber.average!=0 || Curnumber.simple !=0){
      setUucp({
        average:Curnumber.average,
        simple:Curnumber.simple,
        complex:Curnumber.complex,

      })
    }
  },[])

  
  return (
    <div className="uucp">
      <div className="uucp__left">
        <div className="table">
          <div className="row row__header">
            <div className="row__item uucp__UseCaseClassification">
              Use Case Classification
            </div>
            <div className="row__item uucp__Weight">Weight</div>
            <div className="row__item uucp__x"></div>
            <div className="row__item uucp__numberCase">
              Number of Use Cases
            </div>
            <div className="row__item uucp__Result">Result</div>
          </div>
          <div className="row">
            <div className="row__item uucp__UseCaseClassification">Simple</div>
            <div className="row__item uucp__Weight">5</div>
            <div className="row__item uucp__x">x</div>
            <div className="row__item uucp__numberCase">{Uucp.simple}</div>
            <div className="row__item uucp__Result">{useUucp.simple
        }</div>
          </div>

          <div className="row ">
            <div className="row__item uucp__UseCaseClassification">Average</div>
            <div className="row__item uucp__Weight">10</div>
            <div className="row__item uucp__x">x</div>
            <div className="row__item uucp__numberCase">{Uucp.average}</div>
            <div className="row__item uucp__Result">{useUucp.average}</div>
          </div>

          <div className="row ">
            <div className="row__item uucp__UseCaseClassification">Complex</div>
            <div className="row__item uucp__Weight">15</div>
            <div className="row__item uucp__x">x</div>
            <div className="row__item uucp__numberCase">{Uucp.complex}</div>
            <div className="row__item uucp__Result">{useUucp.complex}</div>
          </div>
          <div className="row">
          <p >
            {`Total: ${useUucp.uucp}`}
          </p>
        </div>
        </div>
        
      </div>
      <div className="uucp__right">
        <div className="form">
          <Title
          title="UUCP"
          ></Title>
          <div className="form__body">
            <div className="group">
              <input
                type="text"
                placeholder="Simple"
                onChange={(e) =>
                  setUucp({
                    ...Uucp,
                    simple: +e.target.value,
                  })
                }
              />
              <p></p>
            </div>
            <div className="group">
              <input
                type="text"
                placeholder="average"
                onChange={(e) =>
                  setUucp({
                    ...Uucp,
                    average: +e.target.value,
                  })
                }
              />
              <p></p>
            </div>
            <div className="group">
              <input
                type="text"
                placeholder="complex"
                onChange={(e) =>
                  setUucp({
                    ...Uucp,
                    complex: +e.target.value,
                  })
                }
              />
              <p></p>
            </div>
            <button
                  className="button button--defause"
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => handleUucp(e)}
                >
                  Caculate
                </button>
          </div>
        </div>
        {
          useUucp.uucp !== 0 && <div className="form__nextPage">
          <Link to={"/Tool/Uaw"}>
          <span>Next Page</span>
          <i className='bx bx-right-arrow-alt'></i>
         
          </Link>
        </div> 
        }
        
      </div>
    </div>
  );
};

Uucp.propTypes = {};

export default Uucp;
