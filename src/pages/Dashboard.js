import React from "react";
import styled from "styled-components";
import Look from "../components/Look";
import Navbar from "../components/Navbar";
import DashboardContent from "../components/DashboardContent";
// import { getFromLocal, setToLocal } from "../services";

const StyledNavbar = styled(Navbar)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
const CardContainerTitle = styled.h2`
  color: #673a94;
  margin-left: 21px;
`;
const CardContainer = styled.div`
  display: grid;
  padding-bottom: 77px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

const cardData = [
  {
    id: 1,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEvSURBVDjLY/j//z8DJZiBagZEtO8QAuKlQPwTiP/jwbuAWAWbARtXHrz1//efv//xgS0n74MMuQ3EbHADgBweIP7z99+//x++/fv/8tO//88+/vv/5P2//w/f/ft/782//7df/f1/5xXE8OoFx0GGmCEbIJcz9QBY8gVQ47MP//4/Bmp+8Pbf/7tQzddf/P1/9RnEgM5VZ0EGeGM14ClQ86N3UM2v//2/9RKi+QpQ88UnuA2AewHk/PtAW++8/vv/JlDzted//18Gar7wBGTAH7ABtYtOgAywxBqIIEOQAcg1Fx7/BRuMFoicuKLxDyzK5u64Cjfo/ecfYD5Q/DLWaMSGgQrvPH/3FabxOxDXEp0SgYp7Z267AtL4BYgLSUrKQA1KQHwPiFPolxcGzAAA94sPIr7iagsAAAAASUVORK5CYII=",
    title: "Velké Opatovice"
  },
  {
    id: 2,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGrSURBVDjLvZPZLkNhFIV75zjvYm7VGFNCqoZUJ+roKUUpjRuqp61Wq0NKDMelGGqOxBSUIBKXWtWGZxAvobr8lWjChRgSF//dv9be+9trCwAI/vIE/26gXmviW5bqnb8yUK028qZjPfoPWEj4Ku5HBspgAz941IXZeze8N1bottSo8BTZviVWrEh546EO03EXpuJOdG63otJbjBKHkEp/Ml6yNYYzpuezWL4s5VMtT8acCMQcb5XL3eJE8VgBlR7BeMGW9Z4yT9y1CeyucuhdTGDxfftaBO7G4L+zg91UocxVmCiy51NpiP3n2treUPujL8xhOjYOzZYsQWANyRYlU4Y9Br6oHd5bDh0bCpSOixJiWx71YY09J5pM/WEbzFcDmHvwwBu2wnikg+lEj4mwBe5bC5h1OUqcwpdC60dxegRmR06TyjCF9G9z+qM2uCJmuMJmaNZaUrCSIi6X+jJIBBYtW5Cge7cd7sgoHDfDaAvKQGAlRZYc6ltJlMxX03UzlaRlBdQrzSCwksLRbOpHUSb7pcsnxCCwngvM2Rm/ugUCi84fycr4l2t8Bb6iqTxSCgNIAAAAAElFTkSuQmCC",
    title: "Jönköping"
  },
  {
    id: 3,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKoSURBVDjLpVM9TFNRFP7ubWvb1x+QQAtRIFaRmEakaYiGiJaAurioiYsxXXVxMHESB40TJI5OOihxq0sZTDBq6kANikAJNLSBAokQ29q/1x/69673PoSoMS6c5Oa8c979zv2+k3MIYwz7MYp9mvb3IBKJ9HB3T7BSFAXcW8Q3P/KvWOTHXC5XaBdDRDIajZ7jflyn03VYrVYQQnZ+cr9bTJjwyWQSxWJxg+dv9vX1fST81SEevLXZbKRWlLE++wlyfBO5+BZq5ZIK1BkkWGxtsNoPoePUaTCdHqurqxzGLpDl5eVZDu41m8148+QBVoLv/qv5aP8QBm/fR6lUEsznNF6vd2xtbU3vcDhw7IwHBTmrXqxXymC1GpdB0XnSDvfFw7C0n0XXwGUYG5pUOYlEQtJyBrnh4WFLuVwG7wEGvHeg0WjUIoVCAay+jVx4FJbWfjQVMjB1diEej6t3uIQkTafTU3a7HQaDQaUVi8WQSqWQzWZR4wwK3yZhanbD2uZCfuMDVhYDKrharQoWE9Tn8z3f1ScKCGr5fF59XU6uIL8+CUtzI+o5P2zOG6CJ99BpqcqCMxihCwsLOQEWIJE0mUzQ6/WglKC6NYmW7ivA9ldMv3wFc2MJJL2E2o95wS7l8XjyVJZlRXRTkiQIKep4Uop6JowDrAzLwSKUcgxgCur5zzjiuYvU/DhQyYyqd7mWkNPpvOX3+8O8H8hkMqCEoRD1obGjF0oxxLEluK91Q6ls8l5F0OI4D33osX5vEsnO6EmBQOCFVqu92lRbIhKR0XrcyF+d5lormHkd5kVOgGgaAOMlfHk2EmeKMkj+3sZgMNhO5x5u9Fx/Cg1d47OQ5ln2x/5pjN34vjiHyMQjH/nXOk+NuZOsrkhM4YsklmjvsD2PneWa+QnIJn6IP3aTNQAAAABJRU5ErkJggg==",
    title: "Icheon-si"
  },
  {
    id: 4,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJzSURBVDjLpZNLbxJRFMf7AfwEfA5YunTDTnwk3RlfMWFj4qKpKyfV2EVjhMwAUUyb1gYqCdWgQmqkRToFaRoLBcoUEGiB8hoQpgzPcpxzgREfO2/y39yc/++87p0CgKlJXTKCQpJKklrS9Ejq0Z3iz/hJ4wVJyofrda1954Tx78fZg8ghHwpH+e29GPvGk2JmbFUtxmDsb4CR+aLVm6dCh0muUKmDIHahdz4gajQ7kCtWwbcX5hY3khTGjiFjgBLN4dh3odXuAR6x04eq0AVe0lm7T+4EsQPbgaBgdh4hREkA2BeWjZnHZsduCYo/OlCoDZWvtSFXbcuQjU0fd3+1gO0oEKCys8cMlo2nXO/A1SdeeBcoymbNnAfuGiOkGjyx1CnQNj+DXgSofd+OWOwZS0XTlcdeSR5Y9xchy7ckwBYBVBpdqDd7UKqJsLT2nkUvAqaDBxEeh4UBCMCMqOvzfmCcGdBQW3DHECbVnVRa0Omdw6pljUcvAeyHwgSAAdgrmq893SGZDa5juPzIDbeZISBTbklVdGFp+bUMUH/ZjbI1oQ0NsUcyELOUFStKFUUJ8JkAcLC4mXi2BrTZIregsrgTTCZXgcEASAYN5SbmZEEkQvNNOkza6/YHsPk1CpTpozxExQNrWev2Bji+3pI3gcbEaRPi+aa8TjQnpOz6FyvcLVN8uMbxQ6LfhijHJ69QqJ6RSmpnPVJNuiSS9aE5nq2CzmwVZmnnr4c0+ZQXLAFqxebg/MEEZAp1MhPsOZrmweUNwQK9yM3oP/z9lCc/071Xae3cSxfzzLjM0gYT/1zP8PM6MzurszM3mNi/P9P/fOefb4UIeuRftTUAAAAASUVORK5CYII=",
    title: "Shinkafe"
  },
  {
    id: 5,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHMSURBVDjLlZLBSyJhGMa/UxTUIWJ0ZVmlwxLLEiEhurCoKeqCOtZN7J4ZRZdd9rSG6NFbSOegDp5aqWWI3UGm6KBUxsq2LLj+CzV9jDOH8NlvJtqLjuXhBy/z8Xvel4chAMhTKGfOMeVsbqXf2wBp3s5Yf5hno8rp24YxS9PTVHq18mTAgzj3k4mCIs0cqZeLUCTHJ1q13VKRSz0v4PRNVr1KQfu9Aa31BZ2LKKg42aHfJ8ZNA9i5L9hWUZFeQ73kof3N42SPR6OyjFZ1FZ36AuQfo5CPyc7gDiRHttNYwsl+Apqmodvt4uJrCur1GmSB/GI4TAOo9JKjVasQi8VQr9ehqiqazSaqu1Fofz5C/kYow9M3gJVkp+JUJZFIIJ1Oo1gsolwu42hngcmfdfmecS4fki3TC3ieN2SPx4NAIIB4PA7lPIo70YY7YQJyhdhNS3yU3W43/H4/LBaLvnWbbbxnvGNyQz4gmb4ByWQShULBkH0+HziOg/6die+ZKOjzzQEZYXzoCYhEIsjn8z3yI0wKmf7KwWAQuVwOLpcLXq+3Rx4EyWQyaLfbcDqdCIVCQ8n/A2q1GkqlklHYMLIREA6HN/WzrVbr0LLOP1AMs7UPAa92AAAAAElFTkSuQmCC",
    title: "Kalemie"
  },
  {
    id: 6,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEXSURBVDjLY/j//z8DJZiBLgZkz37Ynjrz4ReyDEideb89afrDf5ET7v4n2YCEqXf7qpY9/T9r76v/Xu03STMgasLteaVLHv+fufvl/6k7X/y3qrlCvAHBvTeXFC54ANbctv7p/95Nz/5rFZ0nzoCAzpuPsuc++D91x4v/jasf/y9aeP9/89rH/6VTTxJngGPDtc3xU+/879789H/5kgf/02fd+V+17OF/yZhjxBmgVXCaRT3v7BqP1mv/a1Y+/J824/b/woX3/osHHSAtECVjjqy0Lb/wP2/+3f+Zs+/8F3XfS3o0inntXWSeffJ/0tRb/0Ucdv4nKyEJW25ZYBh/5L+w5fb/ZCdlQYMNs4WMt/wfuMyEDwMA0Irn/pDRT58AAAAASUVORK5CYII=",
    title: "Huangtian"
  },
  {
    id: 7,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGGSURBVDjLxZO/alRBFMZ/c6MmomKhBLv4AIJiYekjCFopKSzyCnkGW99BbMTOQhsrBcFKsLCJhRYBNYYsWXNn5s6Z81nMGu+626XwFDOHge/PmfkmSOIk1XHCOvWn0ZdXsulPpAFZQbUgG5BlVDOURLWELEJJXLz3JMwTVOP0tfsLChIEmC2A4OD5g0UHebLLWQl5bAcBJAcC4i9D6FZRiUtGMMOHb9j0PXhGGtruA3hCnpBHzly+i5d+CUHNgCFPoDIDjcEJeQ8yNCxxYL/2m+U55Yh7mpFE8NhE7GiRwGsi7bzF8meoA8io6ZC1jfWm7AnVCPLld1DjPna4y/kbm4Djw1emH56h2oN6VFNzIKOOCI6DFCTKj48cvN6m9jtQC64yAjcXrjrnoBu/94VbDymTPSZvHs/A6RgsT0gZqC1M/46AJcJKx7mbW8RPL5m+e8HKpeusXbmNI1AFDHBkmZHzFpO9p3fkJSNLqEQsfgc6uhCQJRgy7qlF2ypXHynMEfy33/gbubc6XKsT2+MAAAAASUVORK5CYII=",
    title: "Nongoma"
  },
  {
    id: 8,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI7SURBVDjLpVPPaxNBGH2bbGq0pgYTsE0a05pWg0Wov9BLDlaloCfFQ/BQ8FQUvHgKCNKTV/Gi+B9UL6KgQiWNxUTwZCzBSFKjwTQ1TWxpkv2R3ZldZzaagL20dODxvpnded/3zZsRTNPEToYNOxzivyCXy03ruv6AocWGrKpqQ1GUKkNaluVVxhuM8wxvY7EY2STAfnjINoIhFolEnmy7gmaz6WBZ3zChp9tpQVgokJ+MB6V8AkwA7qOToNQAsUChEwqiU2iMdZ3PicVaOy5xAfOA2Ogocle4MQaHYVpzypjHfI0ahhUzfSxk17oujPhcKK1KGPX3oVhpIBzoQ6Fcx9iQG/nSBsZH9iNbXMfpI15rjVeoaQRCYkljFTRRqkqWMv/AMxKepdOK2eHxkAcnDnsw/2kF8cUqbIS0S5o4PoALJ32sVwOXzwbQ0iiuRoagagaunw+h7/Msjj2/hvrtQaSmQqCJR9Z5CK8zkulzKvi+UgchPHM3K69AZ+zJPMPoehzhc1ewa3gMyuIcviTjeN9zEcKLdN30O1Wrx9n5AqIThzZZ9eFGGKeiN7H72ztgOQnsc6MmBpFMLkHUdALiMPDxaw3BfhdSmYp1woZhtJm54CgX4ewfBi7d6V6gmQG4mr8htjRSy0qm9z9/2/HfO3Bmrxdy+hV6X95CS/kFmQk06nZIezyGsJXXmIz6Z3pcvXcDHiKKthIaVYIfFTvVVfOesNXnnIoejElr5Wk7FYLUbi6zXY8n58j9P8T+gmJP+OvyAAAAAElFTkSuQmCC",
    title: "Charlotte"
  },
  {
    id: 9,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI6SURBVDjLpVNNaFNBEP5e8hJiSjVVTComsdYUMbRVUhSVgFawgqgo6FFBaMEeehQ8WAQFj57FCh4KVixCERXipQhCa6kaEz00uSQIghibNn++t7tv4+6mTU2bi3Rh+WZn95v5ZndWq1ar2MzQ1zuGHs85xwaPEIF9qz5uWbBW5vjIiY/Sd+n+qz5GKbT1CgRxnwCPmPPBHW5wLolcBTEJxfT7+RtccI5Fwg9RtdYU3Jwddgp4DVwfrXJrBpoNt87trwfmnCP2KYvU9z13ZObTB/04e7izoYRvFrP8qwspV45kMqlsxhj6u7uxd7u+q7V1KwK+NsTj8VoJIvsXn7O9Vx7K5rMgJkVpqQzTICjmSwrl+unQJDKZDMLhMLxerwqqC/IHr8PX29HSCcYZ/C1BhRVigHKKP1SgxTAx8QwyWaFQgGmaSl0qlYIuZFOmMRCLKCITh6lA0zIFkcJkZs1HmCL9e+mhUAj6g+ij6HDs2udypXLIZd+C7M8sfuVzDdJlSYyyBrK00+n02jNefX55gRgkyAo9I05ycmx5aRlTty/AMAxVKyEEuVwOiUQCkUgEgUBA+eqvIMg9IuNLe/H4V2arEeRwuVz1jG63Gx6PR01d1+FwODY20vm7U0ftNm1m8fciKCWidrqCNfti9IAKNv5mVvjpxlbWgB9yo2P3zqa9/+LdnLqPMwP9zf+ClC4zZgrFpgrafV7VWLG300qB9j+/sevKvSflcumUbOVtnraF9OTogLbZ7/wXRdt3lZxkvhIAAAAASUVORK5CYII=",
    title: "Bujanovac"
  },
  {
    id: 10,
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALhSURBVDjLdVNLSBtRFL1vZpKYTCQdUZNUMGahJbTF0roxG7NoqXQZKG6EQrV0Z6kLF0pDDSguxO7aRejKLLW7brRgiSWKVcFgq2JDSUJsYmKi0fw0M+m9Aw0KNnBnwnv3nHPPeW9YtVqF637r6+sDlUqlX5ZluLi48Ltcro/X9bHLBKFQyIGAONYZghOtra1NtL+6upoyGAwWXDMiWYvb7d75h+EugX0I3MamPWwyY8nlchmotFqtTGvn5+d7WNt+v993hWBra2tMFMVBm83GSZJESvtY5lKpBMViERRFIcJ93LegFa6xsXFwenp6jLACPZCVSyQS5IWRotlsFjmOI++qisPhoHWR9iKRCAQCgSqSc1cyCAaDEyaTaZRUKbiTkxOIRqOg0WjAbreDIAgqYaFQILuTIyMj6gQMA9rAcZuxRIvFIuXzechms0S4gv89Op0O0Ja3q6urm8TQKiwtLWWRLI+YQwEf99rb27mjoyNVlRSTySSgBc/U1NQXUvH5fLS2iAJAfU6nU0Kb0szMzE2OxiJvSKSOTipGoxHQTu14qYf2MUy1BzMDmpTssNnZ2Y10Ot2MY4qdnZ0SpY7HRj5XEOghMJb3AYt3K2ufoJKIwZm2TtnTtp2uaTrCtRDn5+cnrFbrKClRYHQKsVhMVWxJboIpHoQOlxt09ttQDC3Az+VFObu781olmJube4Mq4zgBOz4+ViegohOhsfPv+sD57BXow18B4t8ATDcgLdhgc2H5t3oPMAMFA2J6vZ4uFYTD4TxOYOjp6WFEAOkDqLPYAZ4M13IR3lqBV1hbzYLX6/VlMpnnGM5hQ0PD/fr6+s3e3l66lZAcfyQ/fNrHi9HPUC4moID9pzkedsMQr30LHo/nBb7u4Oi3MIMkKvO5XA5SqRREpLvlHyuByp+SHnK8BrIZBr/iTEbp9+x/n/PQ0NAAgvvpiBlj/mHN96Z85uAlLzObzFfjiPrweKEy+RdV4845vRqFoQAAAABJRU5ErkJggg==",
    title: "Kopang Satu"
  }
];
function Dashboard({ looks }) {
  // const [looks, setLooks] = React.useState(getFromLocal("looks") || []);

  // const newLooks = looks.slice();
  // newLooks = { ...looks };
  // setLooks(newLooks);

  function renderLook(look) {
    return <Look img={look.img} title={look.title} />;
  }

  return (
    <>
      <DashboardContent />
      <CardContainerTitle>Your closet</CardContainerTitle>
      <CardContainer>{looks.map(look => renderLook(look))} </CardContainer>

      <StyledNavbar />
    </>
  );
}
export default Dashboard;
