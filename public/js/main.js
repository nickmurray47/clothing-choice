<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>CSE457 - Final Project</title>

	<!-- Load Google Font -->
	<link href='https://fonts.googleapis.com/css?family=Roboto:100,400,300,400italic,700' rel='stylesheet' type='text/css'>

	<!-- CSS libraries -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/fontawesome.min.css">

	<!-- Custom CSS code -->
	<link rel="stylesheet" href="css/style.css">
</head>
<body>

	<div class="container-fluid">

		<div class="row">
			<div class="col-md-12">
				<h1>US Presidential Elections from 1940 to 2016</h1>
				<p class="info">Name: Vihar Desu | E-Mail: vihar.desu@wustl.edu | UID: 443845</p>
				<div id="year-chart" class="view">

				</div>

				<!-- Visualization placeholders -->
				<div id="stacked-area-chart"></div>
				<div id="timeline"></div>
			
			</div>
		</div>

	</div>

	<!-- Load JS libraries -->
	<script src="js/jquery.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/d3.min.js"></script>

	<!-- Visualization objects -->
	<script src="js/stackedAreaChart.js"></script>
	<script src="js/timeline.js"></script>

	<!-- Load data, create visualizations -->
	<script src="js/main.js"></script>
</body>
</html>