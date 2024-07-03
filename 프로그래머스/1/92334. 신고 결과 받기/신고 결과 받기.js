function solution(id_list, report, k) {
  let uniqueReports = [...new Set(report)];
  let userReports = {};
  let reportCount = {};

  id_list.forEach((user) => {
    userReports[user] = [];
    reportCount[user] = 0;
  });

  uniqueReports.forEach((report) => {
    let [reporter, reported] = report.split(" ");
    if (!userReports[reporter].includes(reported)) {
      userReports[reporter].push(reported);
      reportCount[reported] += 1;
    }
  });
  let result = new Array(id_list.length).fill(0);

  id_list.forEach((user, index) => {
    userReports[user].forEach((reportedUser) => {
      if (reportCount[reportedUser] >= k) {
        result[index] += 1;
      }
    });
  });

  return result;
}