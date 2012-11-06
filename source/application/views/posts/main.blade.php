@section('post')
<div class="listed-post row-fluid">
	<div class="span9">
		<div class="media">
			<a class="pull-left" href="#">
				<img class="media-object img-circle" src="http://placehold.it/64x64" width="64" height="64">
			</a>
			<div class="media-body">
				<h4 class="media-heading">Donec Congue Lacinia Dui, A Porttitor Lectus Condimentum</h4>
				<p class="muted">News, Tech</p>
			</div>
		</div><!-- .media -->
	</div><!-- .post .span9 -->
	<div class="span3 stats">
		<p>12/12/1234</p>
		<h2>1,932</h2>
	</div>
</div><!-- .row-fluid -->
@endsection

<div class="row-fluid">
	<div class="span6">
		<div class="block">
			<div class="posts">
				@yield('post')
				@yield('post')
				@yield('post')
			</div><!-- .posts -->
		</div>
	</div>
	<div class="span6">
		<div class="block">...</div>
	</div>
</div>