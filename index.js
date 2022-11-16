var t = $("#example").DataTable({
  paging: false,
  info: false,
  search: "sat",
});
$(".dataTables_filter input").addClass("search-query");

fetch("https://raw.githubusercontent.com/emreaykin/binancecoins/main/db.json")
  .then((response) => response.json())
  .then(function (data) {
    for (var k in data) {
      for (var x in data[k].networkList) {
        t.row
          .add([
            data[k].coin,
            data[k].name,
            data[k].networkList[x].network,
            data[k].depositAllEnable,
            data[k].trading,
            data[k].withdrawAllEnable,

          ])
          .draw(false);
      }
    }
  })
  .catch((error) => {});
