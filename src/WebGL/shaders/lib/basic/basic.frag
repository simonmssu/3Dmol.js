uniform mat4 viewMatrix;
uniform float opacity;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;
varying vec3 vColor;
varying vec4 mvPosition;

//DEFINEFRAGCOLOR
void main() {
    gl_FragColor = vec4( vColor, opacity );
    if(fogNear != fogFar) {
        float depth = -mvPosition.z;
        float fogFactor = smoothstep( fogNear, fogFar, depth );
        gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
    }
}