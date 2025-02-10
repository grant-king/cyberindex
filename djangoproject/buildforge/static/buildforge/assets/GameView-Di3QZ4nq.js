import{d as Kn,r as dt,o as $n,a as mr,w as Yr,c as Zn,b as Qn,e as qr,f as An}from"./index-BEuX0Jok.js";import{c as Kr,S as $r,N as Rt,V as lt,C as Ke,F as _r,M as Wt,a as Ge,R as Zr,W as Xt,b as tt,L as Zt,H as gn,U as yt,D as Tt,B as _t,d as en,t as Qr,e as Jr,f as En,p as jr,w as Ht,g as ea,E as ta,h as ft,P as Jt,A as na,i as Rn,j as xt,k as mn,l as Jn,m as tn,n as nn,o as vr,q as ia,r as Vt,s as _n,u as ra,v as aa,x as $t,O as oa,y as sa,z as ca,G as la,I as fa,J as ua,K as da,Q as pa,T as ha,X as ma,Y as _a,Z as va,_ as ga,$ as Ea,a0 as Sa,a1 as Ma,a2 as Ta,a3 as xa,a4 as Cn,a5 as kt,a6 as sn,a7 as Aa,a8 as jt,a9 as Ra,aa as Ca,ab as ba,ac as Pa,ad as gr,ae as La,af as wa,ag as Ua,ah as Da,ai as Fe,aj as Ia,ak as ya,al as Na,am as Nt,an as Er,ao as dn,ap as At,aq as Sr,ar as It,as as Mt,at as vn,au as Mr,av as Tr,aw as xr,ax as Ar,ay as Oa,az as Fa,aA as Ba,aB as Rr,aC as Dt,aD as Ga,aE as Ha,aF as Va,aG as ka,aH as za,aI as Cr,aJ as Wa,aK as br,aL as Pr,aM as bn,aN as Pn,aO as Ln,aP as wn,aQ as Ye,aR as ui,aS as di,aT as pi,aU as hi,aV as mi,aW as _i,aX as vi,aY as gi,aZ as Ei,a_ as Si,a$ as Mi,b0 as Ti,b1 as xi,b2 as Ai,b3 as Ri,b4 as Ci,b5 as bi,b6 as Pi,b7 as Li,b8 as wi,b9 as Ui,ba as Un,bb as Di,bc as Ii,bd as Xa,be as yi,bf as Ni,bg as Oi,bh as Bn,bi as Gn,bj as Hn,bk as Vn,bl as kn,bm as zn,bn as Wn,bo as pn,bp as Ya,bq as Fi,br as Bi,bs as Gi,bt as Xn,bu as Yn,bv as qa,bw as Lr,bx as Ka,by as ct,bz as Sn,bA as $a,bB as Za,bC as wr,bD as Ur,bE as Hi,bF as jn,bG as Vi,bH as Dr,bI as rn,bJ as Yt,bK as Qa,bL as Ja,bM as ja,bN as eo,bO as to,bP as ki,bQ as no,bR as io,bS as ro,bT as ao,bU as oo,bV as so,bW as co,bX as lo,bY as fo,bZ as uo,b_ as po,b$ as ho,c0 as mo,c1 as _o,c2 as vo,c3 as go,c4 as Eo,c5 as So,c6 as Mo,c7 as ei,c8 as ti,c9 as To,ca as Ir,cb as xo}from"./voxel-Dr5A4w3Y.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yr(){let e=null,n=!1,t=null,i=null;function c(o,d){t(o,d),i=e.requestAnimationFrame(c)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(c),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function Ao(e){const n=new WeakMap;function t(f,b){const g=f.array,C=f.usage,R=g.byteLength,S=e.createBuffer();e.bindBuffer(b,S),e.bufferData(b,g,C),f.onUploadCallback();let v;if(g instanceof Float32Array)v=e.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(g instanceof Int16Array)v=e.SHORT;else if(g instanceof Uint32Array)v=e.UNSIGNED_INT;else if(g instanceof Int32Array)v=e.INT;else if(g instanceof Int8Array)v=e.BYTE;else if(g instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:v,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:R}}function i(f,b,g){const C=b.array,R=b.updateRanges;if(e.bindBuffer(g,f),R.length===0)e.bufferSubData(g,0,C);else{R.sort((v,N)=>v.start-N.start);let S=0;for(let v=1;v<R.length;v++){const N=R[S],L=R[v];L.start<=N.start+N.count+1?N.count=Math.max(N.count,L.start+L.count-N.start):(++S,R[S]=L)}R.length=S+1;for(let v=0,N=R.length;v<N;v++){const L=R[v];e.bufferSubData(g,L.start*C.BYTES_PER_ELEMENT,C,L.start,L.count)}b.clearUpdateRanges()}b.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const b=n.get(f);b&&(e.deleteBuffer(b.buffer),n.delete(f))}function d(f,b){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const C=n.get(f);(!C||C.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=n.get(f);if(g===void 0)n.set(f,t(f,b));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(g.buffer,f,b),g.version=f.version}}return{get:c,remove:o,update:d}}var Ro=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Co=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Po=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Do=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Io=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,No=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fo=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Go=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ho=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ko=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qo=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ko=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$o=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,es=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ts="gl_FragColor = linearToOutputTexel( gl_FragColor );",ns=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,is=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rs=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,as=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,os=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ss=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ls=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,us=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ds=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ps=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ms=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_s=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vs=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gs=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Es=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ss=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ms=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ts=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xs=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,As=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rs=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cs=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bs=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ps=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ls=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ws=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Us=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ds=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Is=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ys=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ns=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Os=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fs=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gs=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hs=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ks=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zs=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ws=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ys=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qs=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ks=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$s=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zs=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qs=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Js=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,js=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ec=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ic=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ac=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_c=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ec=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ac=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ic=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$c=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,el=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tl=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nl=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,il=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:Ro,alphahash_pars_fragment:Co,alphamap_fragment:bo,alphamap_pars_fragment:Po,alphatest_fragment:Lo,alphatest_pars_fragment:wo,aomap_fragment:Uo,aomap_pars_fragment:Do,batching_pars_vertex:Io,batching_vertex:yo,begin_vertex:No,beginnormal_vertex:Oo,bsdfs:Fo,iridescence_fragment:Bo,bumpmap_pars_fragment:Go,clipping_planes_fragment:Ho,clipping_planes_pars_fragment:Vo,clipping_planes_pars_vertex:ko,clipping_planes_vertex:zo,color_fragment:Wo,color_pars_fragment:Xo,color_pars_vertex:Yo,color_vertex:qo,common:Ko,cube_uv_reflection_fragment:$o,defaultnormal_vertex:Zo,displacementmap_pars_vertex:Qo,displacementmap_vertex:Jo,emissivemap_fragment:jo,emissivemap_pars_fragment:es,colorspace_fragment:ts,colorspace_pars_fragment:ns,envmap_fragment:is,envmap_common_pars_fragment:rs,envmap_pars_fragment:as,envmap_pars_vertex:os,envmap_physical_pars_fragment:vs,envmap_vertex:ss,fog_vertex:cs,fog_pars_vertex:ls,fog_fragment:fs,fog_pars_fragment:us,gradientmap_pars_fragment:ds,lightmap_pars_fragment:ps,lights_lambert_fragment:hs,lights_lambert_pars_fragment:ms,lights_pars_begin:_s,lights_toon_fragment:gs,lights_toon_pars_fragment:Es,lights_phong_fragment:Ss,lights_phong_pars_fragment:Ms,lights_physical_fragment:Ts,lights_physical_pars_fragment:xs,lights_fragment_begin:As,lights_fragment_maps:Rs,lights_fragment_end:Cs,logdepthbuf_fragment:bs,logdepthbuf_pars_fragment:Ps,logdepthbuf_pars_vertex:Ls,logdepthbuf_vertex:ws,map_fragment:Us,map_pars_fragment:Ds,map_particle_fragment:Is,map_particle_pars_fragment:ys,metalnessmap_fragment:Ns,metalnessmap_pars_fragment:Os,morphinstance_vertex:Fs,morphcolor_vertex:Bs,morphnormal_vertex:Gs,morphtarget_pars_vertex:Hs,morphtarget_vertex:Vs,normal_fragment_begin:ks,normal_fragment_maps:zs,normal_pars_fragment:Ws,normal_pars_vertex:Xs,normal_vertex:Ys,normalmap_pars_fragment:qs,clearcoat_normal_fragment_begin:Ks,clearcoat_normal_fragment_maps:$s,clearcoat_pars_fragment:Zs,iridescence_pars_fragment:Qs,opaque_fragment:Js,packing:js,premultiplied_alpha_fragment:ec,project_vertex:tc,dithering_fragment:nc,dithering_pars_fragment:ic,roughnessmap_fragment:rc,roughnessmap_pars_fragment:ac,shadowmap_pars_fragment:oc,shadowmap_pars_vertex:sc,shadowmap_vertex:cc,shadowmask_pars_fragment:lc,skinbase_vertex:fc,skinning_pars_vertex:uc,skinning_vertex:dc,skinnormal_vertex:pc,specularmap_fragment:hc,specularmap_pars_fragment:mc,tonemapping_fragment:_c,tonemapping_pars_fragment:vc,transmission_fragment:gc,transmission_pars_fragment:Ec,uv_pars_fragment:Sc,uv_pars_vertex:Mc,uv_vertex:Tc,worldpos_vertex:xc,background_vert:Ac,background_frag:Rc,backgroundCube_vert:Cc,backgroundCube_frag:bc,cube_vert:Pc,cube_frag:Lc,depth_vert:wc,depth_frag:Uc,distanceRGBA_vert:Dc,distanceRGBA_frag:Ic,equirect_vert:yc,equirect_frag:Nc,linedashed_vert:Oc,linedashed_frag:Fc,meshbasic_vert:Bc,meshbasic_frag:Gc,meshlambert_vert:Hc,meshlambert_frag:Vc,meshmatcap_vert:kc,meshmatcap_frag:zc,meshnormal_vert:Wc,meshnormal_frag:Xc,meshphong_vert:Yc,meshphong_frag:qc,meshphysical_vert:Kc,meshphysical_frag:$c,meshtoon_vert:Zc,meshtoon_frag:Qc,points_vert:Jc,points_frag:jc,shadow_vert:el,shadow_frag:tl,sprite_vert:nl,sprite_frag:il},ee={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Et={basic:{uniforms:ct([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:ct([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:ct([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:ct([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:ct([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:ct([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:ct([ee.points,ee.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:ct([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:ct([ee.common,ee.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:ct([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:ct([ee.sprite,ee.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:ct([ee.common,ee.displacementmap,{referencePosition:{value:new Ge},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:ct([ee.lights,ee.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Et.physical={uniforms:ct([Et.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const cn={r:0,b:0,g:0},Pt=new jn,rl=new Wt;function al(e,n,t,i,c,o,d){const f=new Ke(0);let b=o===!0?0:1,g,C,R=null,S=0,v=null;function N(A){let _=A.isScene===!0?A.background:null;return _&&_.isTexture&&(_=(A.backgroundBlurriness>0?t:n).get(_)),_}function L(A){let _=!1;const G=N(A);G===null?r(f,b):G&&G.isColor&&(r(G,1),_=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(A,_){const G=N(_);G&&(G.isCubeTexture||G.mapping===Sn)?(C===void 0&&(C=new At(new Ur(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Hi(Et.backgroundCube.uniforms),vertexShader:Et.backgroundCube.vertexShader,fragmentShader:Et.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),C.geometry.deleteAttribute("normal"),C.geometry.deleteAttribute("uv"),C.onBeforeRender=function(P,y,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(C.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(C)),Pt.copy(_.backgroundRotation),Pt.x*=-1,Pt.y*=-1,Pt.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Pt.y*=-1,Pt.z*=-1),C.material.uniforms.envMap.value=G,C.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,C.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,C.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,C.material.uniforms.backgroundRotation.value.setFromMatrix4(rl.makeRotationFromEuler(Pt)),C.material.toneMapped=tt.getTransfer(G.colorSpace)!==Ye,(R!==G||S!==G.version||v!==e.toneMapping)&&(C.material.needsUpdate=!0,R=G,S=G.version,v=e.toneMapping),C.layers.enableAll(),A.unshift(C,C.geometry,C.material,0,0,null)):G&&G.isTexture&&(g===void 0&&(g=new At(new Ar(2,2),new Nt({name:"BackgroundMaterial",uniforms:Hi(Et.background.uniforms),vertexShader:Et.background.vertexShader,fragmentShader:Et.background.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(g)),g.material.uniforms.t2D.value=G,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=tt.getTransfer(G.colorSpace)!==Ye,G.matrixAutoUpdate===!0&&G.updateMatrix(),g.material.uniforms.uvTransform.value.copy(G.matrix),(R!==G||S!==G.version||v!==e.toneMapping)&&(g.material.needsUpdate=!0,R=G,S=G.version,v=e.toneMapping),g.layers.enableAll(),A.unshift(g,g.geometry,g.material,0,0,null))}function r(A,_){A.getRGB(cn,wr(e)),i.buffers.color.setClear(cn.r,cn.g,cn.b,_,d)}function D(){C!==void 0&&(C.geometry.dispose(),C.material.dispose(),C=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,_=1){f.set(A),b=_,r(f,b)},getClearAlpha:function(){return b},setClearAlpha:function(A){b=A,r(f,b)},render:L,addToRenderList:l,dispose:D}}function ol(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},c=S(null);let o=c,d=!1;function f(u,T,Y,H,q){let Q=!1;const z=R(H,Y,T);o!==z&&(o=z,g(o.object)),Q=v(u,H,Y,q),Q&&N(u,H,Y,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),(Q||d)&&(d=!1,_(u,T,Y,H),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function b(){return e.createVertexArray()}function g(u){return e.bindVertexArray(u)}function C(u){return e.deleteVertexArray(u)}function R(u,T,Y){const H=Y.wireframe===!0;let q=i[u.id];q===void 0&&(q={},i[u.id]=q);let Q=q[T.id];Q===void 0&&(Q={},q[T.id]=Q);let z=Q[H];return z===void 0&&(z=S(b()),Q[H]=z),z}function S(u){const T=[],Y=[],H=[];for(let q=0;q<t;q++)T[q]=0,Y[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:Y,attributeDivisors:H,object:u,attributes:{},index:null}}function v(u,T,Y,H){const q=o.attributes,Q=T.attributes;let z=0;const j=Y.getAttributes();for(const B in j)if(j[B].location>=0){const Se=q[B];let Le=Q[B];if(Le===void 0&&(B==="instanceMatrix"&&u.instanceMatrix&&(Le=u.instanceMatrix),B==="instanceColor"&&u.instanceColor&&(Le=u.instanceColor)),Se===void 0||Se.attribute!==Le||Le&&Se.data!==Le.data)return!0;z++}return o.attributesNum!==z||o.index!==H}function N(u,T,Y,H){const q={},Q=T.attributes;let z=0;const j=Y.getAttributes();for(const B in j)if(j[B].location>=0){let Se=Q[B];Se===void 0&&(B==="instanceMatrix"&&u.instanceMatrix&&(Se=u.instanceMatrix),B==="instanceColor"&&u.instanceColor&&(Se=u.instanceColor));const Le={};Le.attribute=Se,Se&&Se.data&&(Le.data=Se.data),q[B]=Le,z++}o.attributes=q,o.attributesNum=z,o.index=H}function L(){const u=o.newAttributes;for(let T=0,Y=u.length;T<Y;T++)u[T]=0}function l(u){r(u,0)}function r(u,T){const Y=o.newAttributes,H=o.enabledAttributes,q=o.attributeDivisors;Y[u]=1,H[u]===0&&(e.enableVertexAttribArray(u),H[u]=1),q[u]!==T&&(e.vertexAttribDivisor(u,T),q[u]=T)}function D(){const u=o.newAttributes,T=o.enabledAttributes;for(let Y=0,H=T.length;Y<H;Y++)T[Y]!==u[Y]&&(e.disableVertexAttribArray(Y),T[Y]=0)}function A(u,T,Y,H,q,Q,z){z===!0?e.vertexAttribIPointer(u,T,Y,q,Q):e.vertexAttribPointer(u,T,Y,H,q,Q)}function _(u,T,Y,H){L();const q=H.attributes,Q=Y.getAttributes(),z=T.defaultAttributeValues;for(const j in Q){const B=Q[j];if(B.location>=0){let me=q[j];if(me===void 0&&(j==="instanceMatrix"&&u.instanceMatrix&&(me=u.instanceMatrix),j==="instanceColor"&&u.instanceColor&&(me=u.instanceColor)),me!==void 0){const Se=me.normalized,Le=me.itemSize,He=n.get(me);if(He===void 0)continue;const Ze=He.buffer,k=He.type,J=He.bytesPerElement,de=k===e.INT||k===e.UNSIGNED_INT||me.gpuType===Rr;if(me.isInterleavedBufferAttribute){const ie=me.data,Me=ie.stride,Be=me.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<B.locationSize;Te++)r(B.location+Te,ie.meshPerAttribute);u.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<B.locationSize;Te++)l(B.location+Te);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let Te=0;Te<B.locationSize;Te++)A(B.location+Te,Le/B.locationSize,k,Se,Me*J,(Be+Le/B.locationSize*Te)*J,de)}else{if(me.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)r(B.location+ie,me.meshPerAttribute);u.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ie=0;ie<B.locationSize;ie++)l(B.location+ie);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let ie=0;ie<B.locationSize;ie++)A(B.location+ie,Le/B.locationSize,k,Se,Le*J,Le/B.locationSize*ie*J,de)}}else if(z!==void 0){const Se=z[j];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(B.location,Se);break;case 3:e.vertexAttrib3fv(B.location,Se);break;case 4:e.vertexAttrib4fv(B.location,Se);break;default:e.vertexAttrib1fv(B.location,Se)}}}}D()}function G(){F();for(const u in i){const T=i[u];for(const Y in T){const H=T[Y];for(const q in H)C(H[q].object),delete H[q];delete T[Y]}delete i[u]}}function P(u){if(i[u.id]===void 0)return;const T=i[u.id];for(const Y in T){const H=T[Y];for(const q in H)C(H[q].object),delete H[q];delete T[Y]}delete i[u.id]}function y(u){for(const T in i){const Y=i[T];if(Y[u.id]===void 0)continue;const H=Y[u.id];for(const q in H)C(H[q].object),delete H[q];delete Y[u.id]}}function F(){h(),d=!0,o!==c&&(o=c,g(o.object))}function h(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:F,resetDefaultState:h,dispose:G,releaseStatesOfGeometry:P,releaseStatesOfProgram:y,initAttributes:L,enableAttribute:l,disableUnusedAttributes:D}}function sl(e,n,t){let i;function c(g){i=g}function o(g,C){e.drawArrays(i,g,C),t.update(C,i,1)}function d(g,C,R){R!==0&&(e.drawArraysInstanced(i,g,C,R),t.update(C,i,R))}function f(g,C,R){if(R===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,g,0,C,0,R);let v=0;for(let N=0;N<R;N++)v+=C[N];t.update(v,i,1)}function b(g,C,R,S){if(R===0)return;const v=n.get("WEBGL_multi_draw");if(v===null)for(let N=0;N<g.length;N++)d(g[N],C[N],S[N]);else{v.multiDrawArraysInstancedWEBGL(i,g,0,C,0,S,0,R);let N=0;for(let L=0;L<R;L++)N+=C[L]*S[L];t.update(N,i,1)}}this.setMode=c,this.render=o,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=b}function cl(e,n,t,i){let c;function o(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const y=n.get("EXT_texture_filter_anisotropic");c=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(y){return!(y!==xt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(y){const F=y===gn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(y!==yt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Dt&&!F)}function b(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const C=b(g);C!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",C,"instead."),g=C);const R=t.logarithmicDepthBuffer===!0,S=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),N=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),r=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),G=N>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:b,textureFormatReadable:d,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:R,reverseDepthBuffer:S,maxTextures:v,maxVertexTextures:N,maxTextureSize:L,maxCubemapSize:l,maxAttributes:r,maxVertexUniforms:D,maxVaryings:A,maxFragmentUniforms:_,vertexTextures:G,maxSamples:P}}function ll(e){const n=this;let t=null,i=0,c=!1,o=!1;const d=new Da,f=new Fe,b={value:null,needsUpdate:!1};this.uniform=b,this.numPlanes=0,this.numIntersection=0,this.init=function(R,S){const v=R.length!==0||S||i!==0||c;return c=S,i=R.length,v},this.beginShadows=function(){o=!0,C(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(R,S){t=C(R,S,0)},this.setState=function(R,S,v){const N=R.clippingPlanes,L=R.clipIntersection,l=R.clipShadows,r=e.get(R);if(!c||N===null||N.length===0||o&&!l)o?C(null):g();else{const D=o?0:i,A=D*4;let _=r.clippingState||null;b.value=_,_=C(N,S,A,v);for(let G=0;G!==A;++G)_[G]=t[G];r.clippingState=_,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=D}};function g(){b.value!==t&&(b.value=t,b.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function C(R,S,v,N){const L=R!==null?R.length:0;let l=null;if(L!==0){if(l=b.value,N!==!0||l===null){const r=v+L*4,D=S.matrixWorldInverse;f.getNormalMatrix(D),(l===null||l.length<r)&&(l=new Float32Array(r));for(let A=0,_=v;A!==L;++A,_+=4)d.copy(R[A]).applyMatrix4(D,f),d.normal.toArray(l,_),l[_+3]=d.constant}b.value=l,b.needsUpdate=!0}return n.numPlanes=L,n.numIntersection=0,l}}function fl(e){let n=new WeakMap;function t(d,f){return f===Xn?d.mapping=rn:f===Yn&&(d.mapping=Yt),d}function i(d){if(d&&d.isTexture){const f=d.mapping;if(f===Xn||f===Yn)if(n.has(d)){const b=n.get(d).texture;return t(b,d.mapping)}else{const b=d.image;if(b&&b.height>0){const g=new qa(b.height);return g.fromEquirectangularTexture(e,d),n.set(d,g),d.addEventListener("dispose",c),t(g.texture,d.mapping)}else return null}}return d}function c(d){const f=d.target;f.removeEventListener("dispose",c);const b=n.get(f);b!==void 0&&(n.delete(f),b.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const zt=4,zi=[.125,.215,.35,.446,.526,.582],Ut=20,Dn=new Qa,Wi=new Ke;let In=null,yn=0,Nn=0,On=!1;const wt=(1+Math.sqrt(5))/2,Ft=1/wt,Xi=[new Ge(-wt,Ft,0),new Ge(wt,Ft,0),new Ge(-Ft,0,wt),new Ge(Ft,0,wt),new Ge(0,wt,-Ft),new Ge(0,wt,Ft),new Ge(-1,1,-1),new Ge(1,1,-1),new Ge(-1,1,1),new Ge(1,1,1)];class Yi{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,c=100){In=this._renderer.getRenderTarget(),yn=this._renderer.getActiveCubeFace(),Nn=this._renderer.getActiveMipmapLevel(),On=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(n,i,c,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$i(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ki(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(In,yn,Nn),this._renderer.xr.enabled=On,n.scissorTest=!1,ln(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===rn||n.mapping===Yt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),In=this._renderer.getRenderTarget(),yn=this._renderer.getActiveCubeFace(),Nn=this._renderer.getActiveMipmapLevel(),On=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:gn,format:xt,colorSpace:En,depthBuffer:!1},c=qi(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qi(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ul(o)),this._blurMaterial=dl(o,n,t)}return c}_compileMaterial(n){const t=new At(this._lodPlanes[0],n);this._renderer.compile(t,Dn)}_sceneToCubeUV(n,t,i,c){const f=new Jt(90,1,t,i),b=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],C=this._renderer,R=C.autoClear,S=C.toneMapping;C.getClearColor(Wi),C.toneMapping=Rt,C.autoClear=!1;const v=new Ja({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),N=new At(new Ur,v);let L=!1;const l=n.background;l?l.isColor&&(v.color.copy(l),n.background=null,L=!0):(v.color.copy(Wi),L=!0);for(let r=0;r<6;r++){const D=r%3;D===0?(f.up.set(0,b[r],0),f.lookAt(g[r],0,0)):D===1?(f.up.set(0,0,b[r]),f.lookAt(0,g[r],0)):(f.up.set(0,b[r],0),f.lookAt(0,0,g[r]));const A=this._cubeSize;ln(c,D*A,r>2?A:0,A,A),C.setRenderTarget(c),L&&C.render(N,f),C.render(n,f)}N.geometry.dispose(),N.material.dispose(),C.toneMapping=S,C.autoClear=R,n.background=l}_textureToCubeUV(n,t){const i=this._renderer,c=n.mapping===rn||n.mapping===Yt;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=$i()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ki());const o=c?this._cubemapMaterial:this._equirectMaterial,d=new At(this._lodPlanes[0],o),f=o.uniforms;f.envMap.value=n;const b=this._cubeSize;ln(t,0,0,3*b,2*b),i.setRenderTarget(t),i.render(d,Dn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const c=this._lodPlanes.length;for(let o=1;o<c;o++){const d=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=Xi[(c-o-1)%Xi.length];this._blur(n,o-1,o,d,f)}t.autoClear=i}_blur(n,t,i,c,o){const d=this._pingPongRenderTarget;this._halfBlur(n,d,t,i,c,"latitudinal",o),this._halfBlur(d,n,i,i,c,"longitudinal",o)}_halfBlur(n,t,i,c,o,d,f){const b=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const C=3,R=new At(this._lodPlanes[c],g),S=g.uniforms,v=this._sizeLods[i]-1,N=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Ut-1),L=o/N,l=isFinite(o)?1+Math.floor(C*L):Ut;l>Ut&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${Ut}`);const r=[];let D=0;for(let y=0;y<Ut;++y){const F=y/L,h=Math.exp(-F*F/2);r.push(h),y===0?D+=h:y<l&&(D+=2*h)}for(let y=0;y<r.length;y++)r[y]=r[y]/D;S.envMap.value=n.texture,S.samples.value=l,S.weights.value=r,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:A}=this;S.dTheta.value=N,S.mipInt.value=A-i;const _=this._sizeLods[c],G=3*_*(c>A-zt?c-A+zt:0),P=4*(this._cubeSize-_);ln(t,G,P,3*_,2*_),b.setRenderTarget(t),b.render(R,Dn)}}function ul(e){const n=[],t=[],i=[];let c=e;const o=e-zt+1+zi.length;for(let d=0;d<o;d++){const f=Math.pow(2,c);t.push(f);let b=1/f;d>e-zt?b=zi[d-e+zt-1]:d===0&&(b=0),i.push(b);const g=1/(f-2),C=-g,R=1+g,S=[C,C,R,C,R,R,C,C,R,R,C,R],v=6,N=6,L=3,l=2,r=1,D=new Float32Array(L*N*v),A=new Float32Array(l*N*v),_=new Float32Array(r*N*v);for(let P=0;P<v;P++){const y=P%3*2/3-1,F=P>2?0:-1,h=[y,F,0,y+2/3,F,0,y+2/3,F+1,0,y,F,0,y+2/3,F+1,0,y,F+1,0];D.set(h,L*N*P),A.set(S,l*N*P);const u=[P,P,P,P,P,P];_.set(u,r*N*P)}const G=new Er;G.setAttribute("position",new dn(D,L)),G.setAttribute("uv",new dn(A,l)),G.setAttribute("faceIndex",new dn(_,r)),n.push(G),c>zt&&c--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function qi(e,n,t){const i=new Xt(e,n,t);return i.texture.mapping=Sn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ln(e,n,t,i,c){e.viewport.set(n,t,i,c),e.scissor.set(n,t,i,c)}function dl(e,n,t){const i=new Float32Array(Ut),c=new Ge(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Ut,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:ni(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function Ki(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ni(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function $i(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ni(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function ni(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pl(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const b=f.mapping,g=b===Xn||b===Yn,C=b===rn||b===Yt;if(g||C){let R=n.get(f);const S=R!==void 0?R.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new Yi(e)),R=g?t.fromEquirectangular(f,R):t.fromCubemap(f,R),R.texture.pmremVersion=f.pmremVersion,n.set(f,R),R.texture;if(R!==void 0)return R.texture;{const v=f.image;return g&&v&&v.height>0||C&&v&&c(v)?(t===null&&(t=new Yi(e)),R=g?t.fromEquirectangular(f):t.fromCubemap(f),R.texture.pmremVersion=f.pmremVersion,n.set(f,R),f.addEventListener("dispose",o),R.texture):null}}}return f}function c(f){let b=0;const g=6;for(let C=0;C<g;C++)f[C]!==void 0&&b++;return b===g}function o(f){const b=f.target;b.removeEventListener("dispose",o);const g=n.get(b);g!==void 0&&(n.delete(b),g.dispose())}function d(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:d}}function hl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let c;switch(i){case"WEBGL_depth_texture":c=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=e.getExtension(i)}return n[i]=c,c}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const c=t(i);return c===null&&Ht("THREE.WebGLRenderer: "+i+" extension not supported."),c}}}function ml(e,n,t,i){const c={},o=new WeakMap;function d(R){const S=R.target;S.index!==null&&n.remove(S.index);for(const N in S.attributes)n.remove(S.attributes[N]);S.removeEventListener("dispose",d),delete c[S.id];const v=o.get(S);v&&(n.remove(v),o.delete(S)),i.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(R,S){return c[S.id]===!0||(S.addEventListener("dispose",d),c[S.id]=!0,t.memory.geometries++),S}function b(R){const S=R.attributes;for(const v in S)n.update(S[v],e.ARRAY_BUFFER)}function g(R){const S=[],v=R.index,N=R.attributes.position;let L=0;if(v!==null){const D=v.array;L=v.version;for(let A=0,_=D.length;A<_;A+=3){const G=D[A+0],P=D[A+1],y=D[A+2];S.push(G,P,P,y,y,G)}}else if(N!==void 0){const D=N.array;L=N.version;for(let A=0,_=D.length/3-1;A<_;A+=3){const G=A+0,P=A+1,y=A+2;S.push(G,P,P,y,y,G)}}else return;const l=new(to(S)?ja:eo)(S,1);l.version=L;const r=o.get(R);r&&n.remove(r),o.set(R,l)}function C(R){const S=o.get(R);if(S){const v=R.index;v!==null&&S.version<v.version&&g(R)}else g(R);return o.get(R)}return{get:f,update:b,getWireframeAttribute:C}}function _l(e,n,t){let i;function c(S){i=S}let o,d;function f(S){o=S.type,d=S.bytesPerElement}function b(S,v){e.drawElements(i,v,o,S*d),t.update(v,i,1)}function g(S,v,N){N!==0&&(e.drawElementsInstanced(i,v,o,S*d,N),t.update(v,i,N))}function C(S,v,N){if(N===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,S,0,N);let l=0;for(let r=0;r<N;r++)l+=v[r];t.update(l,i,1)}function R(S,v,N,L){if(N===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let r=0;r<S.length;r++)g(S[r]/d,v[r],L[r]);else{l.multiDrawElementsInstancedWEBGL(i,v,0,o,S,0,L,0,N);let r=0;for(let D=0;D<N;D++)r+=v[D]*L[D];t.update(r,i,1)}}this.setMode=c,this.setIndex=f,this.render=b,this.renderInstances=g,this.renderMultiDraw=C,this.renderMultiDrawInstances=R}function vl(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,d,f){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=f*(o/3);break;case e.LINES:t.lines+=f*(o/2);break;case e.LINE_STRIP:t.lines+=f*(o-1);break;case e.LINE_LOOP:t.lines+=f*o;break;case e.POINTS:t.points+=f*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function c(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:c,update:i}}function gl(e,n,t){const i=new WeakMap,c=new lt;function o(d,f,b){const g=d.morphTargetInfluences,C=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,R=C!==void 0?C.length:0;let S=i.get(f);if(S===void 0||S.count!==R){let h=function(){y.dispose(),i.delete(f),f.removeEventListener("dispose",h)};S!==void 0&&S.texture.dispose();const v=f.morphAttributes.position!==void 0,N=f.morphAttributes.normal!==void 0,L=f.morphAttributes.color!==void 0,l=f.morphAttributes.position||[],r=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let A=0;v===!0&&(A=1),N===!0&&(A=2),L===!0&&(A=3);let _=f.attributes.position.count*A,G=1;_>n.maxTextureSize&&(G=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const P=new Float32Array(_*G*4*R),y=new Lr(P,_,G,R);y.type=Dt,y.needsUpdate=!0;const F=A*4;for(let u=0;u<R;u++){const T=l[u],Y=r[u],H=D[u],q=_*G*4*u;for(let Q=0;Q<T.count;Q++){const z=Q*F;v===!0&&(c.fromBufferAttribute(T,Q),P[q+z+0]=c.x,P[q+z+1]=c.y,P[q+z+2]=c.z,P[q+z+3]=0),N===!0&&(c.fromBufferAttribute(Y,Q),P[q+z+4]=c.x,P[q+z+5]=c.y,P[q+z+6]=c.z,P[q+z+7]=0),L===!0&&(c.fromBufferAttribute(H,Q),P[q+z+8]=c.x,P[q+z+9]=c.y,P[q+z+10]=c.z,P[q+z+11]=H.itemSize===4?c.w:1)}}S={count:R,texture:y,size:new ft(_,G)},i.set(f,S),f.addEventListener("dispose",h)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)b.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let v=0;for(let L=0;L<g.length;L++)v+=g[L];const N=f.morphTargetsRelative?1:1-v;b.getUniforms().setValue(e,"morphTargetBaseInfluence",N),b.getUniforms().setValue(e,"morphTargetInfluences",g)}b.getUniforms().setValue(e,"morphTargetsTexture",S.texture,t),b.getUniforms().setValue(e,"morphTargetsTextureSize",S.size)}return{update:o}}function El(e,n,t,i){let c=new WeakMap;function o(b){const g=i.render.frame,C=b.geometry,R=n.get(b,C);if(c.get(R)!==g&&(n.update(R),c.set(R,g)),b.isInstancedMesh&&(b.hasEventListener("dispose",f)===!1&&b.addEventListener("dispose",f),c.get(b)!==g&&(t.update(b.instanceMatrix,e.ARRAY_BUFFER),b.instanceColor!==null&&t.update(b.instanceColor,e.ARRAY_BUFFER),c.set(b,g))),b.isSkinnedMesh){const S=b.skeleton;c.get(S)!==g&&(S.update(),c.set(S,g))}return R}function d(){c=new WeakMap}function f(b){const g=b.target;g.removeEventListener("dispose",f),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:o,dispose:d}}const Nr=new xr,Zi=new vr(1,1),Or=new Lr,Fr=new po,Br=new uo,Qi=[],Ji=[],ji=new Float32Array(16),er=new Float32Array(9),tr=new Float32Array(4);function qt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const c=n*t;let o=Qi[c];if(o===void 0&&(o=new Float32Array(c),Qi[c]=o),n!==0){i.toArray(o,0);for(let d=1,f=0;d!==n;++d)f+=t,e[d].toArray(o,f)}return o}function nt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function it(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Mn(e,n){let t=Ji[n];t===void 0&&(t=new Int32Array(n),Ji[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Sl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Ml(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(nt(t,n))return;e.uniform2fv(this.addr,n),it(t,n)}}function Tl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(nt(t,n))return;e.uniform3fv(this.addr,n),it(t,n)}}function xl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(nt(t,n))return;e.uniform4fv(this.addr,n),it(t,n)}}function Al(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(nt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),it(t,n)}else{if(nt(t,i))return;tr.set(i),e.uniformMatrix2fv(this.addr,!1,tr),it(t,i)}}function Rl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(nt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),it(t,n)}else{if(nt(t,i))return;er.set(i),e.uniformMatrix3fv(this.addr,!1,er),it(t,i)}}function Cl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(nt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),it(t,n)}else{if(nt(t,i))return;ji.set(i),e.uniformMatrix4fv(this.addr,!1,ji),it(t,i)}}function bl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Pl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(nt(t,n))return;e.uniform2iv(this.addr,n),it(t,n)}}function Ll(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(nt(t,n))return;e.uniform3iv(this.addr,n),it(t,n)}}function wl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(nt(t,n))return;e.uniform4iv(this.addr,n),it(t,n)}}function Ul(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Dl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(nt(t,n))return;e.uniform2uiv(this.addr,n),it(t,n)}}function Il(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(nt(t,n))return;e.uniform3uiv(this.addr,n),it(t,n)}}function yl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(nt(t,n))return;e.uniform4uiv(this.addr,n),it(t,n)}}function Nl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c);let o;this.type===e.SAMPLER_2D_SHADOW?(Zi.compareFunction=gr,o=Zi):o=Nr,t.setTexture2D(n||o,c)}function Ol(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture3D(n||Fr,c)}function Fl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTextureCube(n||Br,c)}function Bl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture2DArray(n||Or,c)}function Gl(e){switch(e){case 5126:return Sl;case 35664:return Ml;case 35665:return Tl;case 35666:return xl;case 35674:return Al;case 35675:return Rl;case 35676:return Cl;case 5124:case 35670:return bl;case 35667:case 35671:return Pl;case 35668:case 35672:return Ll;case 35669:case 35673:return wl;case 5125:return Ul;case 36294:return Dl;case 36295:return Il;case 36296:return yl;case 35678:case 36198:case 36298:case 36306:case 35682:return Nl;case 35679:case 36299:case 36307:return Ol;case 35680:case 36300:case 36308:case 36293:return Fl;case 36289:case 36303:case 36311:case 36292:return Bl}}function Hl(e,n){e.uniform1fv(this.addr,n)}function Vl(e,n){const t=qt(n,this.size,2);e.uniform2fv(this.addr,t)}function kl(e,n){const t=qt(n,this.size,3);e.uniform3fv(this.addr,t)}function zl(e,n){const t=qt(n,this.size,4);e.uniform4fv(this.addr,t)}function Wl(e,n){const t=qt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Xl(e,n){const t=qt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Yl(e,n){const t=qt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function ql(e,n){e.uniform1iv(this.addr,n)}function Kl(e,n){e.uniform2iv(this.addr,n)}function $l(e,n){e.uniform3iv(this.addr,n)}function Zl(e,n){e.uniform4iv(this.addr,n)}function Ql(e,n){e.uniform1uiv(this.addr,n)}function Jl(e,n){e.uniform2uiv(this.addr,n)}function jl(e,n){e.uniform3uiv(this.addr,n)}function ef(e,n){e.uniform4uiv(this.addr,n)}function tf(e,n,t){const i=this.cache,c=n.length,o=Mn(t,c);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let d=0;d!==c;++d)t.setTexture2D(n[d]||Nr,o[d])}function nf(e,n,t){const i=this.cache,c=n.length,o=Mn(t,c);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let d=0;d!==c;++d)t.setTexture3D(n[d]||Fr,o[d])}function rf(e,n,t){const i=this.cache,c=n.length,o=Mn(t,c);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let d=0;d!==c;++d)t.setTextureCube(n[d]||Br,o[d])}function af(e,n,t){const i=this.cache,c=n.length,o=Mn(t,c);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let d=0;d!==c;++d)t.setTexture2DArray(n[d]||Or,o[d])}function of(e){switch(e){case 5126:return Hl;case 35664:return Vl;case 35665:return kl;case 35666:return zl;case 35674:return Wl;case 35675:return Xl;case 35676:return Yl;case 5124:case 35670:return ql;case 35667:case 35671:return Kl;case 35668:case 35672:return $l;case 35669:case 35673:return Zl;case 5125:return Ql;case 36294:return Jl;case 36295:return jl;case 36296:return ef;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return rf;case 36289:case 36303:case 36311:case 36292:return af}}class sf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gl(t.type)}}class cf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=of(t.type)}}class lf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const c=this.seq;for(let o=0,d=c.length;o!==d;++o){const f=c[o];f.setValue(n,t[f.id],i)}}}const Fn=/(\w+)(\])?(\[|\.)?/g;function nr(e,n){e.seq.push(n),e.map[n.id]=n}function ff(e,n,t){const i=e.name,c=i.length;for(Fn.lastIndex=0;;){const o=Fn.exec(i),d=Fn.lastIndex;let f=o[1];const b=o[2]==="]",g=o[3];if(b&&(f=f|0),g===void 0||g==="["&&d+2===c){nr(t,g===void 0?new sf(f,e,n):new cf(f,e,n));break}else{let R=t.map[f];R===void 0&&(R=new lf(f),nr(t,R)),t=R}}}class hn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const o=n.getActiveUniform(t,c),d=n.getUniformLocation(t,o.name);ff(o,d,this)}}setValue(n,t,i,c){const o=this.map[t];o!==void 0&&o.setValue(n,i,c)}setOptional(n,t,i){const c=t[i];c!==void 0&&this.setValue(n,i,c)}static upload(n,t,i,c){for(let o=0,d=t.length;o!==d;++o){const f=t[o],b=i[f.id];b.needsUpdate!==!1&&f.setValue(n,b.value,c)}}static seqWithValue(n,t){const i=[];for(let c=0,o=n.length;c!==o;++c){const d=n[c];d.id in t&&i.push(d)}return i}}function ir(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const uf=37297;let df=0;function pf(e,n){const t=e.split(`
`),i=[],c=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let d=c;d<o;d++){const f=d+1;i.push(`${f===n?">":" "} ${f}: ${t[d]}`)}return i.join(`
`)}const rr=new Fe;function hf(e){tt._getMatrix(rr,tt.workingColorSpace,e);const n=`mat3( ${rr.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(e)){case Dr:return[n,"LinearTransferOETF"];case Ye:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ar(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),c=e.getShaderInfoLog(n).trim();if(i&&c==="")return"";const o=/ERROR: 0:(\d+)/.exec(c);if(o){const d=parseInt(o[1]);return t.toUpperCase()+`

`+c+`

`+pf(e.getShaderSource(n),d)}else return c}function mf(e,n){const t=hf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _f(e,n){let t;switch(n){case fo:t="Linear";break;case lo:t="Reinhard";break;case co:t="Cineon";break;case so:t="ACESFilmic";break;case oo:t="AgX";break;case ao:t="Neutral";break;case ro:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fn=new Ge;function vf(){tt.getLuminanceCoefficients(fn);const e=fn.x.toFixed(4),n=fn.y.toFixed(4),t=fn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qt).join(`
`)}function Ef(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Sf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let c=0;c<i;c++){const o=e.getActiveAttrib(n,c),d=o.name;let f=1;o.type===e.FLOAT_MAT2&&(f=2),o.type===e.FLOAT_MAT3&&(f=3),o.type===e.FLOAT_MAT4&&(f=4),t[d]={type:o.type,location:e.getAttribLocation(n,d),locationSize:f}}return t}function Qt(e){return e!==""}function or(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function sr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Mf=/^[ \t]*#include +<([\w\d./]+)>/gm;function qn(e){return e.replace(Mf,xf)}const Tf=new Map;function xf(e,n){let t=Pe[n];if(t===void 0){const i=Tf.get(n);if(i!==void 0)t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return qn(t)}const Af=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cr(e){return e.replace(Af,Rf)}function Rf(e,n,t,i){let c="";for(let o=parseInt(n);o<parseInt(t);o++)c+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return c}function lr(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Cf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Sr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===io?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Mt&&(n="SHADOWMAP_TYPE_VSM"),n}function bf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case rn:case Yt:n="ENVMAP_TYPE_CUBE";break;case Sn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Pf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Yt:n="ENVMAP_MODE_REFRACTION";break}return n}function Lf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case vo:n="ENVMAP_BLENDING_MULTIPLY";break;case _o:n="ENVMAP_BLENDING_MIX";break;case mo:n="ENVMAP_BLENDING_ADD";break}return n}function wf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Uf(e,n,t,i){const c=e.getContext(),o=t.defines;let d=t.vertexShader,f=t.fragmentShader;const b=Cf(t),g=bf(t),C=Pf(t),R=Lf(t),S=wf(t),v=gf(t),N=Ef(o),L=c.createProgram();let l,r,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Qt).join(`
`),l.length>0&&(l+=`
`),r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Qt).join(`
`),r.length>0&&(r+=`
`)):(l=[lr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+C:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qt).join(`
`),r=[lr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+C:"",t.envMap?"#define "+R:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rt?"#define TONE_MAPPING":"",t.toneMapping!==Rt?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Rt?_f("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,mf("linearToOutputTexel",t.outputColorSpace),vf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qt).join(`
`)),d=qn(d),d=or(d,t),d=sr(d,t),f=qn(f),f=or(f,t),f=sr(f,t),d=cr(d),f=cr(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,l=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,r=["#define varying in",t.glslVersion===ki?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ki?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const A=D+l+d,_=D+r+f,G=ir(c,c.VERTEX_SHADER,A),P=ir(c,c.FRAGMENT_SHADER,_);c.attachShader(L,G),c.attachShader(L,P),t.index0AttributeName!==void 0?c.bindAttribLocation(L,0,t.index0AttributeName):t.morphTargets===!0&&c.bindAttribLocation(L,0,"position"),c.linkProgram(L);function y(T){if(e.debug.checkShaderErrors){const Y=c.getProgramInfoLog(L).trim(),H=c.getShaderInfoLog(G).trim(),q=c.getShaderInfoLog(P).trim();let Q=!0,z=!0;if(c.getProgramParameter(L,c.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,L,G,P);else{const j=ar(c,G,"vertex"),B=ar(c,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(L,c.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+Y+`
`+j+`
`+B)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(H===""||q==="")&&(z=!1);z&&(T.diagnostics={runnable:Q,programLog:Y,vertexShader:{log:H,prefix:l},fragmentShader:{log:q,prefix:r}})}c.deleteShader(G),c.deleteShader(P),F=new hn(c,L),h=Sf(c,L)}let F;this.getUniforms=function(){return F===void 0&&y(this),F};let h;this.getAttributes=function(){return h===void 0&&y(this),h};let u=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=c.getProgramParameter(L,uf)),u},this.destroy=function(){i.releaseStatesOfProgram(this),c.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=df++,this.cacheKey=n,this.usedTimes=1,this.program=L,this.vertexShader=G,this.fragmentShader=P,this}let Df=0;class If{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,c=this._getShaderStage(t),o=this._getShaderStage(i),d=this._getShaderCacheForMaterial(n);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(o)===!1&&(d.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new yf(n),t.set(n,i)),i}}class yf{constructor(n){this.id=Df++,this.code=n,this.usedTimes=0}}function Nf(e,n,t,i,c,o,d){const f=new no,b=new If,g=new Set,C=[],R=c.logarithmicDepthBuffer,S=c.vertexTextures;let v=c.precision;const N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(h){return g.add(h),h===0?"uv":`uv${h}`}function l(h,u,T,Y,H){const q=Y.fog,Q=H.geometry,z=h.isMeshStandardMaterial?Y.environment:null,j=(h.isMeshStandardMaterial?t:n).get(h.envMap||z),B=j&&j.mapping===Sn?j.image.height:null,me=N[h.type];h.precision!==null&&(v=c.getMaxPrecision(h.precision),v!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",v,"instead."));const Se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Le=Se!==void 0?Se.length:0;let He=0;Q.morphAttributes.position!==void 0&&(He=1),Q.morphAttributes.normal!==void 0&&(He=2),Q.morphAttributes.color!==void 0&&(He=3);let Ze,k,J,de;if(me){const ze=Et[me];Ze=ze.vertexShader,k=ze.fragmentShader}else Ze=h.vertexShader,k=h.fragmentShader,b.update(h),J=b.getVertexShaderID(h),de=b.getFragmentShaderID(h);const ie=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),Be=H.isInstancedMesh===!0,Te=H.isBatchedMesh===!0,je=!!h.map,$e=!!h.matcap,we=!!j,m=!!h.aoMap,pt=!!h.lightMap,Ue=!!h.bumpMap,De=!!h.normalMap,_e=!!h.displacementMap,Xe=!!h.emissiveMap,he=!!h.metalnessMap,p=!!h.roughnessMap,a=h.anisotropy>0,w=h.clearcoat>0,W=h.dispersion>0,K=h.iridescence>0,V=h.sheen>0,pe=h.transmission>0,re=a&&!!h.anisotropyMap,ce=w&&!!h.clearcoatMap,ye=w&&!!h.clearcoatNormalMap,Z=w&&!!h.clearcoatRoughnessMap,le=K&&!!h.iridescenceMap,Ee=K&&!!h.iridescenceThicknessMap,xe=V&&!!h.sheenColorMap,fe=V&&!!h.sheenRoughnessMap,Ie=!!h.specularMap,be=!!h.specularColorMap,We=!!h.specularIntensityMap,E=pe&&!!h.transmissionMap,te=pe&&!!h.thicknessMap,O=!!h.gradientMap,X=!!h.alphaMap,oe=h.alphaTest>0,ae=!!h.alphaHash,Ce=!!h.extensions;let Qe=Rt;h.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Qe=e.toneMapping);const at={shaderID:me,shaderType:h.type,shaderName:h.name,vertexShader:Ze,fragmentShader:k,defines:h.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:v,batching:Te,batchingColor:Te&&H._colorsTexture!==null,instancing:Be,instancingColor:Be&&H.instanceColor!==null,instancingMorph:Be&&H.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ie===null?e.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:En,alphaToCoverage:!!h.alphaToCoverage,map:je,matcap:$e,envMap:we,envMapMode:we&&j.mapping,envMapCubeUVHeight:B,aoMap:m,lightMap:pt,bumpMap:Ue,normalMap:De,displacementMap:S&&_e,emissiveMap:Xe,normalMapObjectSpace:De&&h.normalMapType===Za,normalMapTangentSpace:De&&h.normalMapType===$a,metalnessMap:he,roughnessMap:p,anisotropy:a,anisotropyMap:re,clearcoat:w,clearcoatMap:ce,clearcoatNormalMap:ye,clearcoatRoughnessMap:Z,dispersion:W,iridescence:K,iridescenceMap:le,iridescenceThicknessMap:Ee,sheen:V,sheenColorMap:xe,sheenRoughnessMap:fe,specularMap:Ie,specularColorMap:be,specularIntensityMap:We,transmission:pe,transmissionMap:E,thicknessMap:te,gradientMap:O,opaque:h.transparent===!1&&h.blending===pn&&h.alphaToCoverage===!1,alphaMap:X,alphaTest:oe,alphaHash:ae,combine:h.combine,mapUv:je&&L(h.map.channel),aoMapUv:m&&L(h.aoMap.channel),lightMapUv:pt&&L(h.lightMap.channel),bumpMapUv:Ue&&L(h.bumpMap.channel),normalMapUv:De&&L(h.normalMap.channel),displacementMapUv:_e&&L(h.displacementMap.channel),emissiveMapUv:Xe&&L(h.emissiveMap.channel),metalnessMapUv:he&&L(h.metalnessMap.channel),roughnessMapUv:p&&L(h.roughnessMap.channel),anisotropyMapUv:re&&L(h.anisotropyMap.channel),clearcoatMapUv:ce&&L(h.clearcoatMap.channel),clearcoatNormalMapUv:ye&&L(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&L(h.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&L(h.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&L(h.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&L(h.sheenColorMap.channel),sheenRoughnessMapUv:fe&&L(h.sheenRoughnessMap.channel),specularMapUv:Ie&&L(h.specularMap.channel),specularColorMapUv:be&&L(h.specularColorMap.channel),specularIntensityMapUv:We&&L(h.specularIntensityMap.channel),transmissionMapUv:E&&L(h.transmissionMap.channel),thicknessMapUv:te&&L(h.thicknessMap.channel),alphaMapUv:X&&L(h.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(De||a),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(je||X),fog:!!q,useFog:h.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:h.flatShading===!0,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:R,reverseDepthBuffer:Me,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:He,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&T.length>0,shadowMapType:e.shadowMap.type,toneMapping:Qe,decodeVideoTexture:je&&h.map.isVideoTexture===!0&&tt.getTransfer(h.map.colorSpace)===Ye,decodeVideoTextureEmissive:Xe&&h.emissiveMap.isVideoTexture===!0&&tt.getTransfer(h.emissiveMap.colorSpace)===Ye,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===Tt,flipSided:h.side===_t,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:Ce&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&h.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return at.vertexUv1s=g.has(1),at.vertexUv2s=g.has(2),at.vertexUv3s=g.has(3),g.clear(),at}function r(h){const u=[];if(h.shaderID?u.push(h.shaderID):(u.push(h.customVertexShaderID),u.push(h.customFragmentShaderID)),h.defines!==void 0)for(const T in h.defines)u.push(T),u.push(h.defines[T]);return h.isRawShaderMaterial===!1&&(D(u,h),A(u,h),u.push(e.outputColorSpace)),u.push(h.customProgramCacheKey),u.join()}function D(h,u){h.push(u.precision),h.push(u.outputColorSpace),h.push(u.envMapMode),h.push(u.envMapCubeUVHeight),h.push(u.mapUv),h.push(u.alphaMapUv),h.push(u.lightMapUv),h.push(u.aoMapUv),h.push(u.bumpMapUv),h.push(u.normalMapUv),h.push(u.displacementMapUv),h.push(u.emissiveMapUv),h.push(u.metalnessMapUv),h.push(u.roughnessMapUv),h.push(u.anisotropyMapUv),h.push(u.clearcoatMapUv),h.push(u.clearcoatNormalMapUv),h.push(u.clearcoatRoughnessMapUv),h.push(u.iridescenceMapUv),h.push(u.iridescenceThicknessMapUv),h.push(u.sheenColorMapUv),h.push(u.sheenRoughnessMapUv),h.push(u.specularMapUv),h.push(u.specularColorMapUv),h.push(u.specularIntensityMapUv),h.push(u.transmissionMapUv),h.push(u.thicknessMapUv),h.push(u.combine),h.push(u.fogExp2),h.push(u.sizeAttenuation),h.push(u.morphTargetsCount),h.push(u.morphAttributeCount),h.push(u.numDirLights),h.push(u.numPointLights),h.push(u.numSpotLights),h.push(u.numSpotLightMaps),h.push(u.numHemiLights),h.push(u.numRectAreaLights),h.push(u.numDirLightShadows),h.push(u.numPointLightShadows),h.push(u.numSpotLightShadows),h.push(u.numSpotLightShadowsWithMaps),h.push(u.numLightProbes),h.push(u.shadowMapType),h.push(u.toneMapping),h.push(u.numClippingPlanes),h.push(u.numClipIntersection),h.push(u.depthPacking)}function A(h,u){f.disableAll(),u.supportsVertexTextures&&f.enable(0),u.instancing&&f.enable(1),u.instancingColor&&f.enable(2),u.instancingMorph&&f.enable(3),u.matcap&&f.enable(4),u.envMap&&f.enable(5),u.normalMapObjectSpace&&f.enable(6),u.normalMapTangentSpace&&f.enable(7),u.clearcoat&&f.enable(8),u.iridescence&&f.enable(9),u.alphaTest&&f.enable(10),u.vertexColors&&f.enable(11),u.vertexAlphas&&f.enable(12),u.vertexUv1s&&f.enable(13),u.vertexUv2s&&f.enable(14),u.vertexUv3s&&f.enable(15),u.vertexTangents&&f.enable(16),u.anisotropy&&f.enable(17),u.alphaHash&&f.enable(18),u.batching&&f.enable(19),u.dispersion&&f.enable(20),u.batchingColor&&f.enable(21),h.push(f.mask),f.disableAll(),u.fog&&f.enable(0),u.useFog&&f.enable(1),u.flatShading&&f.enable(2),u.logarithmicDepthBuffer&&f.enable(3),u.reverseDepthBuffer&&f.enable(4),u.skinning&&f.enable(5),u.morphTargets&&f.enable(6),u.morphNormals&&f.enable(7),u.morphColors&&f.enable(8),u.premultipliedAlpha&&f.enable(9),u.shadowMapEnabled&&f.enable(10),u.doubleSided&&f.enable(11),u.flipSided&&f.enable(12),u.useDepthPacking&&f.enable(13),u.dithering&&f.enable(14),u.transmission&&f.enable(15),u.sheen&&f.enable(16),u.opaque&&f.enable(17),u.pointsUvs&&f.enable(18),u.decodeVideoTexture&&f.enable(19),u.decodeVideoTextureEmissive&&f.enable(20),u.alphaToCoverage&&f.enable(21),h.push(f.mask)}function _(h){const u=N[h.type];let T;if(u){const Y=Et[u];T=Ka.clone(Y.uniforms)}else T=h.uniforms;return T}function G(h,u){let T;for(let Y=0,H=C.length;Y<H;Y++){const q=C[Y];if(q.cacheKey===u){T=q,++T.usedTimes;break}}return T===void 0&&(T=new Uf(e,u,h,o),C.push(T)),T}function P(h){if(--h.usedTimes===0){const u=C.indexOf(h);C[u]=C[C.length-1],C.pop(),h.destroy()}}function y(h){b.remove(h)}function F(){b.dispose()}return{getParameters:l,getProgramCacheKey:r,getUniforms:_,acquireProgram:G,releaseProgram:P,releaseShaderCache:y,programs:C,dispose:F}}function Of(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let f=e.get(d);return f===void 0&&(f={},e.set(d,f)),f}function i(d){e.delete(d)}function c(d,f,b){e.get(d)[f]=b}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:c,dispose:o}}function Ff(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function fr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ur(){const e=[];let n=0;const t=[],i=[],c=[];function o(){n=0,t.length=0,i.length=0,c.length=0}function d(R,S,v,N,L,l){let r=e[n];return r===void 0?(r={id:R.id,object:R,geometry:S,material:v,groupOrder:N,renderOrder:R.renderOrder,z:L,group:l},e[n]=r):(r.id=R.id,r.object=R,r.geometry=S,r.material=v,r.groupOrder=N,r.renderOrder=R.renderOrder,r.z=L,r.group=l),n++,r}function f(R,S,v,N,L,l){const r=d(R,S,v,N,L,l);v.transmission>0?i.push(r):v.transparent===!0?c.push(r):t.push(r)}function b(R,S,v,N,L,l){const r=d(R,S,v,N,L,l);v.transmission>0?i.unshift(r):v.transparent===!0?c.unshift(r):t.unshift(r)}function g(R,S){t.length>1&&t.sort(R||Ff),i.length>1&&i.sort(S||fr),c.length>1&&c.sort(S||fr)}function C(){for(let R=n,S=e.length;R<S;R++){const v=e[R];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:c,init:o,push:f,unshift:b,finish:C,sort:g}}function Bf(){let e=new WeakMap;function n(i,c){const o=e.get(i);let d;return o===void 0?(d=new ur,e.set(i,[d])):c>=o.length?(d=new ur,o.push(d)):d=o[c],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function Gf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Ge,color:new Ke};break;case"SpotLight":t={position:new Ge,direction:new Ge,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ge,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ge,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new Ge,halfWidth:new Ge,halfHeight:new Ge};break}return e[n.id]=t,t}}}function Hf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Vf=0;function kf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function zf(e){const n=new Gf,t=Hf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)i.probe.push(new Ge);const c=new Ge,o=new Wt,d=new Wt;function f(g){let C=0,R=0,S=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let v=0,N=0,L=0,l=0,r=0,D=0,A=0,_=0,G=0,P=0,y=0;g.sort(kf);for(let h=0,u=g.length;h<u;h++){const T=g[h],Y=T.color,H=T.intensity,q=T.distance,Q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)C+=Y.r*H,R+=Y.g*H,S+=Y.b*H;else if(T.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(T.sh.coefficients[z],H);y++}else if(T.isDirectionalLight){const z=n.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const j=T.shadow,B=t.get(T);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.directionalShadow[v]=B,i.directionalShadowMap[v]=Q,i.directionalShadowMatrix[v]=T.shadow.matrix,D++}i.directional[v]=z,v++}else if(T.isSpotLight){const z=n.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(Y).multiplyScalar(H),z.distance=q,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,i.spot[L]=z;const j=T.shadow;if(T.map&&(i.spotLightMap[G]=T.map,G++,j.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[L]=j.matrix,T.castShadow){const B=t.get(T);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.spotShadow[L]=B,i.spotShadowMap[L]=Q,_++}L++}else if(T.isRectAreaLight){const z=n.get(T);z.color.copy(Y).multiplyScalar(H),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),i.rectArea[l]=z,l++}else if(T.isPointLight){const z=n.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const j=T.shadow,B=t.get(T);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,i.pointShadow[N]=B,i.pointShadowMap[N]=Q,i.pointShadowMatrix[N]=T.shadow.matrix,A++}i.point[N]=z,N++}else if(T.isHemisphereLight){const z=n.get(T);z.skyColor.copy(T.color).multiplyScalar(H),z.groundColor.copy(T.groundColor).multiplyScalar(H),i.hemi[r]=z,r++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=C,i.ambient[1]=R,i.ambient[2]=S;const F=i.hash;(F.directionalLength!==v||F.pointLength!==N||F.spotLength!==L||F.rectAreaLength!==l||F.hemiLength!==r||F.numDirectionalShadows!==D||F.numPointShadows!==A||F.numSpotShadows!==_||F.numSpotMaps!==G||F.numLightProbes!==y)&&(i.directional.length=v,i.spot.length=L,i.rectArea.length=l,i.point.length=N,i.hemi.length=r,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=_+G-P,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=y,F.directionalLength=v,F.pointLength=N,F.spotLength=L,F.rectAreaLength=l,F.hemiLength=r,F.numDirectionalShadows=D,F.numPointShadows=A,F.numSpotShadows=_,F.numSpotMaps=G,F.numLightProbes=y,i.version=Vf++)}function b(g,C){let R=0,S=0,v=0,N=0,L=0;const l=C.matrixWorldInverse;for(let r=0,D=g.length;r<D;r++){const A=g[r];if(A.isDirectionalLight){const _=i.directional[R];_.direction.setFromMatrixPosition(A.matrixWorld),c.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(c),_.direction.transformDirection(l),R++}else if(A.isSpotLight){const _=i.spot[v];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(l),_.direction.setFromMatrixPosition(A.matrixWorld),c.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(c),_.direction.transformDirection(l),v++}else if(A.isRectAreaLight){const _=i.rectArea[N];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(l),d.identity(),o.copy(A.matrixWorld),o.premultiply(l),d.extractRotation(o),_.halfWidth.set(A.width*.5,0,0),_.halfHeight.set(0,A.height*.5,0),_.halfWidth.applyMatrix4(d),_.halfHeight.applyMatrix4(d),N++}else if(A.isPointLight){const _=i.point[S];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(l),S++}else if(A.isHemisphereLight){const _=i.hemi[L];_.direction.setFromMatrixPosition(A.matrixWorld),_.direction.transformDirection(l),L++}}}return{setup:f,setupView:b,state:i}}function dr(e){const n=new zf(e),t=[],i=[];function c(C){g.camera=C,t.length=0,i.length=0}function o(C){t.push(C)}function d(C){i.push(C)}function f(){n.setup(t)}function b(C){n.setupView(t,C)}const g={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:g,setupLights:f,setupLightsView:b,pushLight:o,pushShadow:d}}function Wf(e){let n=new WeakMap;function t(c,o=0){const d=n.get(c);let f;return d===void 0?(f=new dr(e),n.set(c,[f])):o>=d.length?(f=new dr(e),d.push(f)):f=d[o],f}function i(){n=new WeakMap}return{get:t,dispose:i}}const Xf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qf(e,n,t){let i=new _r;const c=new ft,o=new ft,d=new lt,f=new Ia({depthPacking:ya}),b=new Na,g={},C=t.maxTextureSize,R={[en]:_t,[_t]:en,[Tt]:Tt},S=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Xf,fragmentShader:Yf}),v=S.clone();v.defines.HORIZONTAL_PASS=1;const N=new Er;N.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new At(N,S),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let r=this.type;this.render=function(P,y,F){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||P.length===0)return;const h=e.getRenderTarget(),u=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),Y=e.state;Y.setBlending(It),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const H=r!==Mt&&this.type===Mt,q=r===Mt&&this.type!==Mt;for(let Q=0,z=P.length;Q<z;Q++){const j=P[Q],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;c.copy(B.mapSize);const me=B.getFrameExtents();if(c.multiply(me),o.copy(B.mapSize),(c.x>C||c.y>C)&&(c.x>C&&(o.x=Math.floor(C/me.x),c.x=o.x*me.x,B.mapSize.x=o.x),c.y>C&&(o.y=Math.floor(C/me.y),c.y=o.y*me.y,B.mapSize.y=o.y)),B.map===null||H===!0||q===!0){const Le=this.type!==Mt?{minFilter:jt,magFilter:jt}:{};B.map!==null&&B.map.dispose(),B.map=new Xt(c.x,c.y,Le),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const Se=B.getViewportCount();for(let Le=0;Le<Se;Le++){const He=B.getViewport(Le);d.set(o.x*He.x,o.y*He.y,o.x*He.z,o.y*He.w),Y.viewport(d),B.updateMatrices(j,Le),i=B.getFrustum(),_(y,F,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===Mt&&D(B,F),B.needsUpdate=!1}r=this.type,l.needsUpdate=!1,e.setRenderTarget(h,u,T)};function D(P,y){const F=n.update(L);S.defines.VSM_SAMPLES!==P.blurSamples&&(S.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,S.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xt(c.x,c.y)),S.uniforms.shadow_pass.value=P.map.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(y,null,F,S,L,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(y,null,F,v,L,null)}function A(P,y,F,h){let u=null;const T=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)u=T;else if(u=F.isPointLight===!0?b:f,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const Y=u.uuid,H=y.uuid;let q=g[Y];q===void 0&&(q={},g[Y]=q);let Q=q[H];Q===void 0&&(Q=u.clone(),q[H]=Q,y.addEventListener("dispose",G)),u=Q}if(u.visible=y.visible,u.wireframe=y.wireframe,h===Mt?u.side=y.shadowSide!==null?y.shadowSide:y.side:u.side=y.shadowSide!==null?y.shadowSide:R[y.side],u.alphaMap=y.alphaMap,u.alphaTest=y.alphaTest,u.map=y.map,u.clipShadows=y.clipShadows,u.clippingPlanes=y.clippingPlanes,u.clipIntersection=y.clipIntersection,u.displacementMap=y.displacementMap,u.displacementScale=y.displacementScale,u.displacementBias=y.displacementBias,u.wireframeLinewidth=y.wireframeLinewidth,u.linewidth=y.linewidth,F.isPointLight===!0&&u.isMeshDistanceMaterial===!0){const Y=e.properties.get(u);Y.light=F}return u}function _(P,y,F,h,u){if(P.visible===!1)return;if(P.layers.test(y.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&u===Mt)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const H=n.update(P),q=P.material;if(Array.isArray(q)){const Q=H.groups;for(let z=0,j=Q.length;z<j;z++){const B=Q[z],me=q[B.materialIndex];if(me&&me.visible){const Se=A(P,me,h,u);P.onBeforeShadow(e,P,y,F,H,Se,B),e.renderBufferDirect(F,null,H,Se,P,B),P.onAfterShadow(e,P,y,F,H,Se,B)}}}else if(q.visible){const Q=A(P,q,h,u);P.onBeforeShadow(e,P,y,F,H,Q,null),e.renderBufferDirect(F,null,H,Q,P,null),P.onAfterShadow(e,P,y,F,H,Q,null)}}const Y=P.children;for(let H=0,q=Y.length;H<q;H++)_(Y[H],y,F,h,u)}function G(P){P.target.removeEventListener("dispose",G);for(const F in g){const h=g[F],u=P.target.uuid;u in h&&(h[u].dispose(),delete h[u])}}}const Kf={[Wn]:zn,[kn]:Gn,[Vn]:Bn,[_n]:Hn,[zn]:Wn,[Gn]:kn,[Bn]:Vn,[Hn]:_n};function $f(e,n){function t(){let E=!1;const te=new lt;let O=null;const X=new lt(0,0,0,0);return{setMask:function(oe){O!==oe&&!E&&(e.colorMask(oe,oe,oe,oe),O=oe)},setLocked:function(oe){E=oe},setClear:function(oe,ae,Ce,Qe,at){at===!0&&(oe*=Qe,ae*=Qe,Ce*=Qe),te.set(oe,ae,Ce,Qe),X.equals(te)===!1&&(e.clearColor(oe,ae,Ce,Qe),X.copy(te))},reset:function(){E=!1,O=null,X.set(-1,0,0,0)}}}function i(){let E=!1,te=!1,O=null,X=null,oe=null;return{setReversed:function(ae){if(te!==ae){const Ce=n.get("EXT_clip_control");te?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const Qe=oe;oe=null,this.setClear(Qe)}te=ae},getReversed:function(){return te},setTest:function(ae){ae?ie(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(ae){O!==ae&&!E&&(e.depthMask(ae),O=ae)},setFunc:function(ae){if(te&&(ae=Kf[ae]),X!==ae){switch(ae){case Wn:e.depthFunc(e.NEVER);break;case zn:e.depthFunc(e.ALWAYS);break;case kn:e.depthFunc(e.LESS);break;case _n:e.depthFunc(e.LEQUAL);break;case Vn:e.depthFunc(e.EQUAL);break;case Hn:e.depthFunc(e.GEQUAL);break;case Gn:e.depthFunc(e.GREATER);break;case Bn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}X=ae}},setLocked:function(ae){E=ae},setClear:function(ae){oe!==ae&&(te&&(ae=1-ae),e.clearDepth(ae),oe=ae)},reset:function(){E=!1,O=null,X=null,oe=null,te=!1}}}function c(){let E=!1,te=null,O=null,X=null,oe=null,ae=null,Ce=null,Qe=null,at=null;return{setTest:function(ze){E||(ze?ie(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(ze){te!==ze&&!E&&(e.stencilMask(ze),te=ze)},setFunc:function(ze,vt,St){(O!==ze||X!==vt||oe!==St)&&(e.stencilFunc(ze,vt,St),O=ze,X=vt,oe=St)},setOp:function(ze,vt,St){(ae!==ze||Ce!==vt||Qe!==St)&&(e.stencilOp(ze,vt,St),ae=ze,Ce=vt,Qe=St)},setLocked:function(ze){E=ze},setClear:function(ze){at!==ze&&(e.clearStencil(ze),at=ze)},reset:function(){E=!1,te=null,O=null,X=null,oe=null,ae=null,Ce=null,Qe=null,at=null}}}const o=new t,d=new i,f=new c,b=new WeakMap,g=new WeakMap;let C={},R={},S=new WeakMap,v=[],N=null,L=!1,l=null,r=null,D=null,A=null,_=null,G=null,P=null,y=new Ke(0,0,0),F=0,h=!1,u=null,T=null,Y=null,H=null,q=null;const Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=j>=2);let me=null,Se={};const Le=e.getParameter(e.SCISSOR_BOX),He=e.getParameter(e.VIEWPORT),Ze=new lt().fromArray(Le),k=new lt().fromArray(He);function J(E,te,O,X){const oe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(E,ae),e.texParameteri(E,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(E,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ce=0;Ce<O;Ce++)E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,X,0,e.RGBA,e.UNSIGNED_BYTE,oe):e.texImage2D(te+Ce,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return ae}const de={};de[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ie(e.DEPTH_TEST),d.setFunc(_n),Ue(!1),De(go),ie(e.CULL_FACE),m(It);function ie(E){C[E]!==!0&&(e.enable(E),C[E]=!0)}function Me(E){C[E]!==!1&&(e.disable(E),C[E]=!1)}function Be(E,te){return R[E]!==te?(e.bindFramebuffer(E,te),R[E]=te,E===e.DRAW_FRAMEBUFFER&&(R[e.FRAMEBUFFER]=te),E===e.FRAMEBUFFER&&(R[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(E,te){let O=v,X=!1;if(E){O=S.get(te),O===void 0&&(O=[],S.set(te,O));const oe=E.textures;if(O.length!==oe.length||O[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Ce=oe.length;ae<Ce;ae++)O[ae]=e.COLOR_ATTACHMENT0+ae;O.length=oe.length,X=!0}}else O[0]!==e.BACK&&(O[0]=e.BACK,X=!0);X&&e.drawBuffers(O)}function je(E){return N!==E?(e.useProgram(E),N=E,!0):!1}const $e={[$t]:e.FUNC_ADD,[aa]:e.FUNC_SUBTRACT,[ra]:e.FUNC_REVERSE_SUBTRACT};$e[Eo]=e.MIN,$e[So]=e.MAX;const we={[Sa]:e.ZERO,[Ea]:e.ONE,[ga]:e.SRC_COLOR,[va]:e.SRC_ALPHA,[_a]:e.SRC_ALPHA_SATURATE,[ma]:e.DST_COLOR,[ha]:e.DST_ALPHA,[pa]:e.ONE_MINUS_SRC_COLOR,[da]:e.ONE_MINUS_SRC_ALPHA,[ua]:e.ONE_MINUS_DST_COLOR,[fa]:e.ONE_MINUS_DST_ALPHA,[la]:e.CONSTANT_COLOR,[ca]:e.ONE_MINUS_CONSTANT_COLOR,[sa]:e.CONSTANT_ALPHA,[oa]:e.ONE_MINUS_CONSTANT_ALPHA};function m(E,te,O,X,oe,ae,Ce,Qe,at,ze){if(E===It){L===!0&&(Me(e.BLEND),L=!1);return}if(L===!1&&(ie(e.BLEND),L=!0),E!==Ya){if(E!==l||ze!==h){if((r!==$t||_!==$t)&&(e.blendEquation(e.FUNC_ADD),r=$t,_=$t),ze)switch(E){case pn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gi:e.blendFunc(e.ONE,e.ONE);break;case Bi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Fi:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case pn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gi:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Bi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Fi:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}D=null,A=null,G=null,P=null,y.set(0,0,0),F=0,l=E,h=ze}return}oe=oe||te,ae=ae||O,Ce=Ce||X,(te!==r||oe!==_)&&(e.blendEquationSeparate($e[te],$e[oe]),r=te,_=oe),(O!==D||X!==A||ae!==G||Ce!==P)&&(e.blendFuncSeparate(we[O],we[X],we[ae],we[Ce]),D=O,A=X,G=ae,P=Ce),(Qe.equals(y)===!1||at!==F)&&(e.blendColor(Qe.r,Qe.g,Qe.b,at),y.copy(Qe),F=at),l=E,h=!1}function pt(E,te){E.side===Tt?Me(e.CULL_FACE):ie(e.CULL_FACE);let O=E.side===_t;te&&(O=!O),Ue(O),E.blending===pn&&E.transparent===!1?m(It):m(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),d.setFunc(E.depthFunc),d.setTest(E.depthTest),d.setMask(E.depthWrite),o.setMask(E.colorWrite);const X=E.stencilWrite;f.setTest(X),X&&(f.setMask(E.stencilWriteMask),f.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),f.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Xe(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(E){u!==E&&(E?e.frontFace(e.CW):e.frontFace(e.CCW),u=E)}function De(E){ie(e.CULL_FACE),E!==T&&e.cullFace(e.BACK),T=E}function _e(E){E!==Y&&(z&&e.lineWidth(E),Y=E)}function Xe(E,te,O){E?(ie(e.POLYGON_OFFSET_FILL),(H!==te||q!==O)&&(e.polygonOffset(te,O),H=te,q=O)):Me(e.POLYGON_OFFSET_FILL)}function he(E){E?ie(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function p(E){E===void 0&&(E=e.TEXTURE0+Q-1),me!==E&&(e.activeTexture(E),me=E)}function a(E,te,O){O===void 0&&(me===null?O=e.TEXTURE0+Q-1:O=me);let X=Se[O];X===void 0&&(X={type:void 0,texture:void 0},Se[O]=X),(X.type!==E||X.texture!==te)&&(me!==O&&(e.activeTexture(O),me=O),e.bindTexture(E,te||de[E]),X.type=E,X.texture=te)}function w(){const E=Se[me];E!==void 0&&E.type!==void 0&&(e.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function W(){try{e.compressedTexImage2D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function K(){try{e.compressedTexImage3D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function V(){try{e.texSubImage2D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function pe(){try{e.texSubImage3D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function re(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ce(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ye(){try{e.texStorage2D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Z(){try{e.texStorage3D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{e.texImage2D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ee(){try{e.texImage3D.apply(e,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function xe(E){Ze.equals(E)===!1&&(e.scissor(E.x,E.y,E.z,E.w),Ze.copy(E))}function fe(E){k.equals(E)===!1&&(e.viewport(E.x,E.y,E.z,E.w),k.copy(E))}function Ie(E,te){let O=g.get(te);O===void 0&&(O=new WeakMap,g.set(te,O));let X=O.get(E);X===void 0&&(X=e.getUniformBlockIndex(te,E.name),O.set(E,X))}function be(E,te){const X=g.get(te).get(E);b.get(te)!==X&&(e.uniformBlockBinding(te,X,E.__bindingPointIndex),b.set(te,X))}function We(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),C={},me=null,Se={},R={},S=new WeakMap,v=[],N=null,L=!1,l=null,r=null,D=null,A=null,_=null,G=null,P=null,y=new Ke(0,0,0),F=0,h=!1,u=null,T=null,Y=null,H=null,q=null,Ze.set(0,0,e.canvas.width,e.canvas.height),k.set(0,0,e.canvas.width,e.canvas.height),o.reset(),d.reset(),f.reset()}return{buffers:{color:o,depth:d,stencil:f},enable:ie,disable:Me,bindFramebuffer:Be,drawBuffers:Te,useProgram:je,setBlending:m,setMaterial:pt,setFlipSided:Ue,setCullFace:De,setLineWidth:_e,setPolygonOffset:Xe,setScissorTest:he,activeTexture:p,bindTexture:a,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:K,texImage2D:le,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:be,texStorage2D:ye,texStorage3D:Z,texSubImage2D:V,texSubImage3D:pe,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:xe,viewport:fe,reset:We}}function Zf(e,n,t,i,c,o,d){const f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,b=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ft,C=new WeakMap;let R;const S=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(p,a){return v?new OffscreenCanvas(p,a):ho("canvas")}function L(p,a,w){let W=1;const K=he(p);if((K.width>w||K.height>w)&&(W=w/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const V=Math.floor(W*K.width),pe=Math.floor(W*K.height);R===void 0&&(R=N(V,pe));const re=a?N(V,pe):R;return re.width=V,re.height=pe,re.getContext("2d").drawImage(p,0,0,V,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+pe+")."),re}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),p;return p}function l(p){return p.generateMipmaps}function r(p){e.generateMipmap(p)}function D(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(p,a,w,W,K=!1){if(p!==null){if(e[p]!==void 0)return e[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let V=a;if(a===e.RED&&(w===e.FLOAT&&(V=e.R32F),w===e.HALF_FLOAT&&(V=e.R16F),w===e.UNSIGNED_BYTE&&(V=e.R8)),a===e.RED_INTEGER&&(w===e.UNSIGNED_BYTE&&(V=e.R8UI),w===e.UNSIGNED_SHORT&&(V=e.R16UI),w===e.UNSIGNED_INT&&(V=e.R32UI),w===e.BYTE&&(V=e.R8I),w===e.SHORT&&(V=e.R16I),w===e.INT&&(V=e.R32I)),a===e.RG&&(w===e.FLOAT&&(V=e.RG32F),w===e.HALF_FLOAT&&(V=e.RG16F),w===e.UNSIGNED_BYTE&&(V=e.RG8)),a===e.RG_INTEGER&&(w===e.UNSIGNED_BYTE&&(V=e.RG8UI),w===e.UNSIGNED_SHORT&&(V=e.RG16UI),w===e.UNSIGNED_INT&&(V=e.RG32UI),w===e.BYTE&&(V=e.RG8I),w===e.SHORT&&(V=e.RG16I),w===e.INT&&(V=e.RG32I)),a===e.RGB_INTEGER&&(w===e.UNSIGNED_BYTE&&(V=e.RGB8UI),w===e.UNSIGNED_SHORT&&(V=e.RGB16UI),w===e.UNSIGNED_INT&&(V=e.RGB32UI),w===e.BYTE&&(V=e.RGB8I),w===e.SHORT&&(V=e.RGB16I),w===e.INT&&(V=e.RGB32I)),a===e.RGBA_INTEGER&&(w===e.UNSIGNED_BYTE&&(V=e.RGBA8UI),w===e.UNSIGNED_SHORT&&(V=e.RGBA16UI),w===e.UNSIGNED_INT&&(V=e.RGBA32UI),w===e.BYTE&&(V=e.RGBA8I),w===e.SHORT&&(V=e.RGBA16I),w===e.INT&&(V=e.RGBA32I)),a===e.RGB&&w===e.UNSIGNED_INT_5_9_9_9_REV&&(V=e.RGB9_E5),a===e.RGBA){const pe=K?Dr:tt.getTransfer(W);w===e.FLOAT&&(V=e.RGBA32F),w===e.HALF_FLOAT&&(V=e.RGBA16F),w===e.UNSIGNED_BYTE&&(V=pe===Ye?e.SRGB8_ALPHA8:e.RGBA8),w===e.UNSIGNED_SHORT_4_4_4_4&&(V=e.RGBA4),w===e.UNSIGNED_SHORT_5_5_5_1&&(V=e.RGB5_A1)}return(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)&&n.get("EXT_color_buffer_float"),V}function _(p,a){let w;return p?a===null||a===nn||a===tn?w=e.DEPTH24_STENCIL8:a===Dt?w=e.DEPTH32F_STENCIL8:a===vn&&(w=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===nn||a===tn?w=e.DEPTH_COMPONENT24:a===Dt?w=e.DEPTH_COMPONENT32F:a===vn&&(w=e.DEPTH_COMPONENT16),w}function G(p,a){return l(p)===!0||p.isFramebufferTexture&&p.minFilter!==jt&&p.minFilter!==kt?Math.log2(Math.max(a.width,a.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?a.mipmaps.length:1}function P(p){const a=p.target;a.removeEventListener("dispose",P),F(a),a.isVideoTexture&&C.delete(a)}function y(p){const a=p.target;a.removeEventListener("dispose",y),u(a)}function F(p){const a=i.get(p);if(a.__webglInit===void 0)return;const w=p.source,W=S.get(w);if(W){const K=W[a.__cacheKey];K.usedTimes--,K.usedTimes===0&&h(p),Object.keys(W).length===0&&S.delete(w)}i.remove(p)}function h(p){const a=i.get(p);e.deleteTexture(a.__webglTexture);const w=p.source,W=S.get(w);delete W[a.__cacheKey],d.memory.textures--}function u(p){const a=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(a.__webglFramebuffer[W]))for(let K=0;K<a.__webglFramebuffer[W].length;K++)e.deleteFramebuffer(a.__webglFramebuffer[W][K]);else e.deleteFramebuffer(a.__webglFramebuffer[W]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[W])}else{if(Array.isArray(a.__webglFramebuffer))for(let W=0;W<a.__webglFramebuffer.length;W++)e.deleteFramebuffer(a.__webglFramebuffer[W]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let W=0;W<a.__webglColorRenderbuffer.length;W++)a.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[W]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const w=p.textures;for(let W=0,K=w.length;W<K;W++){const V=i.get(w[W]);V.__webglTexture&&(e.deleteTexture(V.__webglTexture),d.memory.textures--),i.remove(w[W])}i.remove(p)}let T=0;function Y(){T=0}function H(){const p=T;return p>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+c.maxTextures),T+=1,p}function q(p){const a=[];return a.push(p.wrapS),a.push(p.wrapT),a.push(p.wrapR||0),a.push(p.magFilter),a.push(p.minFilter),a.push(p.anisotropy),a.push(p.internalFormat),a.push(p.format),a.push(p.type),a.push(p.generateMipmaps),a.push(p.premultiplyAlpha),a.push(p.flipY),a.push(p.unpackAlignment),a.push(p.colorSpace),a.join()}function Q(p,a){const w=i.get(p);if(p.isVideoTexture&&_e(p),p.isRenderTargetTexture===!1&&p.version>0&&w.__version!==p.version){const W=p.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(w,p,a);return}}t.bindTexture(e.TEXTURE_2D,w.__webglTexture,e.TEXTURE0+a)}function z(p,a){const w=i.get(p);if(p.version>0&&w.__version!==p.version){k(w,p,a);return}t.bindTexture(e.TEXTURE_2D_ARRAY,w.__webglTexture,e.TEXTURE0+a)}function j(p,a){const w=i.get(p);if(p.version>0&&w.__version!==p.version){k(w,p,a);return}t.bindTexture(e.TEXTURE_3D,w.__webglTexture,e.TEXTURE0+a)}function B(p,a){const w=i.get(p);if(p.version>0&&w.__version!==p.version){J(w,p,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+a)}const me={[xa]:e.REPEAT,[Ta]:e.CLAMP_TO_EDGE,[Ma]:e.MIRRORED_REPEAT},Se={[jt]:e.NEAREST,[Aa]:e.NEAREST_MIPMAP_NEAREST,[sn]:e.NEAREST_MIPMAP_LINEAR,[kt]:e.LINEAR,[Cn]:e.LINEAR_MIPMAP_NEAREST,[Zt]:e.LINEAR_MIPMAP_LINEAR},Le={[Ua]:e.NEVER,[wa]:e.ALWAYS,[La]:e.LESS,[gr]:e.LEQUAL,[Pa]:e.EQUAL,[ba]:e.GEQUAL,[Ca]:e.GREATER,[Ra]:e.NOTEQUAL};function He(p,a){if(a.type===Dt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===kt||a.magFilter===Cn||a.magFilter===sn||a.magFilter===Zt||a.minFilter===kt||a.minFilter===Cn||a.minFilter===sn||a.minFilter===Zt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,me[a.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,Se[a.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,Se[a.minFilter]),a.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,Le[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===jt||a.minFilter!==sn&&a.minFilter!==Zt||a.type===Dt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const w=n.get("EXT_texture_filter_anisotropic");e.texParameterf(p,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,c.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Ze(p,a){let w=!1;p.__webglInit===void 0&&(p.__webglInit=!0,a.addEventListener("dispose",P));const W=a.source;let K=S.get(W);K===void 0&&(K={},S.set(W,K));const V=q(a);if(V!==p.__cacheKey){K[V]===void 0&&(K[V]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,w=!0),K[V].usedTimes++;const pe=K[p.__cacheKey];pe!==void 0&&(K[p.__cacheKey].usedTimes--,pe.usedTimes===0&&h(a)),p.__cacheKey=V,p.__webglTexture=K[V].texture}return w}function k(p,a,w){let W=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(W=e.TEXTURE_3D);const K=Ze(p,a),V=a.source;t.bindTexture(W,p.__webglTexture,e.TEXTURE0+w);const pe=i.get(V);if(V.version!==pe.__version||K===!0){t.activeTexture(e.TEXTURE0+w);const re=tt.getPrimaries(tt.workingColorSpace),ce=a.colorSpace===Vt?null:tt.getPrimaries(a.colorSpace),ye=a.colorSpace===Vt||re===ce?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Z=L(a.image,!1,c.maxTextureSize);Z=Xe(a,Z);const le=o.convert(a.format,a.colorSpace),Ee=o.convert(a.type);let xe=A(a.internalFormat,le,Ee,a.colorSpace,a.isVideoTexture);He(W,a);let fe;const Ie=a.mipmaps,be=a.isVideoTexture!==!0,We=pe.__version===void 0||K===!0,E=V.dataReady,te=G(a,Z);if(a.isDepthTexture)xe=_(a.format===mn,a.type),We&&(be?t.texStorage2D(e.TEXTURE_2D,1,xe,Z.width,Z.height):t.texImage2D(e.TEXTURE_2D,0,xe,Z.width,Z.height,0,le,Ee,null));else if(a.isDataTexture)if(Ie.length>0){be&&We&&t.texStorage2D(e.TEXTURE_2D,te,xe,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],be?E&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,le,Ee,fe.data):t.texImage2D(e.TEXTURE_2D,O,xe,fe.width,fe.height,0,le,Ee,fe.data);a.generateMipmaps=!1}else be?(We&&t.texStorage2D(e.TEXTURE_2D,te,xe,Z.width,Z.height),E&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,Z.width,Z.height,le,Ee,Z.data)):t.texImage2D(e.TEXTURE_2D,0,xe,Z.width,Z.height,0,le,Ee,Z.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){be&&We&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,xe,Ie[0].width,Ie[0].height,Z.depth);for(let O=0,X=Ie.length;O<X;O++)if(fe=Ie[O],a.format!==xt)if(le!==null)if(be){if(E)if(a.layerUpdates.size>0){const oe=Vi(fe.width,fe.height,a.format,a.type);for(const ae of a.layerUpdates){const Ce=fe.data.subarray(ae*oe/fe.data.BYTES_PER_ELEMENT,(ae+1)*oe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,ae,fe.width,fe.height,1,le,Ce)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,Z.depth,le,fe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,O,xe,fe.width,fe.height,Z.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?E&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,Z.depth,le,Ee,fe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,O,xe,fe.width,fe.height,Z.depth,0,le,Ee,fe.data)}else{be&&We&&t.texStorage2D(e.TEXTURE_2D,te,xe,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],a.format!==xt?le!==null?be?E&&t.compressedTexSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,le,fe.data):t.compressedTexImage2D(e.TEXTURE_2D,O,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?E&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,le,Ee,fe.data):t.texImage2D(e.TEXTURE_2D,O,xe,fe.width,fe.height,0,le,Ee,fe.data)}else if(a.isDataArrayTexture)if(be){if(We&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,xe,Z.width,Z.height,Z.depth),E)if(a.layerUpdates.size>0){const O=Vi(Z.width,Z.height,a.format,a.type);for(const X of a.layerUpdates){const oe=Z.data.subarray(X*O/Z.data.BYTES_PER_ELEMENT,(X+1)*O/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,X,Z.width,Z.height,1,le,Ee,oe)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Ee,Z.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,le,Ee,Z.data);else if(a.isData3DTexture)be?(We&&t.texStorage3D(e.TEXTURE_3D,te,xe,Z.width,Z.height,Z.depth),E&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Ee,Z.data)):t.texImage3D(e.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,le,Ee,Z.data);else if(a.isFramebufferTexture){if(We)if(be)t.texStorage2D(e.TEXTURE_2D,te,xe,Z.width,Z.height);else{let O=Z.width,X=Z.height;for(let oe=0;oe<te;oe++)t.texImage2D(e.TEXTURE_2D,oe,xe,O,X,0,le,Ee,null),O>>=1,X>>=1}}else if(Ie.length>0){if(be&&We){const O=he(Ie[0]);t.texStorage2D(e.TEXTURE_2D,te,xe,O.width,O.height)}for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],be?E&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,le,Ee,fe):t.texImage2D(e.TEXTURE_2D,O,xe,le,Ee,fe);a.generateMipmaps=!1}else if(be){if(We){const O=he(Z);t.texStorage2D(e.TEXTURE_2D,te,xe,O.width,O.height)}E&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,le,Ee,Z)}else t.texImage2D(e.TEXTURE_2D,0,xe,le,Ee,Z);l(a)&&r(W),pe.__version=V.version,a.onUpdate&&a.onUpdate(a)}p.__version=a.version}function J(p,a,w){if(a.image.length!==6)return;const W=Ze(p,a),K=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+w);const V=i.get(K);if(K.version!==V.__version||W===!0){t.activeTexture(e.TEXTURE0+w);const pe=tt.getPrimaries(tt.workingColorSpace),re=a.colorSpace===Vt?null:tt.getPrimaries(a.colorSpace),ce=a.colorSpace===Vt||pe===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ye=a.isCompressedTexture||a.image[0].isCompressedTexture,Z=a.image[0]&&a.image[0].isDataTexture,le=[];for(let X=0;X<6;X++)!ye&&!Z?le[X]=L(a.image[X],!0,c.maxCubemapSize):le[X]=Z?a.image[X].image:a.image[X],le[X]=Xe(a,le[X]);const Ee=le[0],xe=o.convert(a.format,a.colorSpace),fe=o.convert(a.type),Ie=A(a.internalFormat,xe,fe,a.colorSpace),be=a.isVideoTexture!==!0,We=V.__version===void 0||W===!0,E=K.dataReady;let te=G(a,Ee);He(e.TEXTURE_CUBE_MAP,a);let O;if(ye){be&&We&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,Ee.width,Ee.height);for(let X=0;X<6;X++){O=le[X].mipmaps;for(let oe=0;oe<O.length;oe++){const ae=O[oe];a.format!==xt?xe!==null?be?E&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,xe,ae.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?E&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,xe,fe,ae.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,ae.width,ae.height,0,xe,fe,ae.data)}}}else{if(O=a.mipmaps,be&&We){O.length>0&&te++;const X=he(le[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,X.width,X.height)}for(let X=0;X<6;X++)if(Z){be?E&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,le[X].width,le[X].height,xe,fe,le[X].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,le[X].width,le[X].height,0,xe,fe,le[X].data);for(let oe=0;oe<O.length;oe++){const Ce=O[oe].image[X].image;be?E&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,Ce.width,Ce.height,xe,fe,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,Ce.width,Ce.height,0,xe,fe,Ce.data)}}else{be?E&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,fe,le[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,xe,fe,le[X]);for(let oe=0;oe<O.length;oe++){const ae=O[oe];be?E&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,xe,fe,ae.image[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,xe,fe,ae.image[X])}}}l(a)&&r(e.TEXTURE_CUBE_MAP),V.__version=K.version,a.onUpdate&&a.onUpdate(a)}p.__version=a.version}function de(p,a,w,W,K,V){const pe=o.convert(w.format,w.colorSpace),re=o.convert(w.type),ce=A(w.internalFormat,pe,re,w.colorSpace),ye=i.get(a),Z=i.get(w);if(Z.__renderTarget=a,!ye.__hasExternalTextures){const le=Math.max(1,a.width>>V),Ee=Math.max(1,a.height>>V);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?t.texImage3D(K,V,ce,le,Ee,a.depth,0,pe,re,null):t.texImage2D(K,V,ce,le,Ee,0,pe,re,null)}t.bindFramebuffer(e.FRAMEBUFFER,p),De(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,K,Z.__webglTexture,0,Ue(a)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,K,Z.__webglTexture,V),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(p,a,w){if(e.bindRenderbuffer(e.RENDERBUFFER,p),a.depthBuffer){const W=a.depthTexture,K=W&&W.isDepthTexture?W.type:null,V=_(a.stencilBuffer,K),pe=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=Ue(a);De(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,V,a.width,a.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,V,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,V,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,p)}else{const W=a.textures;for(let K=0;K<W.length;K++){const V=W[K],pe=o.convert(V.format,V.colorSpace),re=o.convert(V.type),ce=A(V.internalFormat,pe,re,V.colorSpace),ye=Ue(a);w&&De(a)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,ce,a.width,a.height):De(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye,ce,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,ce,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(p,a){if(a&&a.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,p),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(a.depthTexture);W.__renderTarget=a,(!W.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),Q(a.depthTexture,0);const K=W.__webglTexture,V=Ue(a);if(a.depthTexture.format===Jn)De(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(a.depthTexture.format===mn)De(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Be(p){const a=i.get(p),w=p.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==p.depthTexture){const W=p.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),W){const K=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),a.__depthDisposeCallback=K}a.__boundDepthTexture=W}if(p.depthTexture&&!a.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Me(a.__webglFramebuffer,p)}else if(w){a.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[W]),a.__webglDepthbuffer[W]===void 0)a.__webglDepthbuffer[W]=e.createRenderbuffer(),ie(a.__webglDepthbuffer[W],p,!1);else{const K=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=a.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,V)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),ie(a.__webglDepthbuffer,p,!1);else{const W=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,W,e.RENDERBUFFER,K)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(p,a,w){const W=i.get(p);a!==void 0&&de(W.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),w!==void 0&&Be(p)}function je(p){const a=p.texture,w=i.get(p),W=i.get(a);p.addEventListener("dispose",y);const K=p.textures,V=p.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=a.version,d.memory.textures++),V){w.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a.mipmaps&&a.mipmaps.length>0){w.__webglFramebuffer[re]=[];for(let ce=0;ce<a.mipmaps.length;ce++)w.__webglFramebuffer[re][ce]=e.createFramebuffer()}else w.__webglFramebuffer[re]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){w.__webglFramebuffer=[];for(let re=0;re<a.mipmaps.length;re++)w.__webglFramebuffer[re]=e.createFramebuffer()}else w.__webglFramebuffer=e.createFramebuffer();if(pe)for(let re=0,ce=K.length;re<ce;re++){const ye=i.get(K[re]);ye.__webglTexture===void 0&&(ye.__webglTexture=e.createTexture(),d.memory.textures++)}if(p.samples>0&&De(p)===!1){w.__webglMultisampledFramebuffer=e.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ce=K[re];w.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,w.__webglColorRenderbuffer[re]);const ye=o.convert(ce.format,ce.colorSpace),Z=o.convert(ce.type),le=A(ce.internalFormat,ye,Z,ce.colorSpace,p.isXRRenderTarget===!0),Ee=Ue(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,le,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,w.__webglColorRenderbuffer[re])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(w.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(w.__webglDepthRenderbuffer,p,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(V){t.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),He(e.TEXTURE_CUBE_MAP,a);for(let re=0;re<6;re++)if(a.mipmaps&&a.mipmaps.length>0)for(let ce=0;ce<a.mipmaps.length;ce++)de(w.__webglFramebuffer[re][ce],p,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else de(w.__webglFramebuffer[re],p,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);l(a)&&r(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let re=0,ce=K.length;re<ce;re++){const ye=K[re],Z=i.get(ye);t.bindTexture(e.TEXTURE_2D,Z.__webglTexture),He(e.TEXTURE_2D,ye),de(w.__webglFramebuffer,p,ye,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,0),l(ye)&&r(e.TEXTURE_2D)}t.unbindTexture()}else{let re=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(re=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(re,W.__webglTexture),He(re,a),a.mipmaps&&a.mipmaps.length>0)for(let ce=0;ce<a.mipmaps.length;ce++)de(w.__webglFramebuffer[ce],p,a,e.COLOR_ATTACHMENT0,re,ce);else de(w.__webglFramebuffer,p,a,e.COLOR_ATTACHMENT0,re,0);l(a)&&r(re),t.unbindTexture()}p.depthBuffer&&Be(p)}function $e(p){const a=p.textures;for(let w=0,W=a.length;w<W;w++){const K=a[w];if(l(K)){const V=D(p),pe=i.get(K).__webglTexture;t.bindTexture(V,pe),r(V),t.unbindTexture()}}}const we=[],m=[];function pt(p){if(p.samples>0){if(De(p)===!1){const a=p.textures,w=p.width,W=p.height;let K=e.COLOR_BUFFER_BIT;const V=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=i.get(p),re=a.length>1;if(re)for(let ce=0;ce<a.length;ce++)t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ce=0;ce<a.length;ce++){if(p.resolveDepthBuffer&&(p.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ce]);const ye=i.get(a[ce]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ye,0)}e.blitFramebuffer(0,0,w,W,0,0,w,W,K,e.NEAREST),b===!0&&(we.length=0,m.length=0,we.push(e.COLOR_ATTACHMENT0+ce),p.depthBuffer&&p.resolveDepthBuffer===!1&&(we.push(V),m.push(V),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,m)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<a.length;ce++){t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ce]);const ye=i.get(a[ce]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,ye,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&b){const a=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function Ue(p){return Math.min(c.maxSamples,p.samples)}function De(p){const a=i.get(p);return p.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function _e(p){const a=d.render.frame;C.get(p)!==a&&(C.set(p,a),p.update())}function Xe(p,a){const w=p.colorSpace,W=p.format,K=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||w!==En&&w!==Vt&&(tt.getTransfer(w)===Ye?(W!==xt||K!==yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),a}function he(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(g.width=p.naturalWidth||p.width,g.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(g.width=p.displayWidth,g.height=p.displayHeight):(g.width=p.width,g.height=p.height),g}this.allocateTextureUnit=H,this.resetTextureUnits=Y,this.setTexture2D=Q,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=B,this.rebindTextures=Te,this.setupRenderTarget=je,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=De}function Qf(e,n){function t(i,c=Vt){let o;const d=tt.getTransfer(c);if(i===yt)return e.UNSIGNED_BYTE;if(i===Mr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Tr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Oa)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Fa)return e.BYTE;if(i===Ba)return e.SHORT;if(i===vn)return e.UNSIGNED_SHORT;if(i===Rr)return e.INT;if(i===nn)return e.UNSIGNED_INT;if(i===Dt)return e.FLOAT;if(i===gn)return e.HALF_FLOAT;if(i===Ga)return e.ALPHA;if(i===Ha)return e.RGB;if(i===xt)return e.RGBA;if(i===Va)return e.LUMINANCE;if(i===ka)return e.LUMINANCE_ALPHA;if(i===Jn)return e.DEPTH_COMPONENT;if(i===mn)return e.DEPTH_STENCIL;if(i===za)return e.RED;if(i===Cr)return e.RED_INTEGER;if(i===Wa)return e.RG;if(i===br)return e.RG_INTEGER;if(i===Pr)return e.RGBA_INTEGER;if(i===bn||i===Pn||i===Ln||i===wn)if(d===Ye)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===bn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ln)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===bn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pn)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ln)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wn)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ui||i===di||i===pi||i===hi)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ui)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===di)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pi)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hi)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mi||i===_i||i===vi)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===mi||i===_i)return d===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===vi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gi||i===Ei||i===Si||i===Mi||i===Ti||i===xi||i===Ai||i===Ri||i===Ci||i===bi||i===Pi||i===Li||i===wi||i===Ui)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===gi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ei)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Si)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ti)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ai)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ri)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ci)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Li)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ui)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Un||i===Di||i===Ii)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===Un)return d===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Di)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ii)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xa||i===yi||i===Ni||i===Oi)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===Un)return o.COMPRESSED_RED_RGTC1_EXT;if(i===yi)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ni)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oi)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Jf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){const c=new xr,o=n.properties.get(c);o.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=c}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Nt({vertexShader:Jf,fragmentShader:jf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tu extends ta{constructor(n,t){super();const i=this;let c=null,o=1,d=null,f="local-floor",b=1,g=null,C=null,R=null,S=null,v=null,N=null;const L=new eu,l=t.getContextAttributes();let r=null,D=null;const A=[],_=[],G=new ft;let P=null;const y=new Jt;y.viewport=new lt;const F=new Jt;F.viewport=new lt;const h=[y,F],u=new na;let T=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=A[k];return J===void 0&&(J=new Rn,A[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=A[k];return J===void 0&&(J=new Rn,A[k]=J),J.getGripSpace()},this.getHand=function(k){let J=A[k];return J===void 0&&(J=new Rn,A[k]=J),J.getHandSpace()};function H(k){const J=_.indexOf(k.inputSource);if(J===-1)return;const de=A[J];de!==void 0&&(de.update(k.inputSource,k.frame,g||d),de.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){c.removeEventListener("select",H),c.removeEventListener("selectstart",H),c.removeEventListener("selectend",H),c.removeEventListener("squeeze",H),c.removeEventListener("squeezestart",H),c.removeEventListener("squeezeend",H),c.removeEventListener("end",q),c.removeEventListener("inputsourceschange",Q);for(let k=0;k<A.length;k++){const J=_[k];J!==null&&(_[k]=null,A[k].disconnect(J))}T=null,Y=null,L.reset(),n.setRenderTarget(r),v=null,S=null,R=null,c=null,D=null,Ze.stop(),i.isPresenting=!1,n.setPixelRatio(P),n.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){f=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(k){g=k},this.getBaseLayer=function(){return S!==null?S:v},this.getBinding=function(){return R},this.getFrame=function(){return N},this.getSession=function(){return c},this.setSession=async function(k){if(c=k,c!==null){if(r=n.getRenderTarget(),c.addEventListener("select",H),c.addEventListener("selectstart",H),c.addEventListener("selectend",H),c.addEventListener("squeeze",H),c.addEventListener("squeezestart",H),c.addEventListener("squeezeend",H),c.addEventListener("end",q),c.addEventListener("inputsourceschange",Q),l.xrCompatible!==!0&&await t.makeXRCompatible(),P=n.getPixelRatio(),n.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ie=null,Me=null;l.depth&&(Me=l.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=l.stencil?mn:Jn,ie=l.stencil?tn:nn);const Be={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:o};R=new XRWebGLBinding(c,t),S=R.createProjectionLayer(Be),c.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),D=new Xt(S.textureWidth,S.textureHeight,{format:xt,type:yt,depthTexture:new vr(S.textureWidth,S.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:l.stencil,colorSpace:n.outputColorSpace,samples:l.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}else{const de={antialias:l.antialias,alpha:!0,depth:l.depth,stencil:l.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(c,t,de),c.updateRenderState({baseLayer:v}),n.setPixelRatio(1),n.setSize(v.framebufferWidth,v.framebufferHeight,!1),D=new Xt(v.framebufferWidth,v.framebufferHeight,{format:xt,type:yt,colorSpace:n.outputColorSpace,stencilBuffer:l.stencil})}D.isXRRenderTarget=!0,this.setFoveation(b),g=null,d=await c.requestReferenceSpace(f),Ze.setContext(c),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function Q(k){for(let J=0;J<k.removed.length;J++){const de=k.removed[J],ie=_.indexOf(de);ie>=0&&(_[ie]=null,A[ie].disconnect(de))}for(let J=0;J<k.added.length;J++){const de=k.added[J];let ie=_.indexOf(de);if(ie===-1){for(let Be=0;Be<A.length;Be++)if(Be>=_.length){_.push(de),ie=Be;break}else if(_[Be]===null){_[Be]=de,ie=Be;break}if(ie===-1)break}const Me=A[ie];Me&&Me.connect(de)}}const z=new Ge,j=new Ge;function B(k,J,de){z.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const ie=z.distanceTo(j),Me=J.projectionMatrix.elements,Be=de.projectionMatrix.elements,Te=Me[14]/(Me[10]-1),je=Me[14]/(Me[10]+1),$e=(Me[9]+1)/Me[5],we=(Me[9]-1)/Me[5],m=(Me[8]-1)/Me[0],pt=(Be[8]+1)/Be[0],Ue=Te*m,De=Te*pt,_e=ie/(-m+pt),Xe=_e*-m;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Xe),k.translateZ(_e),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Me[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const he=Te+_e,p=je+_e,a=Ue-Xe,w=De+(ie-Xe),W=$e*je/p*he,K=we*je/p*he;k.projectionMatrix.makePerspective(a,w,W,K,he,p),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function me(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(c===null)return;let J=k.near,de=k.far;L.texture!==null&&(L.depthNear>0&&(J=L.depthNear),L.depthFar>0&&(de=L.depthFar)),u.near=F.near=y.near=J,u.far=F.far=y.far=de,(T!==u.near||Y!==u.far)&&(c.updateRenderState({depthNear:u.near,depthFar:u.far}),T=u.near,Y=u.far),y.layers.mask=k.layers.mask|2,F.layers.mask=k.layers.mask|4,u.layers.mask=y.layers.mask|F.layers.mask;const ie=k.parent,Me=u.cameras;me(u,ie);for(let Be=0;Be<Me.length;Be++)me(Me[Be],ie);Me.length===2?B(u,y,F):u.projectionMatrix.copy(y.projectionMatrix),Se(k,u,ie)};function Se(k,J,de){de===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ia*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return u},this.getFoveation=function(){if(!(S===null&&v===null))return b},this.setFoveation=function(k){b=k,S!==null&&(S.fixedFoveation=k),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=k)},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(u)};let Le=null;function He(k,J){if(C=J.getViewerPose(g||d),N=J,C!==null){const de=C.views;v!==null&&(n.setRenderTargetFramebuffer(D,v.framebuffer),n.setRenderTarget(D));let ie=!1;de.length!==u.cameras.length&&(u.cameras.length=0,ie=!0);for(let Te=0;Te<de.length;Te++){const je=de[Te];let $e=null;if(v!==null)$e=v.getViewport(je);else{const m=R.getViewSubImage(S,je);$e=m.viewport,Te===0&&(n.setRenderTargetTextures(D,m.colorTexture,S.ignoreDepthValues?void 0:m.depthStencilTexture),n.setRenderTarget(D))}let we=h[Te];we===void 0&&(we=new Jt,we.layers.enable(Te),we.viewport=new lt,h[Te]=we),we.matrix.fromArray(je.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(je.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set($e.x,$e.y,$e.width,$e.height),Te===0&&(u.matrix.copy(we.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale)),ie===!0&&u.cameras.push(we)}const Me=c.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&R){const Te=R.getDepthInformation(de[0]);Te&&Te.isValid&&Te.texture&&L.init(n,Te,c.renderState)}}for(let de=0;de<A.length;de++){const ie=_[de],Me=A[de];ie!==null&&Me!==void 0&&Me.update(ie,J,g||d)}Le&&Le(k,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),N=null}const Ze=new yr;Ze.setAnimationLoop(He),this.setAnimationLoop=function(k){Le=k},this.dispose=function(){}}}const Lt=new jn,nu=new Wt;function iu(e,n){function t(l,r){l.matrixAutoUpdate===!0&&l.updateMatrix(),r.value.copy(l.matrix)}function i(l,r){r.color.getRGB(l.fogColor.value,wr(e)),r.isFog?(l.fogNear.value=r.near,l.fogFar.value=r.far):r.isFogExp2&&(l.fogDensity.value=r.density)}function c(l,r,D,A,_){r.isMeshBasicMaterial||r.isMeshLambertMaterial?o(l,r):r.isMeshToonMaterial?(o(l,r),R(l,r)):r.isMeshPhongMaterial?(o(l,r),C(l,r)):r.isMeshStandardMaterial?(o(l,r),S(l,r),r.isMeshPhysicalMaterial&&v(l,r,_)):r.isMeshMatcapMaterial?(o(l,r),N(l,r)):r.isMeshDepthMaterial?o(l,r):r.isMeshDistanceMaterial?(o(l,r),L(l,r)):r.isMeshNormalMaterial?o(l,r):r.isLineBasicMaterial?(d(l,r),r.isLineDashedMaterial&&f(l,r)):r.isPointsMaterial?b(l,r,D,A):r.isSpriteMaterial?g(l,r):r.isShadowMaterial?(l.color.value.copy(r.color),l.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}function o(l,r){l.opacity.value=r.opacity,r.color&&l.diffuse.value.copy(r.color),r.emissive&&l.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.bumpMap&&(l.bumpMap.value=r.bumpMap,t(r.bumpMap,l.bumpMapTransform),l.bumpScale.value=r.bumpScale,r.side===_t&&(l.bumpScale.value*=-1)),r.normalMap&&(l.normalMap.value=r.normalMap,t(r.normalMap,l.normalMapTransform),l.normalScale.value.copy(r.normalScale),r.side===_t&&l.normalScale.value.negate()),r.displacementMap&&(l.displacementMap.value=r.displacementMap,t(r.displacementMap,l.displacementMapTransform),l.displacementScale.value=r.displacementScale,l.displacementBias.value=r.displacementBias),r.emissiveMap&&(l.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,l.emissiveMapTransform)),r.specularMap&&(l.specularMap.value=r.specularMap,t(r.specularMap,l.specularMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest);const D=n.get(r),A=D.envMap,_=D.envMapRotation;A&&(l.envMap.value=A,Lt.copy(_),Lt.x*=-1,Lt.y*=-1,Lt.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Lt.y*=-1,Lt.z*=-1),l.envMapRotation.value.setFromMatrix4(nu.makeRotationFromEuler(Lt)),l.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=r.reflectivity,l.ior.value=r.ior,l.refractionRatio.value=r.refractionRatio),r.lightMap&&(l.lightMap.value=r.lightMap,l.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,l.lightMapTransform)),r.aoMap&&(l.aoMap.value=r.aoMap,l.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,l.aoMapTransform))}function d(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform))}function f(l,r){l.dashSize.value=r.dashSize,l.totalSize.value=r.dashSize+r.gapSize,l.scale.value=r.scale}function b(l,r,D,A){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.size.value=r.size*D,l.scale.value=A*.5,r.map&&(l.map.value=r.map,t(r.map,l.uvTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function g(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.rotation.value=r.rotation,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function C(l,r){l.specular.value.copy(r.specular),l.shininess.value=Math.max(r.shininess,1e-4)}function R(l,r){r.gradientMap&&(l.gradientMap.value=r.gradientMap)}function S(l,r){l.metalness.value=r.metalness,r.metalnessMap&&(l.metalnessMap.value=r.metalnessMap,t(r.metalnessMap,l.metalnessMapTransform)),l.roughness.value=r.roughness,r.roughnessMap&&(l.roughnessMap.value=r.roughnessMap,t(r.roughnessMap,l.roughnessMapTransform)),r.envMap&&(l.envMapIntensity.value=r.envMapIntensity)}function v(l,r,D){l.ior.value=r.ior,r.sheen>0&&(l.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),l.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(l.sheenColorMap.value=r.sheenColorMap,t(r.sheenColorMap,l.sheenColorMapTransform)),r.sheenRoughnessMap&&(l.sheenRoughnessMap.value=r.sheenRoughnessMap,t(r.sheenRoughnessMap,l.sheenRoughnessMapTransform))),r.clearcoat>0&&(l.clearcoat.value=r.clearcoat,l.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(l.clearcoatMap.value=r.clearcoatMap,t(r.clearcoatMap,l.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,t(r.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(l.clearcoatNormalMap.value=r.clearcoatNormalMap,t(r.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),r.side===_t&&l.clearcoatNormalScale.value.negate())),r.dispersion>0&&(l.dispersion.value=r.dispersion),r.iridescence>0&&(l.iridescence.value=r.iridescence,l.iridescenceIOR.value=r.iridescenceIOR,l.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(l.iridescenceMap.value=r.iridescenceMap,t(r.iridescenceMap,l.iridescenceMapTransform)),r.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=r.iridescenceThicknessMap,t(r.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),r.transmission>0&&(l.transmission.value=r.transmission,l.transmissionSamplerMap.value=D.texture,l.transmissionSamplerSize.value.set(D.width,D.height),r.transmissionMap&&(l.transmissionMap.value=r.transmissionMap,t(r.transmissionMap,l.transmissionMapTransform)),l.thickness.value=r.thickness,r.thicknessMap&&(l.thicknessMap.value=r.thicknessMap,t(r.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=r.attenuationDistance,l.attenuationColor.value.copy(r.attenuationColor)),r.anisotropy>0&&(l.anisotropyVector.value.set(r.anisotropy*Math.cos(r.anisotropyRotation),r.anisotropy*Math.sin(r.anisotropyRotation)),r.anisotropyMap&&(l.anisotropyMap.value=r.anisotropyMap,t(r.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=r.specularIntensity,l.specularColor.value.copy(r.specularColor),r.specularColorMap&&(l.specularColorMap.value=r.specularColorMap,t(r.specularColorMap,l.specularColorMapTransform)),r.specularIntensityMap&&(l.specularIntensityMap.value=r.specularIntensityMap,t(r.specularIntensityMap,l.specularIntensityMapTransform))}function N(l,r){r.matcap&&(l.matcap.value=r.matcap)}function L(l,r){const D=n.get(r).light;l.referencePosition.value.setFromMatrixPosition(D.matrixWorld),l.nearDistance.value=D.shadow.camera.near,l.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:c}}function ru(e,n,t,i){let c={},o={},d=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function b(D,A){const _=A.program;i.uniformBlockBinding(D,_)}function g(D,A){let _=c[D.id];_===void 0&&(N(D),_=C(D),c[D.id]=_,D.addEventListener("dispose",l));const G=A.program;i.updateUBOMapping(D,G);const P=n.render.frame;o[D.id]!==P&&(S(D),o[D.id]=P)}function C(D){const A=R();D.__bindingPointIndex=A;const _=e.createBuffer(),G=D.__size,P=D.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,G,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,_),_}function R(){for(let D=0;D<f;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const A=c[D.id],_=D.uniforms,G=D.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let P=0,y=_.length;P<y;P++){const F=Array.isArray(_[P])?_[P]:[_[P]];for(let h=0,u=F.length;h<u;h++){const T=F[h];if(v(T,P,h,G)===!0){const Y=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let q=0;for(let Q=0;Q<H.length;Q++){const z=H[Q],j=L(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,e.bufferSubData(e.UNIFORM_BUFFER,Y+q,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,Y,T.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(D,A,_,G){const P=D.value,y=A+"_"+_;if(G[y]===void 0)return typeof P=="number"||typeof P=="boolean"?G[y]=P:G[y]=P.clone(),!0;{const F=G[y];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return G[y]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function N(D){const A=D.uniforms;let _=0;const G=16;for(let y=0,F=A.length;y<F;y++){const h=Array.isArray(A[y])?A[y]:[A[y]];for(let u=0,T=h.length;u<T;u++){const Y=h[u],H=Array.isArray(Y.value)?Y.value:[Y.value];for(let q=0,Q=H.length;q<Q;q++){const z=H[q],j=L(z),B=_%G,me=B%j.boundary,Se=B+me;_+=me,Se!==0&&G-Se<j.storage&&(_+=G-Se),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=_,_+=j.storage}}}const P=_%G;return P>0&&(_+=G-P),D.__size=_,D.__cache={},this}function L(D){const A={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(A.boundary=4,A.storage=4):D.isVector2?(A.boundary=8,A.storage=8):D.isVector3||D.isColor?(A.boundary=16,A.storage=12):D.isVector4?(A.boundary=16,A.storage=16):D.isMatrix3?(A.boundary=48,A.storage=48):D.isMatrix4?(A.boundary=64,A.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),A}function l(D){const A=D.target;A.removeEventListener("dispose",l);const _=d.indexOf(A.__bindingPointIndex);d.splice(_,1),e.deleteBuffer(c[A.id]),delete c[A.id],delete o[A.id]}function r(){for(const D in c)e.deleteBuffer(c[D]);d=[],c={},o={}}return{bind:b,update:g,dispose:r}}class pr{constructor(n={}){const{canvas:t=Kr(),context:i=null,depth:c=!0,stencil:o=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:b=!0,preserveDrawingBuffer:g=!1,powerPreference:C="default",failIfMajorPerformanceCaveat:R=!1,reverseDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=d;const N=new Uint32Array(4),L=new Int32Array(4);let l=null,r=null;const D=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$r,this.toneMapping=Rt,this.toneMappingExposure=1;const _=this;let G=!1,P=0,y=0,F=null,h=-1,u=null;const T=new lt,Y=new lt;let H=null;const q=new Ke(0);let Q=0,z=t.width,j=t.height,B=1,me=null,Se=null;const Le=new lt(0,0,z,j),He=new lt(0,0,z,j);let Ze=!1;const k=new _r;let J=!1,de=!1;this.transmissionResolutionScale=1;const ie=new Wt,Me=new Wt,Be=new Ge,Te=new lt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function we(){return F===null?B:1}let m=i;function pt(s,M){return t.getContext(s,M)}try{const s={alpha:!0,depth:c,stencil:o,antialias:f,premultipliedAlpha:b,preserveDrawingBuffer:g,powerPreference:C,failIfMajorPerformanceCaveat:R};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zr}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),m===null){const M="webgl2";if(m=pt(M,s),m===null)throw pt(M)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw console.error("THREE.WebGLRenderer: "+s.message),s}let Ue,De,_e,Xe,he,p,a,w,W,K,V,pe,re,ce,ye,Z,le,Ee,xe,fe,Ie,be,We,E;function te(){Ue=new hl(m),Ue.init(),be=new Qf(m,Ue),De=new cl(m,Ue,n,be),_e=new $f(m,Ue),De.reverseDepthBuffer&&S&&_e.buffers.depth.setReversed(!0),Xe=new vl(m),he=new Of,p=new Zf(m,Ue,_e,he,De,be,Xe),a=new fl(_),w=new pl(_),W=new Ao(m),We=new ol(m,W),K=new ml(m,W,Xe,We),V=new El(m,K,W,Xe),xe=new gl(m,De,p),Z=new ll(he),pe=new Nf(_,a,w,Ue,De,We,Z),re=new iu(_,he),ce=new Bf,ye=new Wf(Ue),Ee=new al(_,a,w,_e,V,v,b),le=new qf(_,V,De),E=new ru(m,Xe,De,_e),fe=new sl(m,Ue,Xe),Ie=new _l(m,Ue,Xe),Xe.programs=pe.programs,_.capabilities=De,_.extensions=Ue,_.properties=he,_.renderLists=ce,_.shadowMap=le,_.state=_e,_.info=Xe}te();const O=new tu(_,m);this.xr=O,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){const s=Ue.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){const s=Ue.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(s){s!==void 0&&(B=s,this.setSize(z,j,!1))},this.getSize=function(s){return s.set(z,j)},this.setSize=function(s,M,U=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=s,j=M,t.width=Math.floor(s*B),t.height=Math.floor(M*B),U===!0&&(t.style.width=s+"px",t.style.height=M+"px"),this.setViewport(0,0,s,M)},this.getDrawingBufferSize=function(s){return s.set(z*B,j*B).floor()},this.setDrawingBufferSize=function(s,M,U){z=s,j=M,B=U,t.width=Math.floor(s*U),t.height=Math.floor(M*U),this.setViewport(0,0,s,M)},this.getCurrentViewport=function(s){return s.copy(T)},this.getViewport=function(s){return s.copy(Le)},this.setViewport=function(s,M,U,I){s.isVector4?Le.set(s.x,s.y,s.z,s.w):Le.set(s,M,U,I),_e.viewport(T.copy(Le).multiplyScalar(B).round())},this.getScissor=function(s){return s.copy(He)},this.setScissor=function(s,M,U,I){s.isVector4?He.set(s.x,s.y,s.z,s.w):He.set(s,M,U,I),_e.scissor(Y.copy(He).multiplyScalar(B).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(s){_e.setScissorTest(Ze=s)},this.setOpaqueSort=function(s){me=s},this.setTransparentSort=function(s){Se=s},this.getClearColor=function(s){return s.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(s=!0,M=!0,U=!0){let I=0;if(s){let x=!1;if(F!==null){const $=F.texture.format;x=$===Pr||$===br||$===Cr}if(x){const $=F.texture.type,ne=$===yt||$===nn||$===vn||$===tn||$===Mr||$===Tr,se=Ee.getClearColor(),ue=Ee.getClearAlpha(),Ae=se.r,Re=se.g,ve=se.b;ne?(N[0]=Ae,N[1]=Re,N[2]=ve,N[3]=ue,m.clearBufferuiv(m.COLOR,0,N)):(L[0]=Ae,L[1]=Re,L[2]=ve,L[3]=ue,m.clearBufferiv(m.COLOR,0,L))}else I|=m.COLOR_BUFFER_BIT}M&&(I|=m.DEPTH_BUFFER_BIT),U&&(I|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),m.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ee.dispose(),ce.dispose(),ye.dispose(),he.dispose(),a.dispose(),w.dispose(),V.dispose(),We.dispose(),E.dispose(),pe.dispose(),O.dispose(),O.removeEventListener("sessionstart",ri),O.removeEventListener("sessionend",ai),Ct.stop()};function X(s){s.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const s=Xe.autoReset,M=le.enabled,U=le.autoUpdate,I=le.needsUpdate,x=le.type;te(),Xe.autoReset=s,le.enabled=M,le.autoUpdate=U,le.needsUpdate=I,le.type=x}function ae(s){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function Ce(s){const M=s.target;M.removeEventListener("dispose",Ce),Qe(M)}function Qe(s){at(s),he.remove(s)}function at(s){const M=he.get(s).programs;M!==void 0&&(M.forEach(function(U){pe.releaseProgram(U)}),s.isShaderMaterial&&pe.releaseShaderCache(s))}this.renderBufferDirect=function(s,M,U,I,x,$){M===null&&(M=je);const ne=x.isMesh&&x.matrixWorld.determinant()<0,se=Hr(s,M,U,I,x);_e.setMaterial(I,ne);let ue=U.index,Ae=1;if(I.wireframe===!0){if(ue=K.getWireframeAttribute(U),ue===void 0)return;Ae=2}const Re=U.drawRange,ve=U.attributes.position;let Ne=Re.start*Ae,Ve=(Re.start+Re.count)*Ae;$!==null&&(Ne=Math.max(Ne,$.start*Ae),Ve=Math.min(Ve,($.start+$.count)*Ae)),ue!==null?(Ne=Math.max(Ne,0),Ve=Math.min(Ve,ue.count)):ve!=null&&(Ne=Math.max(Ne,0),Ve=Math.min(Ve,ve.count));const et=Ve-Ne;if(et<0||et===1/0)return;We.setup(x,I,se,U,ue);let Je,Oe=fe;if(ue!==null&&(Je=W.get(ue),Oe=Ie,Oe.setIndex(Je)),x.isMesh)I.wireframe===!0?(_e.setLineWidth(I.wireframeLinewidth*we()),Oe.setMode(m.LINES)):Oe.setMode(m.TRIANGLES);else if(x.isLine){let ge=I.linewidth;ge===void 0&&(ge=1),_e.setLineWidth(ge*we()),x.isLineSegments?Oe.setMode(m.LINES):x.isLineLoop?Oe.setMode(m.LINE_LOOP):Oe.setMode(m.LINE_STRIP)}else x.isPoints?Oe.setMode(m.POINTS):x.isSprite&&Oe.setMode(m.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)Oe.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Oe.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{const ge=x._multiDrawStarts,rt=x._multiDrawCounts,ke=x._multiDrawCount,gt=ue?W.get(ue).bytesPerElement:1,Ot=he.get(I).currentProgram.getUniforms();for(let ut=0;ut<ke;ut++)Ot.setValue(m,"_gl_DrawID",ut),Oe.render(ge[ut]/gt,rt[ut])}else if(x.isInstancedMesh)Oe.renderInstances(Ne,et,x.count);else if(U.isInstancedBufferGeometry){const ge=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,rt=Math.min(U.instanceCount,ge);Oe.renderInstances(Ne,et,rt)}else Oe.render(Ne,et)};function ze(s,M,U){s.transparent===!0&&s.side===Tt&&s.forceSinglePass===!1?(s.side=_t,s.needsUpdate=!0,on(s,M,U),s.side=en,s.needsUpdate=!0,on(s,M,U),s.side=Tt):on(s,M,U)}this.compile=function(s,M,U=null){U===null&&(U=s),r=ye.get(U),r.init(M),A.push(r),U.traverseVisible(function(x){x.isLight&&x.layers.test(M.layers)&&(r.pushLight(x),x.castShadow&&r.pushShadow(x))}),s!==U&&s.traverseVisible(function(x){x.isLight&&x.layers.test(M.layers)&&(r.pushLight(x),x.castShadow&&r.pushShadow(x))}),r.setupLights();const I=new Set;return s.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;const $=x.material;if($)if(Array.isArray($))for(let ne=0;ne<$.length;ne++){const se=$[ne];ze(se,U,x),I.add(se)}else ze($,U,x),I.add($)}),A.pop(),r=null,I},this.compileAsync=function(s,M,U=null){const I=this.compile(s,M,U);return new Promise(x=>{function $(){if(I.forEach(function(ne){he.get(ne).currentProgram.isReady()&&I.delete(ne)}),I.size===0){x(s);return}setTimeout($,10)}Ue.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let vt=null;function St(s){vt&&vt(s)}function ri(){Ct.stop()}function ai(){Ct.start()}const Ct=new yr;Ct.setAnimationLoop(St),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(s){vt=s,O.setAnimationLoop(s),s===null?Ct.stop():Ct.start()},O.addEventListener("sessionstart",ri),O.addEventListener("sessionend",ai),this.render=function(s,M){if(M!==void 0&&M.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(M),M=O.getCamera()),s.isScene===!0&&s.onBeforeRender(_,s,M,F),r=ye.get(s,A.length),r.init(M),A.push(r),Me.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),k.setFromProjectionMatrix(Me),de=this.localClippingEnabled,J=Z.init(this.clippingPlanes,de),l=ce.get(s,D.length),l.init(),D.push(l),O.enabled===!0&&O.isPresenting===!0){const $=_.xr.getDepthSensingMesh();$!==null&&Tn($,M,-1/0,_.sortObjects)}Tn(s,M,0,_.sortObjects),l.finish(),_.sortObjects===!0&&l.sort(me,Se),$e=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,$e&&Ee.addToRenderList(l,s),this.info.render.frame++,J===!0&&Z.beginShadows();const U=r.state.shadowsArray;le.render(U,s,M),J===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=l.opaque,x=l.transmissive;if(r.setupLights(),M.isArrayCamera){const $=M.cameras;if(x.length>0)for(let ne=0,se=$.length;ne<se;ne++){const ue=$[ne];si(I,x,s,ue)}$e&&Ee.render(s);for(let ne=0,se=$.length;ne<se;ne++){const ue=$[ne];oi(l,s,ue,ue.viewport)}}else x.length>0&&si(I,x,s,M),$e&&Ee.render(s),oi(l,s,M);F!==null&&y===0&&(p.updateMultisampleRenderTarget(F),p.updateRenderTargetMipmap(F)),s.isScene===!0&&s.onAfterRender(_,s,M),We.resetDefaultState(),h=-1,u=null,A.pop(),A.length>0?(r=A[A.length-1],J===!0&&Z.setGlobalState(_.clippingPlanes,r.state.camera)):r=null,D.pop(),D.length>0?l=D[D.length-1]:l=null};function Tn(s,M,U,I){if(s.visible===!1)return;if(s.layers.test(M.layers)){if(s.isGroup)U=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(M);else if(s.isLight)r.pushLight(s),s.castShadow&&r.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||k.intersectsSprite(s)){I&&Te.setFromMatrixPosition(s.matrixWorld).applyMatrix4(Me);const ne=V.update(s),se=s.material;se.visible&&l.push(s,ne,se,U,Te.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||k.intersectsObject(s))){const ne=V.update(s),se=s.material;if(I&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),Te.copy(s.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Te.copy(ne.boundingSphere.center)),Te.applyMatrix4(s.matrixWorld).applyMatrix4(Me)),Array.isArray(se)){const ue=ne.groups;for(let Ae=0,Re=ue.length;Ae<Re;Ae++){const ve=ue[Ae],Ne=se[ve.materialIndex];Ne&&Ne.visible&&l.push(s,ne,Ne,U,Te.z,ve)}}else se.visible&&l.push(s,ne,se,U,Te.z,null)}}const $=s.children;for(let ne=0,se=$.length;ne<se;ne++)Tn($[ne],M,U,I)}function oi(s,M,U,I){const x=s.opaque,$=s.transmissive,ne=s.transparent;r.setupLightsView(U),J===!0&&Z.setGlobalState(_.clippingPlanes,U),I&&_e.viewport(T.copy(I)),x.length>0&&an(x,M,U),$.length>0&&an($,M,U),ne.length>0&&an(ne,M,U),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function si(s,M,U,I){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;r.state.transmissionRenderTarget[I.id]===void 0&&(r.state.transmissionRenderTarget[I.id]=new Xt(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?gn:yt,minFilter:Zt,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const $=r.state.transmissionRenderTarget[I.id],ne=I.viewport||T;$.setSize(ne.z*_.transmissionResolutionScale,ne.w*_.transmissionResolutionScale);const se=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(q),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),$e&&Ee.render(U);const ue=_.toneMapping;_.toneMapping=Rt;const Ae=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),r.setupLightsView(I),J===!0&&Z.setGlobalState(_.clippingPlanes,I),an(s,U,I),p.updateMultisampleRenderTarget($),p.updateRenderTargetMipmap($),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ve=0,Ne=M.length;ve<Ne;ve++){const Ve=M[ve],et=Ve.object,Je=Ve.geometry,Oe=Ve.material,ge=Ve.group;if(Oe.side===Tt&&et.layers.test(I.layers)){const rt=Oe.side;Oe.side=_t,Oe.needsUpdate=!0,ci(et,U,I,Je,Oe,ge),Oe.side=rt,Oe.needsUpdate=!0,Re=!0}}Re===!0&&(p.updateMultisampleRenderTarget($),p.updateRenderTargetMipmap($))}_.setRenderTarget(se),_.setClearColor(q,Q),Ae!==void 0&&(I.viewport=Ae),_.toneMapping=ue}function an(s,M,U){const I=M.isScene===!0?M.overrideMaterial:null;for(let x=0,$=s.length;x<$;x++){const ne=s[x],se=ne.object,ue=ne.geometry,Ae=I===null?ne.material:I,Re=ne.group;se.layers.test(U.layers)&&ci(se,M,U,ue,Ae,Re)}}function ci(s,M,U,I,x,$){s.onBeforeRender(_,M,U,I,x,$),s.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),x.onBeforeRender(_,M,U,I,s,$),x.transparent===!0&&x.side===Tt&&x.forceSinglePass===!1?(x.side=_t,x.needsUpdate=!0,_.renderBufferDirect(U,M,I,x,s,$),x.side=en,x.needsUpdate=!0,_.renderBufferDirect(U,M,I,x,s,$),x.side=Tt):_.renderBufferDirect(U,M,I,x,s,$),s.onAfterRender(_,M,U,I,x,$)}function on(s,M,U){M.isScene!==!0&&(M=je);const I=he.get(s),x=r.state.lights,$=r.state.shadowsArray,ne=x.state.version,se=pe.getParameters(s,x.state,$,M,U),ue=pe.getProgramCacheKey(se);let Ae=I.programs;I.environment=s.isMeshStandardMaterial?M.environment:null,I.fog=M.fog,I.envMap=(s.isMeshStandardMaterial?w:a).get(s.envMap||I.environment),I.envMapRotation=I.environment!==null&&s.envMap===null?M.environmentRotation:s.envMapRotation,Ae===void 0&&(s.addEventListener("dispose",Ce),Ae=new Map,I.programs=Ae);let Re=Ae.get(ue);if(Re!==void 0){if(I.currentProgram===Re&&I.lightsStateVersion===ne)return fi(s,se),Re}else se.uniforms=pe.getUniforms(s),s.onBeforeCompile(se,_),Re=pe.acquireProgram(se,ue),Ae.set(ue,Re),I.uniforms=se.uniforms;const ve=I.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(ve.clippingPlanes=Z.uniform),fi(s,se),I.needsLights=kr(s),I.lightsStateVersion=ne,I.needsLights&&(ve.ambientLightColor.value=x.state.ambient,ve.lightProbe.value=x.state.probe,ve.directionalLights.value=x.state.directional,ve.directionalLightShadows.value=x.state.directionalShadow,ve.spotLights.value=x.state.spot,ve.spotLightShadows.value=x.state.spotShadow,ve.rectAreaLights.value=x.state.rectArea,ve.ltc_1.value=x.state.rectAreaLTC1,ve.ltc_2.value=x.state.rectAreaLTC2,ve.pointLights.value=x.state.point,ve.pointLightShadows.value=x.state.pointShadow,ve.hemisphereLights.value=x.state.hemi,ve.directionalShadowMap.value=x.state.directionalShadowMap,ve.directionalShadowMatrix.value=x.state.directionalShadowMatrix,ve.spotShadowMap.value=x.state.spotShadowMap,ve.spotLightMatrix.value=x.state.spotLightMatrix,ve.spotLightMap.value=x.state.spotLightMap,ve.pointShadowMap.value=x.state.pointShadowMap,ve.pointShadowMatrix.value=x.state.pointShadowMatrix),I.currentProgram=Re,I.uniformsList=null,Re}function li(s){if(s.uniformsList===null){const M=s.currentProgram.getUniforms();s.uniformsList=hn.seqWithValue(M.seq,s.uniforms)}return s.uniformsList}function fi(s,M){const U=he.get(s);U.outputColorSpace=M.outputColorSpace,U.batching=M.batching,U.batchingColor=M.batchingColor,U.instancing=M.instancing,U.instancingColor=M.instancingColor,U.instancingMorph=M.instancingMorph,U.skinning=M.skinning,U.morphTargets=M.morphTargets,U.morphNormals=M.morphNormals,U.morphColors=M.morphColors,U.morphTargetsCount=M.morphTargetsCount,U.numClippingPlanes=M.numClippingPlanes,U.numIntersection=M.numClipIntersection,U.vertexAlphas=M.vertexAlphas,U.vertexTangents=M.vertexTangents,U.toneMapping=M.toneMapping}function Hr(s,M,U,I,x){M.isScene!==!0&&(M=je),p.resetTextureUnits();const $=M.fog,ne=I.isMeshStandardMaterial?M.environment:null,se=F===null?_.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:En,ue=(I.isMeshStandardMaterial?w:a).get(I.envMap||ne),Ae=I.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Re=!!U.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),ve=!!U.morphAttributes.position,Ne=!!U.morphAttributes.normal,Ve=!!U.morphAttributes.color;let et=Rt;I.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(et=_.toneMapping);const Je=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Oe=Je!==void 0?Je.length:0,ge=he.get(I),rt=r.state.lights;if(J===!0&&(de===!0||s!==u)){const ot=s===u&&I.id===h;Z.setState(I,s,ot)}let ke=!1;I.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==rt.state.version||ge.outputColorSpace!==se||x.isBatchedMesh&&ge.batching===!1||!x.isBatchedMesh&&ge.batching===!0||x.isBatchedMesh&&ge.batchingColor===!0&&x.colorTexture===null||x.isBatchedMesh&&ge.batchingColor===!1&&x.colorTexture!==null||x.isInstancedMesh&&ge.instancing===!1||!x.isInstancedMesh&&ge.instancing===!0||x.isSkinnedMesh&&ge.skinning===!1||!x.isSkinnedMesh&&ge.skinning===!0||x.isInstancedMesh&&ge.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&ge.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&ge.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&ge.instancingMorph===!1&&x.morphTexture!==null||ge.envMap!==ue||I.fog===!0&&ge.fog!==$||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Z.numPlanes||ge.numIntersection!==Z.numIntersection)||ge.vertexAlphas!==Ae||ge.vertexTangents!==Re||ge.morphTargets!==ve||ge.morphNormals!==Ne||ge.morphColors!==Ve||ge.toneMapping!==et||ge.morphTargetsCount!==Oe)&&(ke=!0):(ke=!0,ge.__version=I.version);let gt=ge.currentProgram;ke===!0&&(gt=on(I,M,x));let Ot=!1,ut=!1,Kt=!1;const qe=gt.getUniforms(),ht=ge.uniforms;if(_e.useProgram(gt.program)&&(Ot=!0,ut=!0,Kt=!0),I.id!==h&&(h=I.id,ut=!0),Ot||u!==s){_e.buffers.depth.getReversed()?(ie.copy(s.projectionMatrix),Qr(ie),Jr(ie),qe.setValue(m,"projectionMatrix",ie)):qe.setValue(m,"projectionMatrix",s.projectionMatrix),qe.setValue(m,"viewMatrix",s.matrixWorldInverse);const st=qe.map.cameraPosition;st!==void 0&&st.setValue(m,Be.setFromMatrixPosition(s.matrixWorld)),De.logarithmicDepthBuffer&&qe.setValue(m,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&qe.setValue(m,"isOrthographic",s.isOrthographicCamera===!0),u!==s&&(u=s,ut=!0,Kt=!0)}if(x.isSkinnedMesh){qe.setOptional(m,x,"bindMatrix"),qe.setOptional(m,x,"bindMatrixInverse");const ot=x.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),qe.setValue(m,"boneTexture",ot.boneTexture,p))}x.isBatchedMesh&&(qe.setOptional(m,x,"batchingTexture"),qe.setValue(m,"batchingTexture",x._matricesTexture,p),qe.setOptional(m,x,"batchingIdTexture"),qe.setValue(m,"batchingIdTexture",x._indirectTexture,p),qe.setOptional(m,x,"batchingColorTexture"),x._colorsTexture!==null&&qe.setValue(m,"batchingColorTexture",x._colorsTexture,p));const mt=U.morphAttributes;if((mt.position!==void 0||mt.normal!==void 0||mt.color!==void 0)&&xe.update(x,U,gt),(ut||ge.receiveShadow!==x.receiveShadow)&&(ge.receiveShadow=x.receiveShadow,qe.setValue(m,"receiveShadow",x.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ht.envMap.value=ue,ht.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&M.environment!==null&&(ht.envMapIntensity.value=M.environmentIntensity),ut&&(qe.setValue(m,"toneMappingExposure",_.toneMappingExposure),ge.needsLights&&Vr(ht,Kt),$&&I.fog===!0&&re.refreshFogUniforms(ht,$),re.refreshMaterialUniforms(ht,I,B,j,r.state.transmissionRenderTarget[s.id]),hn.upload(m,li(ge),ht,p)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(hn.upload(m,li(ge),ht,p),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&qe.setValue(m,"center",x.center),qe.setValue(m,"modelViewMatrix",x.modelViewMatrix),qe.setValue(m,"normalMatrix",x.normalMatrix),qe.setValue(m,"modelMatrix",x.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const ot=I.uniformsGroups;for(let st=0,xn=ot.length;st<xn;st++){const bt=ot[st];E.update(bt,gt),E.bind(bt,gt)}}return gt}function Vr(s,M){s.ambientLightColor.needsUpdate=M,s.lightProbe.needsUpdate=M,s.directionalLights.needsUpdate=M,s.directionalLightShadows.needsUpdate=M,s.pointLights.needsUpdate=M,s.pointLightShadows.needsUpdate=M,s.spotLights.needsUpdate=M,s.spotLightShadows.needsUpdate=M,s.rectAreaLights.needsUpdate=M,s.hemisphereLights.needsUpdate=M}function kr(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(s,M,U){he.get(s.texture).__webglTexture=M,he.get(s.depthTexture).__webglTexture=U;const I=he.get(s);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=U===void 0,I.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(s,M){const U=he.get(s);U.__webglFramebuffer=M,U.__useDefaultFramebuffer=M===void 0};const zr=m.createFramebuffer();this.setRenderTarget=function(s,M=0,U=0){F=s,P=M,y=U;let I=!0,x=null,$=!1,ne=!1;if(s){const ue=he.get(s);if(ue.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(m.FRAMEBUFFER,null),I=!1;else if(ue.__webglFramebuffer===void 0)p.setupRenderTarget(s);else if(ue.__hasExternalTextures)p.rebindTextures(s,he.get(s.texture).__webglTexture,he.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){const ve=s.depthTexture;if(ue.__boundDepthTexture!==ve){if(ve!==null&&he.has(ve)&&(s.width!==ve.image.width||s.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");p.setupDepthRenderbuffer(s)}}const Ae=s.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ne=!0);const Re=he.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(Re[M])?x=Re[M][U]:x=Re[M],$=!0):s.samples>0&&p.useMultisampledRTT(s)===!1?x=he.get(s).__webglMultisampledFramebuffer:Array.isArray(Re)?x=Re[U]:x=Re,T.copy(s.viewport),Y.copy(s.scissor),H=s.scissorTest}else T.copy(Le).multiplyScalar(B).floor(),Y.copy(He).multiplyScalar(B).floor(),H=Ze;if(U!==0&&(x=zr),_e.bindFramebuffer(m.FRAMEBUFFER,x)&&I&&_e.drawBuffers(s,x),_e.viewport(T),_e.scissor(Y),_e.setScissorTest(H),$){const ue=he.get(s.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+M,ue.__webglTexture,U)}else if(ne){const ue=he.get(s.texture),Ae=M;m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,ue.__webglTexture,U,Ae)}else if(s!==null&&U!==0){const ue=he.get(s.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,ue.__webglTexture,U)}h=-1},this.readRenderTargetPixels=function(s,M,U,I,x,$,ne){if(!(s&&s.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=he.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){_e.bindFramebuffer(m.FRAMEBUFFER,se);try{const ue=s.texture,Ae=ue.format,Re=ue.type;if(!De.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M>=0&&M<=s.width-I&&U>=0&&U<=s.height-x&&m.readPixels(M,U,I,x,be.convert(Ae),be.convert(Re),$)}finally{const ue=F!==null?he.get(F).__webglFramebuffer:null;_e.bindFramebuffer(m.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(s,M,U,I,x,$,ne){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=he.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){const ue=s.texture,Ae=ue.format,Re=ue.type;if(!De.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(M>=0&&M<=s.width-I&&U>=0&&U<=s.height-x){_e.bindFramebuffer(m.FRAMEBUFFER,se);const ve=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,ve),m.bufferData(m.PIXEL_PACK_BUFFER,$.byteLength,m.STREAM_READ),m.readPixels(M,U,I,x,be.convert(Ae),be.convert(Re),0);const Ne=F!==null?he.get(F).__webglFramebuffer:null;_e.bindFramebuffer(m.FRAMEBUFFER,Ne);const Ve=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await jr(m,Ve,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,ve),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,$),m.deleteBuffer(ve),m.deleteSync(Ve),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(s,M=null,U=0){s.isTexture!==!0&&(Ht("WebGLRenderer: copyFramebufferToTexture function signature has changed."),M=arguments[0]||null,s=arguments[1]);const I=Math.pow(2,-U),x=Math.floor(s.image.width*I),$=Math.floor(s.image.height*I),ne=M!==null?M.x:0,se=M!==null?M.y:0;p.setTexture2D(s,0),m.copyTexSubImage2D(m.TEXTURE_2D,U,0,0,ne,se,x,$),_e.unbindTexture()};const Wr=m.createFramebuffer(),Xr=m.createFramebuffer();this.copyTextureToTexture=function(s,M,U=null,I=null,x=0,$=null){s.isTexture!==!0&&(Ht("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,s=arguments[1],M=arguments[2],$=arguments[3]||0,U=null),$===null&&(x!==0?(Ht("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=x,x=0):$=0);let ne,se,ue,Ae,Re,ve,Ne,Ve,et;const Je=s.isCompressedTexture?s.mipmaps[$]:s.image;if(U!==null)ne=U.max.x-U.min.x,se=U.max.y-U.min.y,ue=U.isBox3?U.max.z-U.min.z:1,Ae=U.min.x,Re=U.min.y,ve=U.isBox3?U.min.z:0;else{const mt=Math.pow(2,-x);ne=Math.floor(Je.width*mt),se=Math.floor(Je.height*mt),s.isDataArrayTexture?ue=Je.depth:s.isData3DTexture?ue=Math.floor(Je.depth*mt):ue=1,Ae=0,Re=0,ve=0}I!==null?(Ne=I.x,Ve=I.y,et=I.z):(Ne=0,Ve=0,et=0);const Oe=be.convert(M.format),ge=be.convert(M.type);let rt;M.isData3DTexture?(p.setTexture3D(M,0),rt=m.TEXTURE_3D):M.isDataArrayTexture||M.isCompressedArrayTexture?(p.setTexture2DArray(M,0),rt=m.TEXTURE_2D_ARRAY):(p.setTexture2D(M,0),rt=m.TEXTURE_2D),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,M.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,M.unpackAlignment);const ke=m.getParameter(m.UNPACK_ROW_LENGTH),gt=m.getParameter(m.UNPACK_IMAGE_HEIGHT),Ot=m.getParameter(m.UNPACK_SKIP_PIXELS),ut=m.getParameter(m.UNPACK_SKIP_ROWS),Kt=m.getParameter(m.UNPACK_SKIP_IMAGES);m.pixelStorei(m.UNPACK_ROW_LENGTH,Je.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,Je.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Ae),m.pixelStorei(m.UNPACK_SKIP_ROWS,Re),m.pixelStorei(m.UNPACK_SKIP_IMAGES,ve);const qe=s.isDataArrayTexture||s.isData3DTexture,ht=M.isDataArrayTexture||M.isData3DTexture;if(s.isDepthTexture){const mt=he.get(s),ot=he.get(M),st=he.get(mt.__renderTarget),xn=he.get(ot.__renderTarget);_e.bindFramebuffer(m.READ_FRAMEBUFFER,st.__webglFramebuffer),_e.bindFramebuffer(m.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let bt=0;bt<ue;bt++)qe&&(m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,he.get(s).__webglTexture,x,ve+bt),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,he.get(M).__webglTexture,$,et+bt)),m.blitFramebuffer(Ae,Re,ne,se,Ne,Ve,ne,se,m.DEPTH_BUFFER_BIT,m.NEAREST);_e.bindFramebuffer(m.READ_FRAMEBUFFER,null),_e.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(x!==0||s.isRenderTargetTexture||he.has(s)){const mt=he.get(s),ot=he.get(M);_e.bindFramebuffer(m.READ_FRAMEBUFFER,Wr),_e.bindFramebuffer(m.DRAW_FRAMEBUFFER,Xr);for(let st=0;st<ue;st++)qe?m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,mt.__webglTexture,x,ve+st):m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,mt.__webglTexture,x),ht?m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,ot.__webglTexture,$,et+st):m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,ot.__webglTexture,$),x!==0?m.blitFramebuffer(Ae,Re,ne,se,Ne,Ve,ne,se,m.COLOR_BUFFER_BIT,m.NEAREST):ht?m.copyTexSubImage3D(rt,$,Ne,Ve,et+st,Ae,Re,ne,se):m.copyTexSubImage2D(rt,$,Ne,Ve,Ae,Re,ne,se);_e.bindFramebuffer(m.READ_FRAMEBUFFER,null),_e.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else ht?s.isDataTexture||s.isData3DTexture?m.texSubImage3D(rt,$,Ne,Ve,et,ne,se,ue,Oe,ge,Je.data):M.isCompressedArrayTexture?m.compressedTexSubImage3D(rt,$,Ne,Ve,et,ne,se,ue,Oe,Je.data):m.texSubImage3D(rt,$,Ne,Ve,et,ne,se,ue,Oe,ge,Je):s.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,$,Ne,Ve,ne,se,Oe,ge,Je.data):s.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,$,Ne,Ve,Je.width,Je.height,Oe,Je.data):m.texSubImage2D(m.TEXTURE_2D,$,Ne,Ve,ne,se,Oe,ge,Je);m.pixelStorei(m.UNPACK_ROW_LENGTH,ke),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,gt),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Ot),m.pixelStorei(m.UNPACK_SKIP_ROWS,ut),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Kt),$===0&&M.generateMipmaps&&m.generateMipmap(rt),_e.unbindTexture()},this.copyTextureToTexture3D=function(s,M,U=null,I=null,x=0){return s.isTexture!==!0&&(Ht("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,I=arguments[1]||null,s=arguments[2],M=arguments[3],x=arguments[4]||0),Ht('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(s,M,U,I,x)},this.initRenderTarget=function(s){he.get(s).__webglFramebuffer===void 0&&p.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?p.setTextureCube(s,0):s.isData3DTexture?p.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?p.setTexture2DArray(s,0):p.setTexture2D(s,0),_e.unbindTexture()},this.resetState=function(){P=0,y=0,F=null,_e.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(n),t.unpackColorSpace=tt._getUnpackColorSpace()}}const ii=Kn("camera",()=>{const e=dt(75),n=dt(window.innerWidth/window.innerHeight),t=dt(.1),i=dt(1e3),c=dt(50),o=dt(null);function d(){return o.value===null&&(o.value=new Jt(e.value,n.value,t.value,i.value),o.value.position.z=c.value),o.value}function f(b,g,C){o.value.position.x+=b,o.value.position.y+=g,o.value.position.z+=C}return{createCamera:d,camera:o,updatePosition:f}}),Bt=new jn(0,0,0,"YXZ"),Gt=new Ge,au={type:"change"},ou={type:"lock"},su={type:"unlock"},hr=Math.PI/2;class cu extends Mo{constructor(n,t=null){super(n,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=lu.bind(this),this._onPointerlockChange=fu.bind(this),this._onPointerlockError=uu.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(n){return n.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(n){if(this.enabled===!1)return;const t=this.object;Gt.setFromMatrixColumn(t.matrix,0),Gt.crossVectors(t.up,Gt),t.position.addScaledVector(Gt,n)}moveRight(n){if(this.enabled===!1)return;const t=this.object;Gt.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Gt,n)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function lu(e){if(this.enabled===!1||this.isLocked===!1)return;const n=this.object;Bt.setFromQuaternion(n.quaternion),Bt.y-=e.movementX*.002*this.pointerSpeed,Bt.x-=e.movementY*.002*this.pointerSpeed,Bt.x=Math.max(hr-this.maxPolarAngle,Math.min(hr-this.minPolarAngle,Bt.x)),n.quaternion.setFromEuler(Bt),this.dispatchEvent(au)}function fu(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(ou),this.isLocked=!0):(this.dispatchEvent(su),this.isLocked=!1)}function uu(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const un=ii(),Gr=Kn("cameracontrol",()=>{const e=dt(new Ge(0,0,0)),n=dt(new Ge),t=dt(new Ge),i=dt(new Ge),c=dt(null),o=2,d=dt({forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1});function f(){c.value=new cu(un.createCamera(),document.body),un.camera=c.value.object,document.getElementById("three-canvas").addEventListener("click",function(){c.value.lock()}),document.body.addEventListener("keydown",R),document.body.addEventListener("keyup",S)}function b(v){g(v),t.value.add(i.value.clone().multiplyScalar(v)),n.value.add(t.value.clone().multiplyScalar(v)),un.camera.position.copy(n.value),C(v)}function g(v){d.value.forward&&(e.value.z-=v),d.value.backward&&(e.value.z+=v),d.value.left&&(e.value.x-=v),d.value.right&&(e.value.x+=v),d.value.up&&(e.value.y+=v),d.value.down&&(e.value.y-=v),e.value.lengthSq()>0&&(e.value.normalize(),e.value.applyQuaternion(un.camera.quaternion),i.value.copy(e.value).multiplyScalar(o),e.value.set(0,0,0))}function C(v){const N=Math.abs(1-v);t.value.multiplyScalar(N),i.value.multiplyScalar(.9-N)}function R(v){switch(console.log("key pressed",v.code),v.code){case"KeyW":case"ArrowUp":d.value.forward=!0;break;case"KeyS":case"ArrowDown":d.value.backward=!0;break;case"KeyA":case"ArrowLeft":d.value.left=!0;break;case"KeyD":case"ArrowRight":d.value.right=!0;break;case"Space":case"ShiftRight":d.value.up=!0;break;case"ControlRight":case"ControlLeft":d.value.down=!0;break}}function S(v){switch(v.code){case"KeyW":case"ArrowUp":d.value.forward=!1;break;case"KeyS":case"ArrowDown":d.value.backward=!1;break;case"KeyA":case"ArrowLeft":d.value.left=!1;break;case"KeyD":case"ArrowRight":d.value.right=!1;break;case"Space":case"ShiftRight":d.value.up=!1;break;case"ControlRight":case"ControlLeft":d.value.down=!1;break}}return{updateCameraPosition:b,initControls:f,pointer_controls:c,dampening:C,velocity:t}}),du={class:"bg-black/50 overflow-auto"},pu={__name:"MainRender",setup(e){const n=ii(),t=ei(),i=Gr();ti();const c=new To;let o=new pr,d=null;$n(()=>{t.initScene(),f()}),mr(()=>{d&&cancelAnimationFrame(d)});function f(){const g=document.querySelector("#three-canvas");o=new pr({antialias:!0,canvas:g}),o.setSize(window.innerWidth,window.innerHeight),i.initControls(),d=requestAnimationFrame(b)}function b(g){i.pointer_controls.isLocked===!0&&i.updateCameraPosition(c.getDelta()),o.render(t.render_scene,n.camera),d=requestAnimationFrame(b)}return Yr(()=>t.render_scene,(g,C)=>{console.log("scene changed",g,C),o.render(g,n.camera),d&&cancelAnimationFrame(d),d=requestAnimationFrame(b)}),(g,C)=>(Qn(),Zn("div",du,C[0]||(C[0]=[qr("canvas",{class:"",id:"three-canvas"},null,-1)])))}},hu="/static/buildforge/assets/claim-processor-jimDRNjo.js",mu="/static/buildforge/assets/zone-refresh-processor-Dx4OpEZk.js",_u={__name:"MainCamera",setup(e){const n=ii(),t=Gr(),i=ti(),c=ei(),o=Ir(),d=new Worker(hu),f=new Worker(mu);d.onmessage=l=>{console.log(l.data)};let b,g,C,R;$n(()=>{b=setInterval(S,200),g=setInterval(v,400),C=setInterval(N,800),R=setInterval(L,4e3)}),mr(()=>{clearInterval(b),clearInterval(g),clearInterval(C),clearInterval(R)});function S(){const l=n.camera.position.x,r=n.camera.position.y,D=n.camera.position.z;i.getCollectiblesInRegion(l,r,D)}function v(){for(let l of i.collection_queue){const r=o.pullVoxelMesh(l.pk);r&&(t.dampening(.8),c.remove(r),i.claim_queue.push(l))}i.collection_queue=[]}async function N(){for(let l of i.claim_queue){const r=[l.pk,"/apiv1/claims/",window.csrf_token];console.log("sending pk to claim_worker:",r),d.postMessage(r)}i.claim_queue=[]}async function L(){if(t.velocity.x>.04||t.velocity.x<-.04||t.velocity.y>.04||t.velocity.y<-.04||t.velocity.z>.04||t.velocity.z<-.04){console.log("velocity too high, skipping zone refresh");return}const l=n.camera.position.x,r=n.camera.position.y,D=n.camera.position.z,A="/apiv1/voxels/",_=window.csrf_token,G=JSON.parse(JSON.stringify(o.voxel_list)),P=JSON.parse(JSON.stringify(o.voxel_mesh_list)),y=[l,r,D,A,_,G,P];f.postMessage(y),f.onmessage=F=>{console.log("zone_worker message:",F.data);const h=F.data;for(const[u,T]of Object.entries(h))if(u.startsWith("CREATENEW")){const Y=u.split("_")[1];o.voxel_list.push({pk:Y,x:T.x,y:T.y,z:T.z,color:T.color});const H=o.drawVoxel(T.x,T.y,T.z,`#${T.color}`);c.add(H)}else c.updateObjPos(u,T.x,T.y,T.z)}}return(l,r)=>(Qn(),Zn("div"))}},vu=Kn("light",()=>{const e=dt([]);function n(t,i,c){const f=new xo(16777215,2);return f.position.set(t,i,c),e.value.push(f),f}return{createLight:n,light_list:e}}),gu={__name:"MainScene",setup(e){const n=ei(),t=vu(),i=Ir(),c=ti();$n(async()=>{await i.fetchVoxels(),c.buildHashMap(i.voxel_list),await i.drawVoxels(),o(),await d()});function o(){t.createLight(4,8,16),t.createLight(-4,8,16),t.createLight(0,50,-2)}async function d(){for(let f of t.light_list){const b=f.clone();n.add(b)}for(let f of i.voxel_mesh_list)n.add(f)}return(f,b)=>null}},Mu={__name:"GameView",setup(e){return(n,t)=>(Qn(),Zn("div",null,[An(pu),An(_u),An(gu)]))}};export{Mu as default};
