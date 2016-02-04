import './moviesbrowser.layout.tpl.html';

/**
 * @desc main layout for the app
 * @example <plspHeader></plspHeader>
 */
export class MoviesBrowserLayout implements ng.IDirective {
	public restrict = 'AE';
	public templateUrl = 'app/layout/moviesbrowser.layout.tpl.html';

	public static Factory() {
		var header = () => new MoviesBrowserLayout();
		return header;
	}
}

