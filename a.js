function goModule() {
  console.log("Hello, Module!");
}

// goModule(); 로 실행하는게 아님

// export default goModule; 과 같음
module.exports = goModule;
