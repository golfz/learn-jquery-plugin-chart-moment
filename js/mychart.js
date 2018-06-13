let chartList = []

let borderThemeCount = 0

$('#errorText').hide()

$('#btnSubmitNewChart').click(clickBtnAddNewChart)

function clickBtnAddNewChart() {
  console.log('add a new chart')

  let chartLabel = $('#txtChartLabel').val()

  if (chartLabel.trim() === '') {
    $('#errorText').show()
    return false
  }

  $('#txtChartLabel').val('')

  $('#chart-area').prepend(`
    <canvas class="chart-box col-md-4"></canvas>
  `)

  if (borderThemeCount % 4 == 0) {
    $('#chart-area .chart-box').eq(0).realtimeChart(500, {
      dataset: {
        label: chartLabel,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    });

  } else if (borderThemeCount % 4 == 1) {
    $('#chart-area .chart-box').eq(0).realtimeChart(1000, {
      dataset: {
        label: chartLabel,
        borderColor: 'rgb(23, 99, 132)',
        backgroundColor: 'rgba(23, 99, 132, 0.5)'
      }
    });

  } else if (borderThemeCount % 4 == 2) {
    $('#chart-area .chart-box').eq(0).realtimeChart(1500, {
      dataset: {
        label: chartLabel,
        borderColor: 'rgb(255, 199, 32)',
        backgroundColor: 'rgba(255, 199, 32, 0.5)'
      }
    });

  } else {
    $('#chart-area .chart-box').eq(0).realtimeChart(5000, {
      dataset: {
        label: chartLabel,
        borderColor: 'rgb(55, 199, 132)',
        backgroundColor: 'rgba(55, 199, 132, 0.5)'
      }
    });
  }

  borderThemeCount++

  chartList.unshift(chartLabel)
  prependDeleteBtn()

  $('#errorText').hide()
  $('#modalAddNewChart').modal('hide')

}

function prependDeleteBtn() {
  $('#wrap-delete-btn').html('')

  for (i in chartList) {
    let chartLabel = chartList[i]
    $('#wrap-delete-btn').prepend(`
      <p><button type="button" class="btn btn-warning btnDelete">${chartLabel}</button></p>
    `)
  }

  $('.btnDelete').click(function () {
    console.log('asdfasfd')
    let chartName = $(this).text()
    console.log(chartName)

    for (i = (chartList.length - 1); i >= 0; i--) {
      if (chartList[i] == chartName) {
        $('#chart-area canvas').eq(i).remove()
      }
    }

    chartList = chartList.filter(x => x != chartName)

    prependDeleteBtn()
  })

}
