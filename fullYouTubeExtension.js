Full YouTube Extension JavaScript

class FullYouTubeExtension {
    getInfo() {
        return {
            id: 'fullYouTube',
            name: 'Full YouTube',
            blocks: [
                {
                    opcode: 'openYouTube',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'open YouTube'
                }
            ]
        };
    }

    openYouTube() {
        const iframe = document.createElement('iframe');
        iframe.width = "100%";
        iframe.height = "600px"; // Adjust height as needed
        iframe.src = "https://www.youtube.com/";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        // Clear previous iframes to avoid multiple instances
        const existingIframe = document.getElementById('youtube-iframe');
        if (existingIframe) {
            existingIframe.remove();
        }

        iframe.id = 'youtube-iframe';
        document.body.appendChild(iframe);
    }
}

Scratch.extensions.register(new FullYouTubeExtension());

