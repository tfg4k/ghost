<div class="inline-post row-fluid">
	<div class="span9">
		<div class="media">
			<a class="pull-left" href="{{ $post->edit_url }}">
				<span class="feature-img" style="background:url({{ 'http://placehold.it/64x64' }})"></span>
			</a>
			<div class="media-body">
				<h4 class="media-heading">{{ $post->title }}</h4>
				<p class="muted">{{ $post->tag_titles }}</p>
			</div>
		</div><!-- .media -->
	</div><!-- .post .span9 -->
	<div class="span3 stats">
		<p class="muted">{{ $post->date }}</p>
		<h2 class="muted">1,932</h2>
	</div>
</div><!-- .row-fluid -->
