
interface IAi {
	readonly data: {
		readonly [attr: string]: unknown;
	};
	fire(action: string, ...args: unknown[]): Promise<unknown>;
	emit(event: string, ...args: unknown[]): Promise<unknown>;
}

interface IAiWeappAppData {
	readonly [attr: string]: unknown;
	readonly app: wx.App;
	inner_audio_context?: wx.InnerAudioContext;
	background_audio_manager?: wx.BackgroundAudioManager;
	record_manager?: wx.RecorderManager;
	video_context?: wx.VideoContext;
	camera_context?: wx.CameraContext;
}

export default interface IAiWeappApp extends IAi {
	readonly data: IAiWeappAppData;
	// eslint-disable-next-line semi
}
