import{d as Kn,r as lt,o as $n,a as gr,w as jr,c as Zn,b as Qn,e as Jr,f as An}from"./index-BTzBF9d1.js";import{c as ea,S as ta,N as Rt,V as ft,C as Ke,F as Er,M as zt,a as Ge,R as na,W as Xt,b as tt,L as Zt,H as gn,U as yt,D as Tt,B as _t,d as en,t as ia,e as ra,f as En,p as aa,w as Ht,g as oa,E as sa,h as ut,P as jt,A as ca,i as Rn,j as xt,k as mn,l as jn,m as tn,n as nn,o as Sr,q as la,r as Vt,s as _n,u as fa,v as ua,x as $t,O as da,y as pa,z as ha,G as ma,I as _a,J as va,K as ga,Q as Ea,T as Sa,X as Ma,Y as Ta,Z as xa,_ as Aa,$ as Ra,a0 as Ca,a1 as ba,a2 as Pa,a3 as La,a4 as Cn,a5 as kt,a6 as sn,a7 as wa,a8 as Jt,a9 as Ua,aa as Da,ab as Ia,ac as ya,ad as Mr,ae as Na,af as Oa,ag as Fa,ah as Ba,ai as Fe,aj as Ga,ak as Ha,al as Va,am as Nt,an as Tr,ao as dn,ap as At,aq as xr,ar as It,as as Mt,at as vn,au as Ar,av as Rr,aw as Cr,ax as br,ay as ka,az as Wa,aA as za,aB as Pr,aC as Dt,aD as Xa,aE as Ya,aF as qa,aG as Ka,aH as $a,aI as Lr,aJ as Za,aK as wr,aL as Ur,aM as bn,aN as Pn,aO as Ln,aP as wn,aQ as Ye,aR as ui,aS as di,aT as pi,aU as hi,aV as mi,aW as _i,aX as vi,aY as gi,aZ as Ei,a_ as Si,a$ as Mi,b0 as Ti,b1 as xi,b2 as Ai,b3 as Ri,b4 as Ci,b5 as bi,b6 as Pi,b7 as Li,b8 as wi,b9 as Ui,ba as Un,bb as Di,bc as Ii,bd as Qa,be as yi,bf as Ni,bg as Oi,bh as Bn,bi as Gn,bj as Hn,bk as Vn,bl as kn,bm as Wn,bn as zn,bo as pn,bp as ja,bq as Fi,br as Bi,bs as Gi,bt as Xn,bu as Yn,bv as Ja,bw as Dr,bx as eo,by as ct,bz as Sn,bA as to,bB as no,bC as Ir,bD as yr,bE as Hi,bF as Jn,bG as Vi,bH as Nr,bI as rn,bJ as Yt,bK as io,bL as ro,bM as ao,bN as oo,bO as so,bP as ki,bQ as co,bR as lo,bS as fo,bT as uo,bU as po,bV as ho,bW as mo,bX as _o,bY as vo,bZ as go,b_ as Eo,b$ as So,c0 as Mo,c1 as To,c2 as xo,c3 as Ao,c4 as Ro,c5 as Co,c6 as bo,c7 as ei,c8 as ti,c9 as Po,ca as Or,cb as Lo}from"./voxel-B27O4iBM.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fr(){let e=null,n=!1,t=null,i=null;function c(o,d){t(o,d),i=e.requestAnimationFrame(c)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(c),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function wo(e){const n=new WeakMap;function t(f,b){const g=f.array,C=f.usage,A=g.byteLength,E=e.createBuffer();e.bindBuffer(b,E),e.bufferData(b,g,C),f.onUploadCallback();let v;if(g instanceof Float32Array)v=e.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(g instanceof Int16Array)v=e.SHORT;else if(g instanceof Uint32Array)v=e.UNSIGNED_INT;else if(g instanceof Int32Array)v=e.INT;else if(g instanceof Int8Array)v=e.BYTE;else if(g instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:v,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:A}}function i(f,b,g){const C=b.array,A=b.updateRanges;if(e.bindBuffer(g,f),A.length===0)e.bufferSubData(g,0,C);else{A.sort((v,N)=>v.start-N.start);let E=0;for(let v=1;v<A.length;v++){const N=A[E],w=A[v];w.start<=N.start+N.count+1?N.count=Math.max(N.count,w.start+w.count-N.start):(++E,A[E]=w)}A.length=E+1;for(let v=0,N=A.length;v<N;v++){const w=A[v];e.bufferSubData(g,w.start*C.BYTES_PER_ELEMENT,C,w.start,w.count)}b.clearUpdateRanges()}b.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const b=n.get(f);b&&(e.deleteBuffer(b.buffer),n.delete(f))}function d(f,b){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const C=n.get(f);(!C||C.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=n.get(f);if(g===void 0)n.set(f,t(f,b));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(g.buffer,f,b),g.version=f.version}}return{get:c,remove:o,update:d}}var Uo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Do=`#ifdef USE_ALPHAHASH
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
#endif`,Io=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,No=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fo=`#ifdef USE_AOMAP
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
#endif`,Bo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Go=`#ifdef USE_BATCHING
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
#endif`,Ho=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ko=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wo=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zo=`#ifdef USE_IRIDESCENCE
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
#endif`,Xo=`#ifdef USE_BUMPMAP
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
#endif`,Yo=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ko=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$o=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jo=`#if defined( USE_COLOR_ALPHA )
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
#endif`,es=`#define PI 3.141592653589793
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
} // validated`,ts=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ns=`vec3 transformedNormal = objectNormal;
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
#endif`,is=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rs=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,as=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,os=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ss="gl_FragColor = linearToOutputTexel( gl_FragColor );",cs=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ls=`#ifdef USE_ENVMAP
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
#endif`,fs=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,us=`#ifdef USE_ENVMAP
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
#endif`,ds=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ps=`#ifdef USE_ENVMAP
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
#endif`,hs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ms=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_s=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gs=`#ifdef USE_GRADIENTMAP
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
}`,Es=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ss=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ms=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ts=`uniform bool receiveShadow;
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
#endif`,xs=`#ifdef USE_ENVMAP
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
#endif`,As=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cs=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ps=`PhysicalMaterial material;
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
#endif`,Ls=`struct PhysicalMaterial {
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
}`,ws=`
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
#endif`,Us=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ds=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Is=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ys=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ns=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Os=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fs=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bs=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hs=`#if defined( USE_POINTS_UV )
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
#endif`,Vs=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ks=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ws=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xs=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ys=`#ifdef USE_MORPHTARGETS
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
#endif`,qs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ks=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$s=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,js=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Js=`#ifdef USE_NORMALMAP
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
#endif`,ec=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ic=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ac=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mc=`float getShadowMask() {
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
}`,_c=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vc=`#ifdef USE_SKINNING
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
#endif`,gc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ec=`#ifdef USE_SKINNING
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
#endif`,Sc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ac=`#ifdef USE_TRANSMISSION
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
#endif`,Rc=`#ifdef USE_TRANSMISSION
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
#endif`,Cc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uc=`uniform sampler2D t2D;
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
}`,Dc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ic=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oc=`#include <common>
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
}`,Fc=`#if DEPTH_PACKING == 3200
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
}`,Bc=`#define DISTANCE
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
}`,Gc=`#define DISTANCE
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
}`,Hc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kc=`uniform float scale;
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
}`,Wc=`uniform vec3 diffuse;
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
}`,zc=`#include <common>
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
}`,Xc=`uniform vec3 diffuse;
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
}`,Yc=`#define LAMBERT
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
}`,qc=`#define LAMBERT
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
}`,Kc=`#define MATCAP
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
}`,$c=`#define MATCAP
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
}`,Zc=`#define NORMAL
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
}`,Qc=`#define NORMAL
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
}`,jc=`#define PHONG
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
}`,Jc=`#define PHONG
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
}`,el=`#define STANDARD
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
}`,tl=`#define STANDARD
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
}`,nl=`#define TOON
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
}`,il=`#define TOON
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
}`,rl=`uniform float size;
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
}`,al=`uniform vec3 diffuse;
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
}`,ol=`#include <common>
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
}`,sl=`uniform vec3 color;
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
}`,cl=`uniform float rotation;
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
}`,ll=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:Uo,alphahash_pars_fragment:Do,alphamap_fragment:Io,alphamap_pars_fragment:yo,alphatest_fragment:No,alphatest_pars_fragment:Oo,aomap_fragment:Fo,aomap_pars_fragment:Bo,batching_pars_vertex:Go,batching_vertex:Ho,begin_vertex:Vo,beginnormal_vertex:ko,bsdfs:Wo,iridescence_fragment:zo,bumpmap_pars_fragment:Xo,clipping_planes_fragment:Yo,clipping_planes_pars_fragment:qo,clipping_planes_pars_vertex:Ko,clipping_planes_vertex:$o,color_fragment:Zo,color_pars_fragment:Qo,color_pars_vertex:jo,color_vertex:Jo,common:es,cube_uv_reflection_fragment:ts,defaultnormal_vertex:ns,displacementmap_pars_vertex:is,displacementmap_vertex:rs,emissivemap_fragment:as,emissivemap_pars_fragment:os,colorspace_fragment:ss,colorspace_pars_fragment:cs,envmap_fragment:ls,envmap_common_pars_fragment:fs,envmap_pars_fragment:us,envmap_pars_vertex:ds,envmap_physical_pars_fragment:xs,envmap_vertex:ps,fog_vertex:hs,fog_pars_vertex:ms,fog_fragment:_s,fog_pars_fragment:vs,gradientmap_pars_fragment:gs,lightmap_pars_fragment:Es,lights_lambert_fragment:Ss,lights_lambert_pars_fragment:Ms,lights_pars_begin:Ts,lights_toon_fragment:As,lights_toon_pars_fragment:Rs,lights_phong_fragment:Cs,lights_phong_pars_fragment:bs,lights_physical_fragment:Ps,lights_physical_pars_fragment:Ls,lights_fragment_begin:ws,lights_fragment_maps:Us,lights_fragment_end:Ds,logdepthbuf_fragment:Is,logdepthbuf_pars_fragment:ys,logdepthbuf_pars_vertex:Ns,logdepthbuf_vertex:Os,map_fragment:Fs,map_pars_fragment:Bs,map_particle_fragment:Gs,map_particle_pars_fragment:Hs,metalnessmap_fragment:Vs,metalnessmap_pars_fragment:ks,morphinstance_vertex:Ws,morphcolor_vertex:zs,morphnormal_vertex:Xs,morphtarget_pars_vertex:Ys,morphtarget_vertex:qs,normal_fragment_begin:Ks,normal_fragment_maps:$s,normal_pars_fragment:Zs,normal_pars_vertex:Qs,normal_vertex:js,normalmap_pars_fragment:Js,clearcoat_normal_fragment_begin:ec,clearcoat_normal_fragment_maps:tc,clearcoat_pars_fragment:nc,iridescence_pars_fragment:ic,opaque_fragment:rc,packing:ac,premultiplied_alpha_fragment:oc,project_vertex:sc,dithering_fragment:cc,dithering_pars_fragment:lc,roughnessmap_fragment:fc,roughnessmap_pars_fragment:uc,shadowmap_pars_fragment:dc,shadowmap_pars_vertex:pc,shadowmap_vertex:hc,shadowmask_pars_fragment:mc,skinbase_vertex:_c,skinning_pars_vertex:vc,skinning_vertex:gc,skinnormal_vertex:Ec,specularmap_fragment:Sc,specularmap_pars_fragment:Mc,tonemapping_fragment:Tc,tonemapping_pars_fragment:xc,transmission_fragment:Ac,transmission_pars_fragment:Rc,uv_pars_fragment:Cc,uv_pars_vertex:bc,uv_vertex:Pc,worldpos_vertex:Lc,background_vert:wc,background_frag:Uc,backgroundCube_vert:Dc,backgroundCube_frag:Ic,cube_vert:yc,cube_frag:Nc,depth_vert:Oc,depth_frag:Fc,distanceRGBA_vert:Bc,distanceRGBA_frag:Gc,equirect_vert:Hc,equirect_frag:Vc,linedashed_vert:kc,linedashed_frag:Wc,meshbasic_vert:zc,meshbasic_frag:Xc,meshlambert_vert:Yc,meshlambert_frag:qc,meshmatcap_vert:Kc,meshmatcap_frag:$c,meshnormal_vert:Zc,meshnormal_frag:Qc,meshphong_vert:jc,meshphong_frag:Jc,meshphysical_vert:el,meshphysical_frag:tl,meshtoon_vert:nl,meshtoon_frag:il,points_vert:rl,points_frag:al,shadow_vert:ol,shadow_frag:sl,sprite_vert:cl,sprite_frag:ll},ee={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Et={basic:{uniforms:ct([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:ct([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:ct([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:ct([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:ct([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:ct([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:ct([ee.points,ee.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:ct([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:ct([ee.common,ee.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:ct([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:ct([ee.sprite,ee.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:ct([ee.common,ee.displacementmap,{referencePosition:{value:new Ge},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:ct([ee.lights,ee.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Et.physical={uniforms:ct([Et.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const cn={r:0,b:0,g:0},Pt=new Jn,fl=new zt;function ul(e,n,t,i,c,o,d){const f=new Ke(0);let b=o===!0?0:1,g,C,A=null,E=0,v=null;function N(T){let _=T.isScene===!0?T.background:null;return _&&_.isTexture&&(_=(T.backgroundBlurriness>0?t:n).get(_)),_}function w(T){let _=!1;const B=N(T);B===null?r(f,b):B&&B.isColor&&(r(B,1),_=!0);const L=e.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(T,_){const B=N(_);B&&(B.isCubeTexture||B.mapping===Sn)?(C===void 0&&(C=new At(new yr(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Hi(Et.backgroundCube.uniforms),vertexShader:Et.backgroundCube.vertexShader,fragmentShader:Et.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),C.geometry.deleteAttribute("normal"),C.geometry.deleteAttribute("uv"),C.onBeforeRender=function(L,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(C.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(C)),Pt.copy(_.backgroundRotation),Pt.x*=-1,Pt.y*=-1,Pt.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Pt.y*=-1,Pt.z*=-1),C.material.uniforms.envMap.value=B,C.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,C.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,C.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,C.material.uniforms.backgroundRotation.value.setFromMatrix4(fl.makeRotationFromEuler(Pt)),C.material.toneMapped=tt.getTransfer(B.colorSpace)!==Ye,(A!==B||E!==B.version||v!==e.toneMapping)&&(C.material.needsUpdate=!0,A=B,E=B.version,v=e.toneMapping),C.layers.enableAll(),T.unshift(C,C.geometry,C.material,0,0,null)):B&&B.isTexture&&(g===void 0&&(g=new At(new br(2,2),new Nt({name:"BackgroundMaterial",uniforms:Hi(Et.background.uniforms),vertexShader:Et.background.vertexShader,fragmentShader:Et.background.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(g)),g.material.uniforms.t2D.value=B,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=tt.getTransfer(B.colorSpace)!==Ye,B.matrixAutoUpdate===!0&&B.updateMatrix(),g.material.uniforms.uvTransform.value.copy(B.matrix),(A!==B||E!==B.version||v!==e.toneMapping)&&(g.material.needsUpdate=!0,A=B,E=B.version,v=e.toneMapping),g.layers.enableAll(),T.unshift(g,g.geometry,g.material,0,0,null))}function r(T,_){T.getRGB(cn,Ir(e)),i.buffers.color.setClear(cn.r,cn.g,cn.b,_,d)}function P(){C!==void 0&&(C.geometry.dispose(),C.material.dispose(),C=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(T,_=1){f.set(T),b=_,r(f,b)},getClearAlpha:function(){return b},setClearAlpha:function(T){b=T,r(f,b)},render:w,addToRenderList:l,dispose:P}}function dl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},c=E(null);let o=c,d=!1;function f(u,R,q,V,Y){let Q=!1;const W=A(V,q,R);o!==W&&(o=W,g(o.object)),Q=v(u,V,q,Y),Q&&N(u,V,q,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(Q||d)&&(d=!1,_(u,R,q,V),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function b(){return e.createVertexArray()}function g(u){return e.bindVertexArray(u)}function C(u){return e.deleteVertexArray(u)}function A(u,R,q){const V=q.wireframe===!0;let Y=i[u.id];Y===void 0&&(Y={},i[u.id]=Y);let Q=Y[R.id];Q===void 0&&(Q={},Y[R.id]=Q);let W=Q[V];return W===void 0&&(W=E(b()),Q[V]=W),W}function E(u){const R=[],q=[],V=[];for(let Y=0;Y<t;Y++)R[Y]=0,q[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:q,attributeDivisors:V,object:u,attributes:{},index:null}}function v(u,R,q,V){const Y=o.attributes,Q=R.attributes;let W=0;const J=q.getAttributes();for(const F in J)if(J[F].location>=0){const Se=Y[F];let Le=Q[F];if(Le===void 0&&(F==="instanceMatrix"&&u.instanceMatrix&&(Le=u.instanceMatrix),F==="instanceColor"&&u.instanceColor&&(Le=u.instanceColor)),Se===void 0||Se.attribute!==Le||Le&&Se.data!==Le.data)return!0;W++}return o.attributesNum!==W||o.index!==V}function N(u,R,q,V){const Y={},Q=R.attributes;let W=0;const J=q.getAttributes();for(const F in J)if(J[F].location>=0){let Se=Q[F];Se===void 0&&(F==="instanceMatrix"&&u.instanceMatrix&&(Se=u.instanceMatrix),F==="instanceColor"&&u.instanceColor&&(Se=u.instanceColor));const Le={};Le.attribute=Se,Se&&Se.data&&(Le.data=Se.data),Y[F]=Le,W++}o.attributes=Y,o.attributesNum=W,o.index=V}function w(){const u=o.newAttributes;for(let R=0,q=u.length;R<q;R++)u[R]=0}function l(u){r(u,0)}function r(u,R){const q=o.newAttributes,V=o.enabledAttributes,Y=o.attributeDivisors;q[u]=1,V[u]===0&&(e.enableVertexAttribArray(u),V[u]=1),Y[u]!==R&&(e.vertexAttribDivisor(u,R),Y[u]=R)}function P(){const u=o.newAttributes,R=o.enabledAttributes;for(let q=0,V=R.length;q<V;q++)R[q]!==u[q]&&(e.disableVertexAttribArray(q),R[q]=0)}function T(u,R,q,V,Y,Q,W){W===!0?e.vertexAttribIPointer(u,R,q,Y,Q):e.vertexAttribPointer(u,R,q,V,Y,Q)}function _(u,R,q,V){w();const Y=V.attributes,Q=q.getAttributes(),W=R.defaultAttributeValues;for(const J in Q){const F=Q[J];if(F.location>=0){let me=Y[J];if(me===void 0&&(J==="instanceMatrix"&&u.instanceMatrix&&(me=u.instanceMatrix),J==="instanceColor"&&u.instanceColor&&(me=u.instanceColor)),me!==void 0){const Se=me.normalized,Le=me.itemSize,He=n.get(me);if(He===void 0)continue;const Ze=He.buffer,k=He.type,j=He.bytesPerElement,de=k===e.INT||k===e.UNSIGNED_INT||me.gpuType===Pr;if(me.isInterleavedBufferAttribute){const ie=me.data,Me=ie.stride,Be=me.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<F.locationSize;Te++)r(F.location+Te,ie.meshPerAttribute);u.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<F.locationSize;Te++)l(F.location+Te);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let Te=0;Te<F.locationSize;Te++)T(F.location+Te,Le/F.locationSize,k,Se,Me*j,(Be+Le/F.locationSize*Te)*j,de)}else{if(me.isInstancedBufferAttribute){for(let ie=0;ie<F.locationSize;ie++)r(F.location+ie,me.meshPerAttribute);u.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ie=0;ie<F.locationSize;ie++)l(F.location+ie);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let ie=0;ie<F.locationSize;ie++)T(F.location+ie,Le/F.locationSize,k,Se,Le*j,Le/F.locationSize*ie*j,de)}}else if(W!==void 0){const Se=W[J];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(F.location,Se);break;case 3:e.vertexAttrib3fv(F.location,Se);break;case 4:e.vertexAttrib4fv(F.location,Se);break;default:e.vertexAttrib1fv(F.location,Se)}}}}P()}function B(){G();for(const u in i){const R=i[u];for(const q in R){const V=R[q];for(const Y in V)C(V[Y].object),delete V[Y];delete R[q]}delete i[u]}}function L(u){if(i[u.id]===void 0)return;const R=i[u.id];for(const q in R){const V=R[q];for(const Y in V)C(V[Y].object),delete V[Y];delete R[q]}delete i[u.id]}function I(u){for(const R in i){const q=i[R];if(q[u.id]===void 0)continue;const V=q[u.id];for(const Y in V)C(V[Y].object),delete V[Y];delete q[u.id]}}function G(){h(),d=!0,o!==c&&(o=c,g(o.object))}function h(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:G,resetDefaultState:h,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:l,disableUnusedAttributes:P}}function pl(e,n,t){let i;function c(g){i=g}function o(g,C){e.drawArrays(i,g,C),t.update(C,i,1)}function d(g,C,A){A!==0&&(e.drawArraysInstanced(i,g,C,A),t.update(C,i,A))}function f(g,C,A){if(A===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,g,0,C,0,A);let v=0;for(let N=0;N<A;N++)v+=C[N];t.update(v,i,1)}function b(g,C,A,E){if(A===0)return;const v=n.get("WEBGL_multi_draw");if(v===null)for(let N=0;N<g.length;N++)d(g[N],C[N],E[N]);else{v.multiDrawArraysInstancedWEBGL(i,g,0,C,0,E,0,A);let N=0;for(let w=0;w<A;w++)N+=C[w]*E[w];t.update(N,i,1)}}this.setMode=c,this.render=o,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=b}function hl(e,n,t,i){let c;function o(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");c=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(I){return!(I!==xt&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const G=I===gn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(I!==yt&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Dt&&!G)}function b(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const C=b(g);C!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",C,"instead."),g=C);const A=t.logarithmicDepthBuffer===!0,E=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),N=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),r=e.getParameter(e.MAX_VERTEX_ATTRIBS),P=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),B=N>0,L=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:b,textureFormatReadable:d,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:A,reverseDepthBuffer:E,maxTextures:v,maxVertexTextures:N,maxTextureSize:w,maxCubemapSize:l,maxAttributes:r,maxVertexUniforms:P,maxVaryings:T,maxFragmentUniforms:_,vertexTextures:B,maxSamples:L}}function ml(e){const n=this;let t=null,i=0,c=!1,o=!1;const d=new Ba,f=new Fe,b={value:null,needsUpdate:!1};this.uniform=b,this.numPlanes=0,this.numIntersection=0,this.init=function(A,E){const v=A.length!==0||E||i!==0||c;return c=E,i=A.length,v},this.beginShadows=function(){o=!0,C(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(A,E){t=C(A,E,0)},this.setState=function(A,E,v){const N=A.clippingPlanes,w=A.clipIntersection,l=A.clipShadows,r=e.get(A);if(!c||N===null||N.length===0||o&&!l)o?C(null):g();else{const P=o?0:i,T=P*4;let _=r.clippingState||null;b.value=_,_=C(N,E,T,v);for(let B=0;B!==T;++B)_[B]=t[B];r.clippingState=_,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function g(){b.value!==t&&(b.value=t,b.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function C(A,E,v,N){const w=A!==null?A.length:0;let l=null;if(w!==0){if(l=b.value,N!==!0||l===null){const r=v+w*4,P=E.matrixWorldInverse;f.getNormalMatrix(P),(l===null||l.length<r)&&(l=new Float32Array(r));for(let T=0,_=v;T!==w;++T,_+=4)d.copy(A[T]).applyMatrix4(P,f),d.normal.toArray(l,_),l[_+3]=d.constant}b.value=l,b.needsUpdate=!0}return n.numPlanes=w,n.numIntersection=0,l}}function _l(e){let n=new WeakMap;function t(d,f){return f===Xn?d.mapping=rn:f===Yn&&(d.mapping=Yt),d}function i(d){if(d&&d.isTexture){const f=d.mapping;if(f===Xn||f===Yn)if(n.has(d)){const b=n.get(d).texture;return t(b,d.mapping)}else{const b=d.image;if(b&&b.height>0){const g=new Ja(b.height);return g.fromEquirectangularTexture(e,d),n.set(d,g),d.addEventListener("dispose",c),t(g.texture,d.mapping)}else return null}}return d}function c(d){const f=d.target;f.removeEventListener("dispose",c);const b=n.get(f);b!==void 0&&(n.delete(f),b.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const Wt=4,Wi=[.125,.215,.35,.446,.526,.582],Ut=20,Dn=new io,zi=new Ke;let In=null,yn=0,Nn=0,On=!1;const wt=(1+Math.sqrt(5))/2,Ft=1/wt,Xi=[new Ge(-wt,Ft,0),new Ge(wt,Ft,0),new Ge(-Ft,0,wt),new Ge(Ft,0,wt),new Ge(0,wt,-Ft),new Ge(0,wt,Ft),new Ge(-1,1,-1),new Ge(1,1,-1),new Ge(-1,1,1),new Ge(1,1,1)];class Yi{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,c=100){In=this._renderer.getRenderTarget(),yn=this._renderer.getActiveCubeFace(),Nn=this._renderer.getActiveMipmapLevel(),On=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(n,i,c,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$i(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ki(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(In,yn,Nn),this._renderer.xr.enabled=On,n.scissorTest=!1,ln(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===rn||n.mapping===Yt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),In=this._renderer.getRenderTarget(),yn=this._renderer.getActiveCubeFace(),Nn=this._renderer.getActiveMipmapLevel(),On=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:gn,format:xt,colorSpace:En,depthBuffer:!1},c=qi(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qi(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vl(o)),this._blurMaterial=gl(o,n,t)}return c}_compileMaterial(n){const t=new At(this._lodPlanes[0],n);this._renderer.compile(t,Dn)}_sceneToCubeUV(n,t,i,c){const f=new jt(90,1,t,i),b=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],C=this._renderer,A=C.autoClear,E=C.toneMapping;C.getClearColor(zi),C.toneMapping=Rt,C.autoClear=!1;const v=new ro({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),N=new At(new yr,v);let w=!1;const l=n.background;l?l.isColor&&(v.color.copy(l),n.background=null,w=!0):(v.color.copy(zi),w=!0);for(let r=0;r<6;r++){const P=r%3;P===0?(f.up.set(0,b[r],0),f.lookAt(g[r],0,0)):P===1?(f.up.set(0,0,b[r]),f.lookAt(0,g[r],0)):(f.up.set(0,b[r],0),f.lookAt(0,0,g[r]));const T=this._cubeSize;ln(c,P*T,r>2?T:0,T,T),C.setRenderTarget(c),w&&C.render(N,f),C.render(n,f)}N.geometry.dispose(),N.material.dispose(),C.toneMapping=E,C.autoClear=A,n.background=l}_textureToCubeUV(n,t){const i=this._renderer,c=n.mapping===rn||n.mapping===Yt;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=$i()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ki());const o=c?this._cubemapMaterial:this._equirectMaterial,d=new At(this._lodPlanes[0],o),f=o.uniforms;f.envMap.value=n;const b=this._cubeSize;ln(t,0,0,3*b,2*b),i.setRenderTarget(t),i.render(d,Dn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const c=this._lodPlanes.length;for(let o=1;o<c;o++){const d=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=Xi[(c-o-1)%Xi.length];this._blur(n,o-1,o,d,f)}t.autoClear=i}_blur(n,t,i,c,o){const d=this._pingPongRenderTarget;this._halfBlur(n,d,t,i,c,"latitudinal",o),this._halfBlur(d,n,i,i,c,"longitudinal",o)}_halfBlur(n,t,i,c,o,d,f){const b=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const C=3,A=new At(this._lodPlanes[c],g),E=g.uniforms,v=this._sizeLods[i]-1,N=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Ut-1),w=o/N,l=isFinite(o)?1+Math.floor(C*w):Ut;l>Ut&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${Ut}`);const r=[];let P=0;for(let I=0;I<Ut;++I){const G=I/w,h=Math.exp(-G*G/2);r.push(h),I===0?P+=h:I<l&&(P+=2*h)}for(let I=0;I<r.length;I++)r[I]=r[I]/P;E.envMap.value=n.texture,E.samples.value=l,E.weights.value=r,E.latitudinal.value=d==="latitudinal",f&&(E.poleAxis.value=f);const{_lodMax:T}=this;E.dTheta.value=N,E.mipInt.value=T-i;const _=this._sizeLods[c],B=3*_*(c>T-Wt?c-T+Wt:0),L=4*(this._cubeSize-_);ln(t,B,L,3*_,2*_),b.setRenderTarget(t),b.render(A,Dn)}}function vl(e){const n=[],t=[],i=[];let c=e;const o=e-Wt+1+Wi.length;for(let d=0;d<o;d++){const f=Math.pow(2,c);t.push(f);let b=1/f;d>e-Wt?b=Wi[d-e+Wt-1]:d===0&&(b=0),i.push(b);const g=1/(f-2),C=-g,A=1+g,E=[C,C,A,C,A,A,C,C,A,A,C,A],v=6,N=6,w=3,l=2,r=1,P=new Float32Array(w*N*v),T=new Float32Array(l*N*v),_=new Float32Array(r*N*v);for(let L=0;L<v;L++){const I=L%3*2/3-1,G=L>2?0:-1,h=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];P.set(h,w*N*L),T.set(E,l*N*L);const u=[L,L,L,L,L,L];_.set(u,r*N*L)}const B=new Tr;B.setAttribute("position",new dn(P,w)),B.setAttribute("uv",new dn(T,l)),B.setAttribute("faceIndex",new dn(_,r)),n.push(B),c>Wt&&c--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function qi(e,n,t){const i=new Xt(e,n,t);return i.texture.mapping=Sn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ln(e,n,t,i,c){e.viewport.set(n,t,i,c),e.scissor.set(n,t,i,c)}function gl(e,n,t){const i=new Float32Array(Ut),c=new Ge(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Ut,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:ni(),fragmentShader:`

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
	`}function El(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const b=f.mapping,g=b===Xn||b===Yn,C=b===rn||b===Yt;if(g||C){let A=n.get(f);const E=A!==void 0?A.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==E)return t===null&&(t=new Yi(e)),A=g?t.fromEquirectangular(f,A):t.fromCubemap(f,A),A.texture.pmremVersion=f.pmremVersion,n.set(f,A),A.texture;if(A!==void 0)return A.texture;{const v=f.image;return g&&v&&v.height>0||C&&v&&c(v)?(t===null&&(t=new Yi(e)),A=g?t.fromEquirectangular(f):t.fromCubemap(f),A.texture.pmremVersion=f.pmremVersion,n.set(f,A),f.addEventListener("dispose",o),A.texture):null}}}return f}function c(f){let b=0;const g=6;for(let C=0;C<g;C++)f[C]!==void 0&&b++;return b===g}function o(f){const b=f.target;b.removeEventListener("dispose",o);const g=n.get(b);g!==void 0&&(n.delete(b),g.dispose())}function d(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:d}}function Sl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let c;switch(i){case"WEBGL_depth_texture":c=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=e.getExtension(i)}return n[i]=c,c}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const c=t(i);return c===null&&Ht("THREE.WebGLRenderer: "+i+" extension not supported."),c}}}function Ml(e,n,t,i){const c={},o=new WeakMap;function d(A){const E=A.target;E.index!==null&&n.remove(E.index);for(const N in E.attributes)n.remove(E.attributes[N]);E.removeEventListener("dispose",d),delete c[E.id];const v=o.get(E);v&&(n.remove(v),o.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function f(A,E){return c[E.id]===!0||(E.addEventListener("dispose",d),c[E.id]=!0,t.memory.geometries++),E}function b(A){const E=A.attributes;for(const v in E)n.update(E[v],e.ARRAY_BUFFER)}function g(A){const E=[],v=A.index,N=A.attributes.position;let w=0;if(v!==null){const P=v.array;w=v.version;for(let T=0,_=P.length;T<_;T+=3){const B=P[T+0],L=P[T+1],I=P[T+2];E.push(B,L,L,I,I,B)}}else if(N!==void 0){const P=N.array;w=N.version;for(let T=0,_=P.length/3-1;T<_;T+=3){const B=T+0,L=T+1,I=T+2;E.push(B,L,L,I,I,B)}}else return;const l=new(so(E)?ao:oo)(E,1);l.version=w;const r=o.get(A);r&&n.remove(r),o.set(A,l)}function C(A){const E=o.get(A);if(E){const v=A.index;v!==null&&E.version<v.version&&g(A)}else g(A);return o.get(A)}return{get:f,update:b,getWireframeAttribute:C}}function Tl(e,n,t){let i;function c(E){i=E}let o,d;function f(E){o=E.type,d=E.bytesPerElement}function b(E,v){e.drawElements(i,v,o,E*d),t.update(v,i,1)}function g(E,v,N){N!==0&&(e.drawElementsInstanced(i,v,o,E*d,N),t.update(v,i,N))}function C(E,v,N){if(N===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,E,0,N);let l=0;for(let r=0;r<N;r++)l+=v[r];t.update(l,i,1)}function A(E,v,N,w){if(N===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let r=0;r<E.length;r++)g(E[r]/d,v[r],w[r]);else{l.multiDrawElementsInstancedWEBGL(i,v,0,o,E,0,w,0,N);let r=0;for(let P=0;P<N;P++)r+=v[P]*w[P];t.update(r,i,1)}}this.setMode=c,this.setIndex=f,this.render=b,this.renderInstances=g,this.renderMultiDraw=C,this.renderMultiDrawInstances=A}function xl(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,d,f){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=f*(o/3);break;case e.LINES:t.lines+=f*(o/2);break;case e.LINE_STRIP:t.lines+=f*(o-1);break;case e.LINE_LOOP:t.lines+=f*o;break;case e.POINTS:t.points+=f*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function c(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:c,update:i}}function Al(e,n,t){const i=new WeakMap,c=new ft;function o(d,f,b){const g=d.morphTargetInfluences,C=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,A=C!==void 0?C.length:0;let E=i.get(f);if(E===void 0||E.count!==A){let h=function(){I.dispose(),i.delete(f),f.removeEventListener("dispose",h)};E!==void 0&&E.texture.dispose();const v=f.morphAttributes.position!==void 0,N=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,l=f.morphAttributes.position||[],r=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let T=0;v===!0&&(T=1),N===!0&&(T=2),w===!0&&(T=3);let _=f.attributes.position.count*T,B=1;_>n.maxTextureSize&&(B=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const L=new Float32Array(_*B*4*A),I=new Dr(L,_,B,A);I.type=Dt,I.needsUpdate=!0;const G=T*4;for(let u=0;u<A;u++){const R=l[u],q=r[u],V=P[u],Y=_*B*4*u;for(let Q=0;Q<R.count;Q++){const W=Q*G;v===!0&&(c.fromBufferAttribute(R,Q),L[Y+W+0]=c.x,L[Y+W+1]=c.y,L[Y+W+2]=c.z,L[Y+W+3]=0),N===!0&&(c.fromBufferAttribute(q,Q),L[Y+W+4]=c.x,L[Y+W+5]=c.y,L[Y+W+6]=c.z,L[Y+W+7]=0),w===!0&&(c.fromBufferAttribute(V,Q),L[Y+W+8]=c.x,L[Y+W+9]=c.y,L[Y+W+10]=c.z,L[Y+W+11]=V.itemSize===4?c.w:1)}}E={count:A,texture:I,size:new ut(_,B)},i.set(f,E),f.addEventListener("dispose",h)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)b.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let v=0;for(let w=0;w<g.length;w++)v+=g[w];const N=f.morphTargetsRelative?1:1-v;b.getUniforms().setValue(e,"morphTargetBaseInfluence",N),b.getUniforms().setValue(e,"morphTargetInfluences",g)}b.getUniforms().setValue(e,"morphTargetsTexture",E.texture,t),b.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:o}}function Rl(e,n,t,i){let c=new WeakMap;function o(b){const g=i.render.frame,C=b.geometry,A=n.get(b,C);if(c.get(A)!==g&&(n.update(A),c.set(A,g)),b.isInstancedMesh&&(b.hasEventListener("dispose",f)===!1&&b.addEventListener("dispose",f),c.get(b)!==g&&(t.update(b.instanceMatrix,e.ARRAY_BUFFER),b.instanceColor!==null&&t.update(b.instanceColor,e.ARRAY_BUFFER),c.set(b,g))),b.isSkinnedMesh){const E=b.skeleton;c.get(E)!==g&&(E.update(),c.set(E,g))}return A}function d(){c=new WeakMap}function f(b){const g=b.target;g.removeEventListener("dispose",f),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:o,dispose:d}}const Br=new Cr,Zi=new Sr(1,1),Gr=new Dr,Hr=new Eo,Vr=new go,Qi=[],ji=[],Ji=new Float32Array(16),er=new Float32Array(9),tr=new Float32Array(4);function qt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const c=n*t;let o=Qi[c];if(o===void 0&&(o=new Float32Array(c),Qi[c]=o),n!==0){i.toArray(o,0);for(let d=1,f=0;d!==n;++d)f+=t,e[d].toArray(o,f)}return o}function nt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function it(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Mn(e,n){let t=ji[n];t===void 0&&(t=new Int32Array(n),ji[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Cl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function bl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(nt(t,n))return;e.uniform2fv(this.addr,n),it(t,n)}}function Pl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(nt(t,n))return;e.uniform3fv(this.addr,n),it(t,n)}}function Ll(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(nt(t,n))return;e.uniform4fv(this.addr,n),it(t,n)}}function wl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(nt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),it(t,n)}else{if(nt(t,i))return;tr.set(i),e.uniformMatrix2fv(this.addr,!1,tr),it(t,i)}}function Ul(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(nt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),it(t,n)}else{if(nt(t,i))return;er.set(i),e.uniformMatrix3fv(this.addr,!1,er),it(t,i)}}function Dl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(nt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),it(t,n)}else{if(nt(t,i))return;Ji.set(i),e.uniformMatrix4fv(this.addr,!1,Ji),it(t,i)}}function Il(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function yl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(nt(t,n))return;e.uniform2iv(this.addr,n),it(t,n)}}function Nl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(nt(t,n))return;e.uniform3iv(this.addr,n),it(t,n)}}function Ol(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(nt(t,n))return;e.uniform4iv(this.addr,n),it(t,n)}}function Fl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Bl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(nt(t,n))return;e.uniform2uiv(this.addr,n),it(t,n)}}function Gl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(nt(t,n))return;e.uniform3uiv(this.addr,n),it(t,n)}}function Hl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(nt(t,n))return;e.uniform4uiv(this.addr,n),it(t,n)}}function Vl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c);let o;this.type===e.SAMPLER_2D_SHADOW?(Zi.compareFunction=Mr,o=Zi):o=Br,t.setTexture2D(n||o,c)}function kl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture3D(n||Hr,c)}function Wl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTextureCube(n||Vr,c)}function zl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture2DArray(n||Gr,c)}function Xl(e){switch(e){case 5126:return Cl;case 35664:return bl;case 35665:return Pl;case 35666:return Ll;case 35674:return wl;case 35675:return Ul;case 35676:return Dl;case 5124:case 35670:return Il;case 35667:case 35671:return yl;case 35668:case 35672:return Nl;case 35669:case 35673:return Ol;case 5125:return Fl;case 36294:return Bl;case 36295:return Gl;case 36296:return Hl;case 35678:case 36198:case 36298:case 36306:case 35682:return Vl;case 35679:case 36299:case 36307:return kl;case 35680:case 36300:case 36308:case 36293:return Wl;case 36289:case 36303:case 36311:case 36292:return zl}}function Yl(e,n){e.uniform1fv(this.addr,n)}function ql(e,n){const t=qt(n,this.size,2);e.uniform2fv(this.addr,t)}function Kl(e,n){const t=qt(n,this.size,3);e.uniform3fv(this.addr,t)}function $l(e,n){const t=qt(n,this.size,4);e.uniform4fv(this.addr,t)}function Zl(e,n){const t=qt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Ql(e,n){const t=qt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function jl(e,n){const t=qt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Jl(e,n){e.uniform1iv(this.addr,n)}function ef(e,n){e.uniform2iv(this.addr,n)}function tf(e,n){e.uniform3iv(this.addr,n)}function nf(e,n){e.uniform4iv(this.addr,n)}function rf(e,n){e.uniform1uiv(this.addr,n)}function af(e,n){e.uniform2uiv(this.addr,n)}function of(e,n){e.uniform3uiv(this.addr,n)}function sf(e,n){e.uniform4uiv(this.addr,n)}function cf(e,n,t){const i=this.cache,c=n.length,o=Mn(t,c);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let d=0;d!==c;++d)t.setTexture2D(n[d]||Br,o[d])}function lf(e,n,t){const i=this.cache,c=n.length,o=Mn(t,c);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let d=0;d!==c;++d)t.setTexture3D(n[d]||Hr,o[d])}function ff(e,n,t){const i=this.cache,c=n.length,o=Mn(t,c);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let d=0;d!==c;++d)t.setTextureCube(n[d]||Vr,o[d])}function uf(e,n,t){const i=this.cache,c=n.length,o=Mn(t,c);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let d=0;d!==c;++d)t.setTexture2DArray(n[d]||Gr,o[d])}function df(e){switch(e){case 5126:return Yl;case 35664:return ql;case 35665:return Kl;case 35666:return $l;case 35674:return Zl;case 35675:return Ql;case 35676:return jl;case 5124:case 35670:return Jl;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return rf;case 36294:return af;case 36295:return of;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return uf}}class pf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xl(t.type)}}class hf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=df(t.type)}}class mf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const c=this.seq;for(let o=0,d=c.length;o!==d;++o){const f=c[o];f.setValue(n,t[f.id],i)}}}const Fn=/(\w+)(\])?(\[|\.)?/g;function nr(e,n){e.seq.push(n),e.map[n.id]=n}function _f(e,n,t){const i=e.name,c=i.length;for(Fn.lastIndex=0;;){const o=Fn.exec(i),d=Fn.lastIndex;let f=o[1];const b=o[2]==="]",g=o[3];if(b&&(f=f|0),g===void 0||g==="["&&d+2===c){nr(t,g===void 0?new pf(f,e,n):new hf(f,e,n));break}else{let A=t.map[f];A===void 0&&(A=new mf(f),nr(t,A)),t=A}}}class hn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const o=n.getActiveUniform(t,c),d=n.getUniformLocation(t,o.name);_f(o,d,this)}}setValue(n,t,i,c){const o=this.map[t];o!==void 0&&o.setValue(n,i,c)}setOptional(n,t,i){const c=t[i];c!==void 0&&this.setValue(n,i,c)}static upload(n,t,i,c){for(let o=0,d=t.length;o!==d;++o){const f=t[o],b=i[f.id];b.needsUpdate!==!1&&f.setValue(n,b.value,c)}}static seqWithValue(n,t){const i=[];for(let c=0,o=n.length;c!==o;++c){const d=n[c];d.id in t&&i.push(d)}return i}}function ir(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const vf=37297;let gf=0;function Ef(e,n){const t=e.split(`
`),i=[],c=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let d=c;d<o;d++){const f=d+1;i.push(`${f===n?">":" "} ${f}: ${t[d]}`)}return i.join(`
`)}const rr=new Fe;function Sf(e){tt._getMatrix(rr,tt.workingColorSpace,e);const n=`mat3( ${rr.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(e)){case Nr:return[n,"LinearTransferOETF"];case Ye:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ar(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),c=e.getShaderInfoLog(n).trim();if(i&&c==="")return"";const o=/ERROR: 0:(\d+)/.exec(c);if(o){const d=parseInt(o[1]);return t.toUpperCase()+`

`+c+`

`+Ef(e.getShaderSource(n),d)}else return c}function Mf(e,n){const t=Sf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tf(e,n){let t;switch(n){case vo:t="Linear";break;case _o:t="Reinhard";break;case mo:t="Cineon";break;case ho:t="ACESFilmic";break;case po:t="AgX";break;case uo:t="Neutral";break;case fo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fn=new Ge;function xf(){tt.getLuminanceCoefficients(fn);const e=fn.x.toFixed(4),n=fn.y.toFixed(4),t=fn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Af(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qt).join(`
`)}function Rf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Cf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let c=0;c<i;c++){const o=e.getActiveAttrib(n,c),d=o.name;let f=1;o.type===e.FLOAT_MAT2&&(f=2),o.type===e.FLOAT_MAT3&&(f=3),o.type===e.FLOAT_MAT4&&(f=4),t[d]={type:o.type,location:e.getAttribLocation(n,d),locationSize:f}}return t}function Qt(e){return e!==""}function or(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function sr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function qn(e){return e.replace(bf,Lf)}const Pf=new Map;function Lf(e,n){let t=Pe[n];if(t===void 0){const i=Pf.get(n);if(i!==void 0)t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return qn(t)}const wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cr(e){return e.replace(wf,Uf)}function Uf(e,n,t,i){let c="";for(let o=parseInt(n);o<parseInt(t);o++)c+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return c}function lr(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function Df(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===xr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===lo?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Mt&&(n="SHADOWMAP_TYPE_VSM"),n}function If(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case rn:case Yt:n="ENVMAP_TYPE_CUBE";break;case Sn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function yf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Yt:n="ENVMAP_MODE_REFRACTION";break}return n}function Nf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case xo:n="ENVMAP_BLENDING_MULTIPLY";break;case To:n="ENVMAP_BLENDING_MIX";break;case Mo:n="ENVMAP_BLENDING_ADD";break}return n}function Of(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ff(e,n,t,i){const c=e.getContext(),o=t.defines;let d=t.vertexShader,f=t.fragmentShader;const b=Df(t),g=If(t),C=yf(t),A=Nf(t),E=Of(t),v=Af(t),N=Rf(o),w=c.createProgram();let l,r,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Qt).join(`
`),l.length>0&&(l+=`
`),r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Qt).join(`
`),r.length>0&&(r+=`
`)):(l=[lr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+C:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qt).join(`
`),r=[lr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+C:"",t.envMap?"#define "+A:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rt?"#define TONE_MAPPING":"",t.toneMapping!==Rt?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Rt?Tf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Mf("linearToOutputTexel",t.outputColorSpace),xf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qt).join(`
`)),d=qn(d),d=or(d,t),d=sr(d,t),f=qn(f),f=or(f,t),f=sr(f,t),d=cr(d),f=cr(f),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,l=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,r=["#define varying in",t.glslVersion===ki?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ki?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const T=P+l+d,_=P+r+f,B=ir(c,c.VERTEX_SHADER,T),L=ir(c,c.FRAGMENT_SHADER,_);c.attachShader(w,B),c.attachShader(w,L),t.index0AttributeName!==void 0?c.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&c.bindAttribLocation(w,0,"position"),c.linkProgram(w);function I(R){if(e.debug.checkShaderErrors){const q=c.getProgramInfoLog(w).trim(),V=c.getShaderInfoLog(B).trim(),Y=c.getShaderInfoLog(L).trim();let Q=!0,W=!0;if(c.getProgramParameter(w,c.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,w,B,L);else{const J=ar(c,B,"vertex"),F=ar(c,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(w,c.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+q+`
`+J+`
`+F)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||Y==="")&&(W=!1);W&&(R.diagnostics={runnable:Q,programLog:q,vertexShader:{log:V,prefix:l},fragmentShader:{log:Y,prefix:r}})}c.deleteShader(B),c.deleteShader(L),G=new hn(c,w),h=Cf(c,w)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let h;this.getAttributes=function(){return h===void 0&&I(this),h};let u=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=c.getProgramParameter(w,vf)),u},this.destroy=function(){i.releaseStatesOfProgram(this),c.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gf++,this.cacheKey=n,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=L,this}let Bf=0;class Gf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,c=this._getShaderStage(t),o=this._getShaderStage(i),d=this._getShaderCacheForMaterial(n);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(o)===!1&&(d.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Hf(n),t.set(n,i)),i}}class Hf{constructor(n){this.id=Bf++,this.code=n,this.usedTimes=0}}function Vf(e,n,t,i,c,o,d){const f=new co,b=new Gf,g=new Set,C=[],A=c.logarithmicDepthBuffer,E=c.vertexTextures;let v=c.precision;const N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(h){return g.add(h),h===0?"uv":`uv${h}`}function l(h,u,R,q,V){const Y=q.fog,Q=V.geometry,W=h.isMeshStandardMaterial?q.environment:null,J=(h.isMeshStandardMaterial?t:n).get(h.envMap||W),F=J&&J.mapping===Sn?J.image.height:null,me=N[h.type];h.precision!==null&&(v=c.getMaxPrecision(h.precision),v!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",v,"instead."));const Se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Le=Se!==void 0?Se.length:0;let He=0;Q.morphAttributes.position!==void 0&&(He=1),Q.morphAttributes.normal!==void 0&&(He=2),Q.morphAttributes.color!==void 0&&(He=3);let Ze,k,j,de;if(me){const We=Et[me];Ze=We.vertexShader,k=We.fragmentShader}else Ze=h.vertexShader,k=h.fragmentShader,b.update(h),j=b.getVertexShaderID(h),de=b.getFragmentShaderID(h);const ie=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),Be=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,Je=!!h.map,$e=!!h.matcap,we=!!J,m=!!h.aoMap,pt=!!h.lightMap,Ue=!!h.bumpMap,De=!!h.normalMap,_e=!!h.displacementMap,Xe=!!h.emissiveMap,he=!!h.metalnessMap,p=!!h.roughnessMap,a=h.anisotropy>0,U=h.clearcoat>0,z=h.dispersion>0,K=h.iridescence>0,H=h.sheen>0,pe=h.transmission>0,re=a&&!!h.anisotropyMap,ce=U&&!!h.clearcoatMap,ye=U&&!!h.clearcoatNormalMap,Z=U&&!!h.clearcoatRoughnessMap,le=K&&!!h.iridescenceMap,Ee=K&&!!h.iridescenceThicknessMap,xe=H&&!!h.sheenColorMap,fe=H&&!!h.sheenRoughnessMap,Ie=!!h.specularMap,be=!!h.specularColorMap,ze=!!h.specularIntensityMap,S=pe&&!!h.transmissionMap,te=pe&&!!h.thicknessMap,O=!!h.gradientMap,X=!!h.alphaMap,oe=h.alphaTest>0,ae=!!h.alphaHash,Ce=!!h.extensions;let Qe=Rt;h.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Qe=e.toneMapping);const at={shaderID:me,shaderType:h.type,shaderName:h.name,vertexShader:Ze,fragmentShader:k,defines:h.defines,customVertexShaderID:j,customFragmentShaderID:de,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:v,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:Be,instancingColor:Be&&V.instanceColor!==null,instancingMorph:Be&&V.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:ie===null?e.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:En,alphaToCoverage:!!h.alphaToCoverage,map:Je,matcap:$e,envMap:we,envMapMode:we&&J.mapping,envMapCubeUVHeight:F,aoMap:m,lightMap:pt,bumpMap:Ue,normalMap:De,displacementMap:E&&_e,emissiveMap:Xe,normalMapObjectSpace:De&&h.normalMapType===no,normalMapTangentSpace:De&&h.normalMapType===to,metalnessMap:he,roughnessMap:p,anisotropy:a,anisotropyMap:re,clearcoat:U,clearcoatMap:ce,clearcoatNormalMap:ye,clearcoatRoughnessMap:Z,dispersion:z,iridescence:K,iridescenceMap:le,iridescenceThicknessMap:Ee,sheen:H,sheenColorMap:xe,sheenRoughnessMap:fe,specularMap:Ie,specularColorMap:be,specularIntensityMap:ze,transmission:pe,transmissionMap:S,thicknessMap:te,gradientMap:O,opaque:h.transparent===!1&&h.blending===pn&&h.alphaToCoverage===!1,alphaMap:X,alphaTest:oe,alphaHash:ae,combine:h.combine,mapUv:Je&&w(h.map.channel),aoMapUv:m&&w(h.aoMap.channel),lightMapUv:pt&&w(h.lightMap.channel),bumpMapUv:Ue&&w(h.bumpMap.channel),normalMapUv:De&&w(h.normalMap.channel),displacementMapUv:_e&&w(h.displacementMap.channel),emissiveMapUv:Xe&&w(h.emissiveMap.channel),metalnessMapUv:he&&w(h.metalnessMap.channel),roughnessMapUv:p&&w(h.roughnessMap.channel),anisotropyMapUv:re&&w(h.anisotropyMap.channel),clearcoatMapUv:ce&&w(h.clearcoatMap.channel),clearcoatNormalMapUv:ye&&w(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&w(h.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&w(h.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&w(h.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&w(h.sheenColorMap.channel),sheenRoughnessMapUv:fe&&w(h.sheenRoughnessMap.channel),specularMapUv:Ie&&w(h.specularMap.channel),specularColorMapUv:be&&w(h.specularColorMap.channel),specularIntensityMapUv:ze&&w(h.specularIntensityMap.channel),transmissionMapUv:S&&w(h.transmissionMap.channel),thicknessMapUv:te&&w(h.thicknessMap.channel),alphaMapUv:X&&w(h.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(De||a),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(Je||X),fog:!!Y,useFog:h.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:h.flatShading===!0,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:A,reverseDepthBuffer:Me,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:He,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Je&&h.map.isVideoTexture===!0&&tt.getTransfer(h.map.colorSpace)===Ye,decodeVideoTextureEmissive:Xe&&h.emissiveMap.isVideoTexture===!0&&tt.getTransfer(h.emissiveMap.colorSpace)===Ye,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===Tt,flipSided:h.side===_t,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:Ce&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&h.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return at.vertexUv1s=g.has(1),at.vertexUv2s=g.has(2),at.vertexUv3s=g.has(3),g.clear(),at}function r(h){const u=[];if(h.shaderID?u.push(h.shaderID):(u.push(h.customVertexShaderID),u.push(h.customFragmentShaderID)),h.defines!==void 0)for(const R in h.defines)u.push(R),u.push(h.defines[R]);return h.isRawShaderMaterial===!1&&(P(u,h),T(u,h),u.push(e.outputColorSpace)),u.push(h.customProgramCacheKey),u.join()}function P(h,u){h.push(u.precision),h.push(u.outputColorSpace),h.push(u.envMapMode),h.push(u.envMapCubeUVHeight),h.push(u.mapUv),h.push(u.alphaMapUv),h.push(u.lightMapUv),h.push(u.aoMapUv),h.push(u.bumpMapUv),h.push(u.normalMapUv),h.push(u.displacementMapUv),h.push(u.emissiveMapUv),h.push(u.metalnessMapUv),h.push(u.roughnessMapUv),h.push(u.anisotropyMapUv),h.push(u.clearcoatMapUv),h.push(u.clearcoatNormalMapUv),h.push(u.clearcoatRoughnessMapUv),h.push(u.iridescenceMapUv),h.push(u.iridescenceThicknessMapUv),h.push(u.sheenColorMapUv),h.push(u.sheenRoughnessMapUv),h.push(u.specularMapUv),h.push(u.specularColorMapUv),h.push(u.specularIntensityMapUv),h.push(u.transmissionMapUv),h.push(u.thicknessMapUv),h.push(u.combine),h.push(u.fogExp2),h.push(u.sizeAttenuation),h.push(u.morphTargetsCount),h.push(u.morphAttributeCount),h.push(u.numDirLights),h.push(u.numPointLights),h.push(u.numSpotLights),h.push(u.numSpotLightMaps),h.push(u.numHemiLights),h.push(u.numRectAreaLights),h.push(u.numDirLightShadows),h.push(u.numPointLightShadows),h.push(u.numSpotLightShadows),h.push(u.numSpotLightShadowsWithMaps),h.push(u.numLightProbes),h.push(u.shadowMapType),h.push(u.toneMapping),h.push(u.numClippingPlanes),h.push(u.numClipIntersection),h.push(u.depthPacking)}function T(h,u){f.disableAll(),u.supportsVertexTextures&&f.enable(0),u.instancing&&f.enable(1),u.instancingColor&&f.enable(2),u.instancingMorph&&f.enable(3),u.matcap&&f.enable(4),u.envMap&&f.enable(5),u.normalMapObjectSpace&&f.enable(6),u.normalMapTangentSpace&&f.enable(7),u.clearcoat&&f.enable(8),u.iridescence&&f.enable(9),u.alphaTest&&f.enable(10),u.vertexColors&&f.enable(11),u.vertexAlphas&&f.enable(12),u.vertexUv1s&&f.enable(13),u.vertexUv2s&&f.enable(14),u.vertexUv3s&&f.enable(15),u.vertexTangents&&f.enable(16),u.anisotropy&&f.enable(17),u.alphaHash&&f.enable(18),u.batching&&f.enable(19),u.dispersion&&f.enable(20),u.batchingColor&&f.enable(21),h.push(f.mask),f.disableAll(),u.fog&&f.enable(0),u.useFog&&f.enable(1),u.flatShading&&f.enable(2),u.logarithmicDepthBuffer&&f.enable(3),u.reverseDepthBuffer&&f.enable(4),u.skinning&&f.enable(5),u.morphTargets&&f.enable(6),u.morphNormals&&f.enable(7),u.morphColors&&f.enable(8),u.premultipliedAlpha&&f.enable(9),u.shadowMapEnabled&&f.enable(10),u.doubleSided&&f.enable(11),u.flipSided&&f.enable(12),u.useDepthPacking&&f.enable(13),u.dithering&&f.enable(14),u.transmission&&f.enable(15),u.sheen&&f.enable(16),u.opaque&&f.enable(17),u.pointsUvs&&f.enable(18),u.decodeVideoTexture&&f.enable(19),u.decodeVideoTextureEmissive&&f.enable(20),u.alphaToCoverage&&f.enable(21),h.push(f.mask)}function _(h){const u=N[h.type];let R;if(u){const q=Et[u];R=eo.clone(q.uniforms)}else R=h.uniforms;return R}function B(h,u){let R;for(let q=0,V=C.length;q<V;q++){const Y=C[q];if(Y.cacheKey===u){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new Ff(e,u,h,o),C.push(R)),R}function L(h){if(--h.usedTimes===0){const u=C.indexOf(h);C[u]=C[C.length-1],C.pop(),h.destroy()}}function I(h){b.remove(h)}function G(){b.dispose()}return{getParameters:l,getProgramCacheKey:r,getUniforms:_,acquireProgram:B,releaseProgram:L,releaseShaderCache:I,programs:C,dispose:G}}function kf(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let f=e.get(d);return f===void 0&&(f={},e.set(d,f)),f}function i(d){e.delete(d)}function c(d,f,b){e.get(d)[f]=b}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:c,dispose:o}}function Wf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function fr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ur(){const e=[];let n=0;const t=[],i=[],c=[];function o(){n=0,t.length=0,i.length=0,c.length=0}function d(A,E,v,N,w,l){let r=e[n];return r===void 0?(r={id:A.id,object:A,geometry:E,material:v,groupOrder:N,renderOrder:A.renderOrder,z:w,group:l},e[n]=r):(r.id=A.id,r.object=A,r.geometry=E,r.material=v,r.groupOrder=N,r.renderOrder=A.renderOrder,r.z=w,r.group=l),n++,r}function f(A,E,v,N,w,l){const r=d(A,E,v,N,w,l);v.transmission>0?i.push(r):v.transparent===!0?c.push(r):t.push(r)}function b(A,E,v,N,w,l){const r=d(A,E,v,N,w,l);v.transmission>0?i.unshift(r):v.transparent===!0?c.unshift(r):t.unshift(r)}function g(A,E){t.length>1&&t.sort(A||Wf),i.length>1&&i.sort(E||fr),c.length>1&&c.sort(E||fr)}function C(){for(let A=n,E=e.length;A<E;A++){const v=e[A];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:c,init:o,push:f,unshift:b,finish:C,sort:g}}function zf(){let e=new WeakMap;function n(i,c){const o=e.get(i);let d;return o===void 0?(d=new ur,e.set(i,[d])):c>=o.length?(d=new ur,o.push(d)):d=o[c],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function Xf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Ge,color:new Ke};break;case"SpotLight":t={position:new Ge,direction:new Ge,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ge,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ge,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new Ge,halfWidth:new Ge,halfHeight:new Ge};break}return e[n.id]=t,t}}}function Yf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let qf=0;function Kf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function $f(e){const n=new Xf,t=Yf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)i.probe.push(new Ge);const c=new Ge,o=new zt,d=new zt;function f(g){let C=0,A=0,E=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let v=0,N=0,w=0,l=0,r=0,P=0,T=0,_=0,B=0,L=0,I=0;g.sort(Kf);for(let h=0,u=g.length;h<u;h++){const R=g[h],q=R.color,V=R.intensity,Y=R.distance,Q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)C+=q.r*V,A+=q.g*V,E+=q.b*V;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],V);I++}else if(R.isDirectionalLight){const W=n.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,F=t.get(R);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.directionalShadow[v]=F,i.directionalShadowMap[v]=Q,i.directionalShadowMatrix[v]=R.shadow.matrix,P++}i.directional[v]=W,v++}else if(R.isSpotLight){const W=n.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(q).multiplyScalar(V),W.distance=Y,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[w]=W;const J=R.shadow;if(R.map&&(i.spotLightMap[B]=R.map,B++,J.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[w]=J.matrix,R.castShadow){const F=t.get(R);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.spotShadow[w]=F,i.spotShadowMap[w]=Q,_++}w++}else if(R.isRectAreaLight){const W=n.get(R);W.color.copy(q).multiplyScalar(V),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[l]=W,l++}else if(R.isPointLight){const W=n.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const J=R.shadow,F=t.get(R);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,i.pointShadow[N]=F,i.pointShadowMap[N]=Q,i.pointShadowMatrix[N]=R.shadow.matrix,T++}i.point[N]=W,N++}else if(R.isHemisphereLight){const W=n.get(R);W.skyColor.copy(R.color).multiplyScalar(V),W.groundColor.copy(R.groundColor).multiplyScalar(V),i.hemi[r]=W,r++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=C,i.ambient[1]=A,i.ambient[2]=E;const G=i.hash;(G.directionalLength!==v||G.pointLength!==N||G.spotLength!==w||G.rectAreaLength!==l||G.hemiLength!==r||G.numDirectionalShadows!==P||G.numPointShadows!==T||G.numSpotShadows!==_||G.numSpotMaps!==B||G.numLightProbes!==I)&&(i.directional.length=v,i.spot.length=w,i.rectArea.length=l,i.point.length=N,i.hemi.length=r,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=_+B-L,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,G.directionalLength=v,G.pointLength=N,G.spotLength=w,G.rectAreaLength=l,G.hemiLength=r,G.numDirectionalShadows=P,G.numPointShadows=T,G.numSpotShadows=_,G.numSpotMaps=B,G.numLightProbes=I,i.version=qf++)}function b(g,C){let A=0,E=0,v=0,N=0,w=0;const l=C.matrixWorldInverse;for(let r=0,P=g.length;r<P;r++){const T=g[r];if(T.isDirectionalLight){const _=i.directional[A];_.direction.setFromMatrixPosition(T.matrixWorld),c.setFromMatrixPosition(T.target.matrixWorld),_.direction.sub(c),_.direction.transformDirection(l),A++}else if(T.isSpotLight){const _=i.spot[v];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(l),_.direction.setFromMatrixPosition(T.matrixWorld),c.setFromMatrixPosition(T.target.matrixWorld),_.direction.sub(c),_.direction.transformDirection(l),v++}else if(T.isRectAreaLight){const _=i.rectArea[N];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(l),d.identity(),o.copy(T.matrixWorld),o.premultiply(l),d.extractRotation(o),_.halfWidth.set(T.width*.5,0,0),_.halfHeight.set(0,T.height*.5,0),_.halfWidth.applyMatrix4(d),_.halfHeight.applyMatrix4(d),N++}else if(T.isPointLight){const _=i.point[E];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(l),E++}else if(T.isHemisphereLight){const _=i.hemi[w];_.direction.setFromMatrixPosition(T.matrixWorld),_.direction.transformDirection(l),w++}}}return{setup:f,setupView:b,state:i}}function dr(e){const n=new $f(e),t=[],i=[];function c(C){g.camera=C,t.length=0,i.length=0}function o(C){t.push(C)}function d(C){i.push(C)}function f(){n.setup(t)}function b(C){n.setupView(t,C)}const g={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:g,setupLights:f,setupLightsView:b,pushLight:o,pushShadow:d}}function Zf(e){let n=new WeakMap;function t(c,o=0){const d=n.get(c);let f;return d===void 0?(f=new dr(e),n.set(c,[f])):o>=d.length?(f=new dr(e),d.push(f)):f=d[o],f}function i(){n=new WeakMap}return{get:t,dispose:i}}const Qf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jf=`uniform sampler2D shadow_pass;
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
}`;function Jf(e,n,t){let i=new Er;const c=new ut,o=new ut,d=new ft,f=new Ga({depthPacking:Ha}),b=new Va,g={},C=t.maxTextureSize,A={[en]:_t,[_t]:en,[Tt]:Tt},E=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Qf,fragmentShader:jf}),v=E.clone();v.defines.HORIZONTAL_PASS=1;const N=new Tr;N.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new At(N,E),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let r=this.type;this.render=function(L,I,G){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||L.length===0)return;const h=e.getRenderTarget(),u=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),q=e.state;q.setBlending(It),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const V=r!==Mt&&this.type===Mt,Y=r===Mt&&this.type!==Mt;for(let Q=0,W=L.length;Q<W;Q++){const J=L[Q],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;c.copy(F.mapSize);const me=F.getFrameExtents();if(c.multiply(me),o.copy(F.mapSize),(c.x>C||c.y>C)&&(c.x>C&&(o.x=Math.floor(C/me.x),c.x=o.x*me.x,F.mapSize.x=o.x),c.y>C&&(o.y=Math.floor(C/me.y),c.y=o.y*me.y,F.mapSize.y=o.y)),F.map===null||V===!0||Y===!0){const Le=this.type!==Mt?{minFilter:Jt,magFilter:Jt}:{};F.map!==null&&F.map.dispose(),F.map=new Xt(c.x,c.y,Le),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();const Se=F.getViewportCount();for(let Le=0;Le<Se;Le++){const He=F.getViewport(Le);d.set(o.x*He.x,o.y*He.y,o.x*He.z,o.y*He.w),q.viewport(d),F.updateMatrices(J,Le),i=F.getFrustum(),_(I,G,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===Mt&&P(F,G),F.needsUpdate=!1}r=this.type,l.needsUpdate=!1,e.setRenderTarget(h,u,R)};function P(L,I){const G=n.update(w);E.defines.VSM_SAMPLES!==L.blurSamples&&(E.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,E.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Xt(c.x,c.y)),E.uniforms.shadow_pass.value=L.map.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(I,null,G,E,w,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(I,null,G,v,w,null)}function T(L,I,G,h){let u=null;const R=G.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)u=R;else if(u=G.isPointLight===!0?b:f,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const q=u.uuid,V=I.uuid;let Y=g[q];Y===void 0&&(Y={},g[q]=Y);let Q=Y[V];Q===void 0&&(Q=u.clone(),Y[V]=Q,I.addEventListener("dispose",B)),u=Q}if(u.visible=I.visible,u.wireframe=I.wireframe,h===Mt?u.side=I.shadowSide!==null?I.shadowSide:I.side:u.side=I.shadowSide!==null?I.shadowSide:A[I.side],u.alphaMap=I.alphaMap,u.alphaTest=I.alphaTest,u.map=I.map,u.clipShadows=I.clipShadows,u.clippingPlanes=I.clippingPlanes,u.clipIntersection=I.clipIntersection,u.displacementMap=I.displacementMap,u.displacementScale=I.displacementScale,u.displacementBias=I.displacementBias,u.wireframeLinewidth=I.wireframeLinewidth,u.linewidth=I.linewidth,G.isPointLight===!0&&u.isMeshDistanceMaterial===!0){const q=e.properties.get(u);q.light=G}return u}function _(L,I,G,h,u){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&u===Mt)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,L.matrixWorld);const V=n.update(L),Y=L.material;if(Array.isArray(Y)){const Q=V.groups;for(let W=0,J=Q.length;W<J;W++){const F=Q[W],me=Y[F.materialIndex];if(me&&me.visible){const Se=T(L,me,h,u);L.onBeforeShadow(e,L,I,G,V,Se,F),e.renderBufferDirect(G,null,V,Se,L,F),L.onAfterShadow(e,L,I,G,V,Se,F)}}}else if(Y.visible){const Q=T(L,Y,h,u);L.onBeforeShadow(e,L,I,G,V,Q,null),e.renderBufferDirect(G,null,V,Q,L,null),L.onAfterShadow(e,L,I,G,V,Q,null)}}const q=L.children;for(let V=0,Y=q.length;V<Y;V++)_(q[V],I,G,h,u)}function B(L){L.target.removeEventListener("dispose",B);for(const G in g){const h=g[G],u=L.target.uuid;u in h&&(h[u].dispose(),delete h[u])}}}const eu={[zn]:Wn,[kn]:Gn,[Vn]:Bn,[_n]:Hn,[Wn]:zn,[Gn]:kn,[Bn]:Vn,[Hn]:_n};function tu(e,n){function t(){let S=!1;const te=new ft;let O=null;const X=new ft(0,0,0,0);return{setMask:function(oe){O!==oe&&!S&&(e.colorMask(oe,oe,oe,oe),O=oe)},setLocked:function(oe){S=oe},setClear:function(oe,ae,Ce,Qe,at){at===!0&&(oe*=Qe,ae*=Qe,Ce*=Qe),te.set(oe,ae,Ce,Qe),X.equals(te)===!1&&(e.clearColor(oe,ae,Ce,Qe),X.copy(te))},reset:function(){S=!1,O=null,X.set(-1,0,0,0)}}}function i(){let S=!1,te=!1,O=null,X=null,oe=null;return{setReversed:function(ae){if(te!==ae){const Ce=n.get("EXT_clip_control");te?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const Qe=oe;oe=null,this.setClear(Qe)}te=ae},getReversed:function(){return te},setTest:function(ae){ae?ie(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(ae){O!==ae&&!S&&(e.depthMask(ae),O=ae)},setFunc:function(ae){if(te&&(ae=eu[ae]),X!==ae){switch(ae){case zn:e.depthFunc(e.NEVER);break;case Wn:e.depthFunc(e.ALWAYS);break;case kn:e.depthFunc(e.LESS);break;case _n:e.depthFunc(e.LEQUAL);break;case Vn:e.depthFunc(e.EQUAL);break;case Hn:e.depthFunc(e.GEQUAL);break;case Gn:e.depthFunc(e.GREATER);break;case Bn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}X=ae}},setLocked:function(ae){S=ae},setClear:function(ae){oe!==ae&&(te&&(ae=1-ae),e.clearDepth(ae),oe=ae)},reset:function(){S=!1,O=null,X=null,oe=null,te=!1}}}function c(){let S=!1,te=null,O=null,X=null,oe=null,ae=null,Ce=null,Qe=null,at=null;return{setTest:function(We){S||(We?ie(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(We){te!==We&&!S&&(e.stencilMask(We),te=We)},setFunc:function(We,vt,St){(O!==We||X!==vt||oe!==St)&&(e.stencilFunc(We,vt,St),O=We,X=vt,oe=St)},setOp:function(We,vt,St){(ae!==We||Ce!==vt||Qe!==St)&&(e.stencilOp(We,vt,St),ae=We,Ce=vt,Qe=St)},setLocked:function(We){S=We},setClear:function(We){at!==We&&(e.clearStencil(We),at=We)},reset:function(){S=!1,te=null,O=null,X=null,oe=null,ae=null,Ce=null,Qe=null,at=null}}}const o=new t,d=new i,f=new c,b=new WeakMap,g=new WeakMap;let C={},A={},E=new WeakMap,v=[],N=null,w=!1,l=null,r=null,P=null,T=null,_=null,B=null,L=null,I=new Ke(0,0,0),G=0,h=!1,u=null,R=null,q=null,V=null,Y=null;const Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=J>=2);let me=null,Se={};const Le=e.getParameter(e.SCISSOR_BOX),He=e.getParameter(e.VIEWPORT),Ze=new ft().fromArray(Le),k=new ft().fromArray(He);function j(S,te,O,X){const oe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(S,ae),e.texParameteri(S,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(S,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ce=0;Ce<O;Ce++)S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,X,0,e.RGBA,e.UNSIGNED_BYTE,oe):e.texImage2D(te+Ce,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return ae}const de={};de[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ie(e.DEPTH_TEST),d.setFunc(_n),Ue(!1),De(Ao),ie(e.CULL_FACE),m(It);function ie(S){C[S]!==!0&&(e.enable(S),C[S]=!0)}function Me(S){C[S]!==!1&&(e.disable(S),C[S]=!1)}function Be(S,te){return A[S]!==te?(e.bindFramebuffer(S,te),A[S]=te,S===e.DRAW_FRAMEBUFFER&&(A[e.FRAMEBUFFER]=te),S===e.FRAMEBUFFER&&(A[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(S,te){let O=v,X=!1;if(S){O=E.get(te),O===void 0&&(O=[],E.set(te,O));const oe=S.textures;if(O.length!==oe.length||O[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Ce=oe.length;ae<Ce;ae++)O[ae]=e.COLOR_ATTACHMENT0+ae;O.length=oe.length,X=!0}}else O[0]!==e.BACK&&(O[0]=e.BACK,X=!0);X&&e.drawBuffers(O)}function Je(S){return N!==S?(e.useProgram(S),N=S,!0):!1}const $e={[$t]:e.FUNC_ADD,[ua]:e.FUNC_SUBTRACT,[fa]:e.FUNC_REVERSE_SUBTRACT};$e[Ro]=e.MIN,$e[Co]=e.MAX;const we={[Ca]:e.ZERO,[Ra]:e.ONE,[Aa]:e.SRC_COLOR,[xa]:e.SRC_ALPHA,[Ta]:e.SRC_ALPHA_SATURATE,[Ma]:e.DST_COLOR,[Sa]:e.DST_ALPHA,[Ea]:e.ONE_MINUS_SRC_COLOR,[ga]:e.ONE_MINUS_SRC_ALPHA,[va]:e.ONE_MINUS_DST_COLOR,[_a]:e.ONE_MINUS_DST_ALPHA,[ma]:e.CONSTANT_COLOR,[ha]:e.ONE_MINUS_CONSTANT_COLOR,[pa]:e.CONSTANT_ALPHA,[da]:e.ONE_MINUS_CONSTANT_ALPHA};function m(S,te,O,X,oe,ae,Ce,Qe,at,We){if(S===It){w===!0&&(Me(e.BLEND),w=!1);return}if(w===!1&&(ie(e.BLEND),w=!0),S!==ja){if(S!==l||We!==h){if((r!==$t||_!==$t)&&(e.blendEquation(e.FUNC_ADD),r=$t,_=$t),We)switch(S){case pn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gi:e.blendFunc(e.ONE,e.ONE);break;case Bi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Fi:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case pn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gi:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Bi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Fi:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}P=null,T=null,B=null,L=null,I.set(0,0,0),G=0,l=S,h=We}return}oe=oe||te,ae=ae||O,Ce=Ce||X,(te!==r||oe!==_)&&(e.blendEquationSeparate($e[te],$e[oe]),r=te,_=oe),(O!==P||X!==T||ae!==B||Ce!==L)&&(e.blendFuncSeparate(we[O],we[X],we[ae],we[Ce]),P=O,T=X,B=ae,L=Ce),(Qe.equals(I)===!1||at!==G)&&(e.blendColor(Qe.r,Qe.g,Qe.b,at),I.copy(Qe),G=at),l=S,h=!1}function pt(S,te){S.side===Tt?Me(e.CULL_FACE):ie(e.CULL_FACE);let O=S.side===_t;te&&(O=!O),Ue(O),S.blending===pn&&S.transparent===!1?m(It):m(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),d.setFunc(S.depthFunc),d.setTest(S.depthTest),d.setMask(S.depthWrite),o.setMask(S.colorWrite);const X=S.stencilWrite;f.setTest(X),X&&(f.setMask(S.stencilWriteMask),f.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),f.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Xe(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(S){u!==S&&(S?e.frontFace(e.CW):e.frontFace(e.CCW),u=S)}function De(S){ie(e.CULL_FACE),S!==R&&e.cullFace(e.BACK),R=S}function _e(S){S!==q&&(W&&e.lineWidth(S),q=S)}function Xe(S,te,O){S?(ie(e.POLYGON_OFFSET_FILL),(V!==te||Y!==O)&&(e.polygonOffset(te,O),V=te,Y=O)):Me(e.POLYGON_OFFSET_FILL)}function he(S){S?ie(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function p(S){S===void 0&&(S=e.TEXTURE0+Q-1),me!==S&&(e.activeTexture(S),me=S)}function a(S,te,O){O===void 0&&(me===null?O=e.TEXTURE0+Q-1:O=me);let X=Se[O];X===void 0&&(X={type:void 0,texture:void 0},Se[O]=X),(X.type!==S||X.texture!==te)&&(me!==O&&(e.activeTexture(O),me=O),e.bindTexture(S,te||de[S]),X.type=S,X.texture=te)}function U(){const S=Se[me];S!==void 0&&S.type!==void 0&&(e.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function z(){try{e.compressedTexImage2D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function K(){try{e.compressedTexImage3D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function H(){try{e.texSubImage2D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function pe(){try{e.texSubImage3D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function re(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ce(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ye(){try{e.texStorage2D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Z(){try{e.texStorage3D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function le(){try{e.texImage2D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ee(){try{e.texImage3D.apply(e,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function xe(S){Ze.equals(S)===!1&&(e.scissor(S.x,S.y,S.z,S.w),Ze.copy(S))}function fe(S){k.equals(S)===!1&&(e.viewport(S.x,S.y,S.z,S.w),k.copy(S))}function Ie(S,te){let O=g.get(te);O===void 0&&(O=new WeakMap,g.set(te,O));let X=O.get(S);X===void 0&&(X=e.getUniformBlockIndex(te,S.name),O.set(S,X))}function be(S,te){const X=g.get(te).get(S);b.get(te)!==X&&(e.uniformBlockBinding(te,X,S.__bindingPointIndex),b.set(te,X))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),C={},me=null,Se={},A={},E=new WeakMap,v=[],N=null,w=!1,l=null,r=null,P=null,T=null,_=null,B=null,L=null,I=new Ke(0,0,0),G=0,h=!1,u=null,R=null,q=null,V=null,Y=null,Ze.set(0,0,e.canvas.width,e.canvas.height),k.set(0,0,e.canvas.width,e.canvas.height),o.reset(),d.reset(),f.reset()}return{buffers:{color:o,depth:d,stencil:f},enable:ie,disable:Me,bindFramebuffer:Be,drawBuffers:Te,useProgram:Je,setBlending:m,setMaterial:pt,setFlipSided:Ue,setCullFace:De,setLineWidth:_e,setPolygonOffset:Xe,setScissorTest:he,activeTexture:p,bindTexture:a,unbindTexture:U,compressedTexImage2D:z,compressedTexImage3D:K,texImage2D:le,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:be,texStorage2D:ye,texStorage3D:Z,texSubImage2D:H,texSubImage3D:pe,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:xe,viewport:fe,reset:ze}}function nu(e,n,t,i,c,o,d){const f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,b=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ut,C=new WeakMap;let A;const E=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(p,a){return v?new OffscreenCanvas(p,a):So("canvas")}function w(p,a,U){let z=1;const K=he(p);if((K.width>U||K.height>U)&&(z=U/Math.max(K.width,K.height)),z<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const H=Math.floor(z*K.width),pe=Math.floor(z*K.height);A===void 0&&(A=N(H,pe));const re=a?N(H,pe):A;return re.width=H,re.height=pe,re.getContext("2d").drawImage(p,0,0,H,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+pe+")."),re}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),p;return p}function l(p){return p.generateMipmaps}function r(p){e.generateMipmap(p)}function P(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(p,a,U,z,K=!1){if(p!==null){if(e[p]!==void 0)return e[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let H=a;if(a===e.RED&&(U===e.FLOAT&&(H=e.R32F),U===e.HALF_FLOAT&&(H=e.R16F),U===e.UNSIGNED_BYTE&&(H=e.R8)),a===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(H=e.R8UI),U===e.UNSIGNED_SHORT&&(H=e.R16UI),U===e.UNSIGNED_INT&&(H=e.R32UI),U===e.BYTE&&(H=e.R8I),U===e.SHORT&&(H=e.R16I),U===e.INT&&(H=e.R32I)),a===e.RG&&(U===e.FLOAT&&(H=e.RG32F),U===e.HALF_FLOAT&&(H=e.RG16F),U===e.UNSIGNED_BYTE&&(H=e.RG8)),a===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(H=e.RG8UI),U===e.UNSIGNED_SHORT&&(H=e.RG16UI),U===e.UNSIGNED_INT&&(H=e.RG32UI),U===e.BYTE&&(H=e.RG8I),U===e.SHORT&&(H=e.RG16I),U===e.INT&&(H=e.RG32I)),a===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(H=e.RGB8UI),U===e.UNSIGNED_SHORT&&(H=e.RGB16UI),U===e.UNSIGNED_INT&&(H=e.RGB32UI),U===e.BYTE&&(H=e.RGB8I),U===e.SHORT&&(H=e.RGB16I),U===e.INT&&(H=e.RGB32I)),a===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),U===e.UNSIGNED_INT&&(H=e.RGBA32UI),U===e.BYTE&&(H=e.RGBA8I),U===e.SHORT&&(H=e.RGBA16I),U===e.INT&&(H=e.RGBA32I)),a===e.RGB&&U===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),a===e.RGBA){const pe=K?Nr:tt.getTransfer(z);U===e.FLOAT&&(H=e.RGBA32F),U===e.HALF_FLOAT&&(H=e.RGBA16F),U===e.UNSIGNED_BYTE&&(H=pe===Ye?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&n.get("EXT_color_buffer_float"),H}function _(p,a){let U;return p?a===null||a===nn||a===tn?U=e.DEPTH24_STENCIL8:a===Dt?U=e.DEPTH32F_STENCIL8:a===vn&&(U=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===nn||a===tn?U=e.DEPTH_COMPONENT24:a===Dt?U=e.DEPTH_COMPONENT32F:a===vn&&(U=e.DEPTH_COMPONENT16),U}function B(p,a){return l(p)===!0||p.isFramebufferTexture&&p.minFilter!==Jt&&p.minFilter!==kt?Math.log2(Math.max(a.width,a.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?a.mipmaps.length:1}function L(p){const a=p.target;a.removeEventListener("dispose",L),G(a),a.isVideoTexture&&C.delete(a)}function I(p){const a=p.target;a.removeEventListener("dispose",I),u(a)}function G(p){const a=i.get(p);if(a.__webglInit===void 0)return;const U=p.source,z=E.get(U);if(z){const K=z[a.__cacheKey];K.usedTimes--,K.usedTimes===0&&h(p),Object.keys(z).length===0&&E.delete(U)}i.remove(p)}function h(p){const a=i.get(p);e.deleteTexture(a.__webglTexture);const U=p.source,z=E.get(U);delete z[a.__cacheKey],d.memory.textures--}function u(p){const a=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(a.__webglFramebuffer[z]))for(let K=0;K<a.__webglFramebuffer[z].length;K++)e.deleteFramebuffer(a.__webglFramebuffer[z][K]);else e.deleteFramebuffer(a.__webglFramebuffer[z]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[z])}else{if(Array.isArray(a.__webglFramebuffer))for(let z=0;z<a.__webglFramebuffer.length;z++)e.deleteFramebuffer(a.__webglFramebuffer[z]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let z=0;z<a.__webglColorRenderbuffer.length;z++)a.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[z]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const U=p.textures;for(let z=0,K=U.length;z<K;z++){const H=i.get(U[z]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),d.memory.textures--),i.remove(U[z])}i.remove(p)}let R=0;function q(){R=0}function V(){const p=R;return p>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+c.maxTextures),R+=1,p}function Y(p){const a=[];return a.push(p.wrapS),a.push(p.wrapT),a.push(p.wrapR||0),a.push(p.magFilter),a.push(p.minFilter),a.push(p.anisotropy),a.push(p.internalFormat),a.push(p.format),a.push(p.type),a.push(p.generateMipmaps),a.push(p.premultiplyAlpha),a.push(p.flipY),a.push(p.unpackAlignment),a.push(p.colorSpace),a.join()}function Q(p,a){const U=i.get(p);if(p.isVideoTexture&&_e(p),p.isRenderTargetTexture===!1&&p.version>0&&U.__version!==p.version){const z=p.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(U,p,a);return}}t.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+a)}function W(p,a){const U=i.get(p);if(p.version>0&&U.__version!==p.version){k(U,p,a);return}t.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+a)}function J(p,a){const U=i.get(p);if(p.version>0&&U.__version!==p.version){k(U,p,a);return}t.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+a)}function F(p,a){const U=i.get(p);if(p.version>0&&U.__version!==p.version){j(U,p,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+a)}const me={[La]:e.REPEAT,[Pa]:e.CLAMP_TO_EDGE,[ba]:e.MIRRORED_REPEAT},Se={[Jt]:e.NEAREST,[wa]:e.NEAREST_MIPMAP_NEAREST,[sn]:e.NEAREST_MIPMAP_LINEAR,[kt]:e.LINEAR,[Cn]:e.LINEAR_MIPMAP_NEAREST,[Zt]:e.LINEAR_MIPMAP_LINEAR},Le={[Fa]:e.NEVER,[Oa]:e.ALWAYS,[Na]:e.LESS,[Mr]:e.LEQUAL,[ya]:e.EQUAL,[Ia]:e.GEQUAL,[Da]:e.GREATER,[Ua]:e.NOTEQUAL};function He(p,a){if(a.type===Dt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===kt||a.magFilter===Cn||a.magFilter===sn||a.magFilter===Zt||a.minFilter===kt||a.minFilter===Cn||a.minFilter===sn||a.minFilter===Zt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,me[a.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,Se[a.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,Se[a.minFilter]),a.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,Le[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===Jt||a.minFilter!==sn&&a.minFilter!==Zt||a.type===Dt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const U=n.get("EXT_texture_filter_anisotropic");e.texParameterf(p,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,c.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Ze(p,a){let U=!1;p.__webglInit===void 0&&(p.__webglInit=!0,a.addEventListener("dispose",L));const z=a.source;let K=E.get(z);K===void 0&&(K={},E.set(z,K));const H=Y(a);if(H!==p.__cacheKey){K[H]===void 0&&(K[H]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,U=!0),K[H].usedTimes++;const pe=K[p.__cacheKey];pe!==void 0&&(K[p.__cacheKey].usedTimes--,pe.usedTimes===0&&h(a)),p.__cacheKey=H,p.__webglTexture=K[H].texture}return U}function k(p,a,U){let z=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(z=e.TEXTURE_3D);const K=Ze(p,a),H=a.source;t.bindTexture(z,p.__webglTexture,e.TEXTURE0+U);const pe=i.get(H);if(H.version!==pe.__version||K===!0){t.activeTexture(e.TEXTURE0+U);const re=tt.getPrimaries(tt.workingColorSpace),ce=a.colorSpace===Vt?null:tt.getPrimaries(a.colorSpace),ye=a.colorSpace===Vt||re===ce?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Z=w(a.image,!1,c.maxTextureSize);Z=Xe(a,Z);const le=o.convert(a.format,a.colorSpace),Ee=o.convert(a.type);let xe=T(a.internalFormat,le,Ee,a.colorSpace,a.isVideoTexture);He(z,a);let fe;const Ie=a.mipmaps,be=a.isVideoTexture!==!0,ze=pe.__version===void 0||K===!0,S=H.dataReady,te=B(a,Z);if(a.isDepthTexture)xe=_(a.format===mn,a.type),ze&&(be?t.texStorage2D(e.TEXTURE_2D,1,xe,Z.width,Z.height):t.texImage2D(e.TEXTURE_2D,0,xe,Z.width,Z.height,0,le,Ee,null));else if(a.isDataTexture)if(Ie.length>0){be&&ze&&t.texStorage2D(e.TEXTURE_2D,te,xe,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],be?S&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,le,Ee,fe.data):t.texImage2D(e.TEXTURE_2D,O,xe,fe.width,fe.height,0,le,Ee,fe.data);a.generateMipmaps=!1}else be?(ze&&t.texStorage2D(e.TEXTURE_2D,te,xe,Z.width,Z.height),S&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,Z.width,Z.height,le,Ee,Z.data)):t.texImage2D(e.TEXTURE_2D,0,xe,Z.width,Z.height,0,le,Ee,Z.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){be&&ze&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,xe,Ie[0].width,Ie[0].height,Z.depth);for(let O=0,X=Ie.length;O<X;O++)if(fe=Ie[O],a.format!==xt)if(le!==null)if(be){if(S)if(a.layerUpdates.size>0){const oe=Vi(fe.width,fe.height,a.format,a.type);for(const ae of a.layerUpdates){const Ce=fe.data.subarray(ae*oe/fe.data.BYTES_PER_ELEMENT,(ae+1)*oe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,ae,fe.width,fe.height,1,le,Ce)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,Z.depth,le,fe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,O,xe,fe.width,fe.height,Z.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?S&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,Z.depth,le,Ee,fe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,O,xe,fe.width,fe.height,Z.depth,0,le,Ee,fe.data)}else{be&&ze&&t.texStorage2D(e.TEXTURE_2D,te,xe,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],a.format!==xt?le!==null?be?S&&t.compressedTexSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,le,fe.data):t.compressedTexImage2D(e.TEXTURE_2D,O,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?S&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,le,Ee,fe.data):t.texImage2D(e.TEXTURE_2D,O,xe,fe.width,fe.height,0,le,Ee,fe.data)}else if(a.isDataArrayTexture)if(be){if(ze&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,xe,Z.width,Z.height,Z.depth),S)if(a.layerUpdates.size>0){const O=Vi(Z.width,Z.height,a.format,a.type);for(const X of a.layerUpdates){const oe=Z.data.subarray(X*O/Z.data.BYTES_PER_ELEMENT,(X+1)*O/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,X,Z.width,Z.height,1,le,Ee,oe)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Ee,Z.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,le,Ee,Z.data);else if(a.isData3DTexture)be?(ze&&t.texStorage3D(e.TEXTURE_3D,te,xe,Z.width,Z.height,Z.depth),S&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Ee,Z.data)):t.texImage3D(e.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,le,Ee,Z.data);else if(a.isFramebufferTexture){if(ze)if(be)t.texStorage2D(e.TEXTURE_2D,te,xe,Z.width,Z.height);else{let O=Z.width,X=Z.height;for(let oe=0;oe<te;oe++)t.texImage2D(e.TEXTURE_2D,oe,xe,O,X,0,le,Ee,null),O>>=1,X>>=1}}else if(Ie.length>0){if(be&&ze){const O=he(Ie[0]);t.texStorage2D(e.TEXTURE_2D,te,xe,O.width,O.height)}for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],be?S&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,le,Ee,fe):t.texImage2D(e.TEXTURE_2D,O,xe,le,Ee,fe);a.generateMipmaps=!1}else if(be){if(ze){const O=he(Z);t.texStorage2D(e.TEXTURE_2D,te,xe,O.width,O.height)}S&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,le,Ee,Z)}else t.texImage2D(e.TEXTURE_2D,0,xe,le,Ee,Z);l(a)&&r(z),pe.__version=H.version,a.onUpdate&&a.onUpdate(a)}p.__version=a.version}function j(p,a,U){if(a.image.length!==6)return;const z=Ze(p,a),K=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+U);const H=i.get(K);if(K.version!==H.__version||z===!0){t.activeTexture(e.TEXTURE0+U);const pe=tt.getPrimaries(tt.workingColorSpace),re=a.colorSpace===Vt?null:tt.getPrimaries(a.colorSpace),ce=a.colorSpace===Vt||pe===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ye=a.isCompressedTexture||a.image[0].isCompressedTexture,Z=a.image[0]&&a.image[0].isDataTexture,le=[];for(let X=0;X<6;X++)!ye&&!Z?le[X]=w(a.image[X],!0,c.maxCubemapSize):le[X]=Z?a.image[X].image:a.image[X],le[X]=Xe(a,le[X]);const Ee=le[0],xe=o.convert(a.format,a.colorSpace),fe=o.convert(a.type),Ie=T(a.internalFormat,xe,fe,a.colorSpace),be=a.isVideoTexture!==!0,ze=H.__version===void 0||z===!0,S=K.dataReady;let te=B(a,Ee);He(e.TEXTURE_CUBE_MAP,a);let O;if(ye){be&&ze&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,Ee.width,Ee.height);for(let X=0;X<6;X++){O=le[X].mipmaps;for(let oe=0;oe<O.length;oe++){const ae=O[oe];a.format!==xt?xe!==null?be?S&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,xe,ae.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?S&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,xe,fe,ae.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,ae.width,ae.height,0,xe,fe,ae.data)}}}else{if(O=a.mipmaps,be&&ze){O.length>0&&te++;const X=he(le[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,X.width,X.height)}for(let X=0;X<6;X++)if(Z){be?S&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,le[X].width,le[X].height,xe,fe,le[X].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,le[X].width,le[X].height,0,xe,fe,le[X].data);for(let oe=0;oe<O.length;oe++){const Ce=O[oe].image[X].image;be?S&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,Ce.width,Ce.height,xe,fe,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,Ce.width,Ce.height,0,xe,fe,Ce.data)}}else{be?S&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,fe,le[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,xe,fe,le[X]);for(let oe=0;oe<O.length;oe++){const ae=O[oe];be?S&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,xe,fe,ae.image[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,xe,fe,ae.image[X])}}}l(a)&&r(e.TEXTURE_CUBE_MAP),H.__version=K.version,a.onUpdate&&a.onUpdate(a)}p.__version=a.version}function de(p,a,U,z,K,H){const pe=o.convert(U.format,U.colorSpace),re=o.convert(U.type),ce=T(U.internalFormat,pe,re,U.colorSpace),ye=i.get(a),Z=i.get(U);if(Z.__renderTarget=a,!ye.__hasExternalTextures){const le=Math.max(1,a.width>>H),Ee=Math.max(1,a.height>>H);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?t.texImage3D(K,H,ce,le,Ee,a.depth,0,pe,re,null):t.texImage2D(K,H,ce,le,Ee,0,pe,re,null)}t.bindFramebuffer(e.FRAMEBUFFER,p),De(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,K,Z.__webglTexture,0,Ue(a)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,K,Z.__webglTexture,H),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(p,a,U){if(e.bindRenderbuffer(e.RENDERBUFFER,p),a.depthBuffer){const z=a.depthTexture,K=z&&z.isDepthTexture?z.type:null,H=_(a.stencilBuffer,K),pe=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=Ue(a);De(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,H,a.width,a.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,H,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,H,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,p)}else{const z=a.textures;for(let K=0;K<z.length;K++){const H=z[K],pe=o.convert(H.format,H.colorSpace),re=o.convert(H.type),ce=T(H.internalFormat,pe,re,H.colorSpace),ye=Ue(a);U&&De(a)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,ce,a.width,a.height):De(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye,ce,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,ce,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(p,a){if(a&&a.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,p),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(a.depthTexture);z.__renderTarget=a,(!z.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),Q(a.depthTexture,0);const K=z.__webglTexture,H=Ue(a);if(a.depthTexture.format===jn)De(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(a.depthTexture.format===mn)De(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Be(p){const a=i.get(p),U=p.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==p.depthTexture){const z=p.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),z){const K=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,z.removeEventListener("dispose",K)};z.addEventListener("dispose",K),a.__depthDisposeCallback=K}a.__boundDepthTexture=z}if(p.depthTexture&&!a.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Me(a.__webglFramebuffer,p)}else if(U){a.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[z]),a.__webglDepthbuffer[z]===void 0)a.__webglDepthbuffer[z]=e.createRenderbuffer(),ie(a.__webglDepthbuffer[z],p,!1);else{const K=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=a.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,H)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),ie(a.__webglDepthbuffer,p,!1);else{const z=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,z,e.RENDERBUFFER,K)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(p,a,U){const z=i.get(p);a!==void 0&&de(z.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Be(p)}function Je(p){const a=p.texture,U=i.get(p),z=i.get(a);p.addEventListener("dispose",I);const K=p.textures,H=p.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=a.version,d.memory.textures++),H){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a.mipmaps&&a.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let ce=0;ce<a.mipmaps.length;ce++)U.__webglFramebuffer[re][ce]=e.createFramebuffer()}else U.__webglFramebuffer[re]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<a.mipmaps.length;re++)U.__webglFramebuffer[re]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(pe)for(let re=0,ce=K.length;re<ce;re++){const ye=i.get(K[re]);ye.__webglTexture===void 0&&(ye.__webglTexture=e.createTexture(),d.memory.textures++)}if(p.samples>0&&De(p)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ce=K[re];U.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[re]);const ye=o.convert(ce.format,ce.colorSpace),Z=o.convert(ce.type),le=T(ce.internalFormat,ye,Z,ce.colorSpace,p.isXRRenderTarget===!0),Ee=Ue(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,le,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,U.__webglColorRenderbuffer[re])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(U.__webglDepthRenderbuffer,p,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),He(e.TEXTURE_CUBE_MAP,a);for(let re=0;re<6;re++)if(a.mipmaps&&a.mipmaps.length>0)for(let ce=0;ce<a.mipmaps.length;ce++)de(U.__webglFramebuffer[re][ce],p,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else de(U.__webglFramebuffer[re],p,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);l(a)&&r(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let re=0,ce=K.length;re<ce;re++){const ye=K[re],Z=i.get(ye);t.bindTexture(e.TEXTURE_2D,Z.__webglTexture),He(e.TEXTURE_2D,ye),de(U.__webglFramebuffer,p,ye,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,0),l(ye)&&r(e.TEXTURE_2D)}t.unbindTexture()}else{let re=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(re=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(re,z.__webglTexture),He(re,a),a.mipmaps&&a.mipmaps.length>0)for(let ce=0;ce<a.mipmaps.length;ce++)de(U.__webglFramebuffer[ce],p,a,e.COLOR_ATTACHMENT0,re,ce);else de(U.__webglFramebuffer,p,a,e.COLOR_ATTACHMENT0,re,0);l(a)&&r(re),t.unbindTexture()}p.depthBuffer&&Be(p)}function $e(p){const a=p.textures;for(let U=0,z=a.length;U<z;U++){const K=a[U];if(l(K)){const H=P(p),pe=i.get(K).__webglTexture;t.bindTexture(H,pe),r(H),t.unbindTexture()}}}const we=[],m=[];function pt(p){if(p.samples>0){if(De(p)===!1){const a=p.textures,U=p.width,z=p.height;let K=e.COLOR_BUFFER_BIT;const H=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=i.get(p),re=a.length>1;if(re)for(let ce=0;ce<a.length;ce++)t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ce=0;ce<a.length;ce++){if(p.resolveDepthBuffer&&(p.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ce]);const ye=i.get(a[ce]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ye,0)}e.blitFramebuffer(0,0,U,z,0,0,U,z,K,e.NEAREST),b===!0&&(we.length=0,m.length=0,we.push(e.COLOR_ATTACHMENT0+ce),p.depthBuffer&&p.resolveDepthBuffer===!1&&(we.push(H),m.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,m)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<a.length;ce++){t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ce]);const ye=i.get(a[ce]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,ye,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&b){const a=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function Ue(p){return Math.min(c.maxSamples,p.samples)}function De(p){const a=i.get(p);return p.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function _e(p){const a=d.render.frame;C.get(p)!==a&&(C.set(p,a),p.update())}function Xe(p,a){const U=p.colorSpace,z=p.format,K=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||U!==En&&U!==Vt&&(tt.getTransfer(U)===Ye?(z!==xt||K!==yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),a}function he(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(g.width=p.naturalWidth||p.width,g.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(g.width=p.displayWidth,g.height=p.displayHeight):(g.width=p.width,g.height=p.height),g}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=F,this.rebindTextures=Te,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=De}function iu(e,n){function t(i,c=Vt){let o;const d=tt.getTransfer(c);if(i===yt)return e.UNSIGNED_BYTE;if(i===Ar)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Rr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ka)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Wa)return e.BYTE;if(i===za)return e.SHORT;if(i===vn)return e.UNSIGNED_SHORT;if(i===Pr)return e.INT;if(i===nn)return e.UNSIGNED_INT;if(i===Dt)return e.FLOAT;if(i===gn)return e.HALF_FLOAT;if(i===Xa)return e.ALPHA;if(i===Ya)return e.RGB;if(i===xt)return e.RGBA;if(i===qa)return e.LUMINANCE;if(i===Ka)return e.LUMINANCE_ALPHA;if(i===jn)return e.DEPTH_COMPONENT;if(i===mn)return e.DEPTH_STENCIL;if(i===$a)return e.RED;if(i===Lr)return e.RED_INTEGER;if(i===Za)return e.RG;if(i===wr)return e.RG_INTEGER;if(i===Ur)return e.RGBA_INTEGER;if(i===bn||i===Pn||i===Ln||i===wn)if(d===Ye)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===bn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ln)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===bn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pn)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ln)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wn)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ui||i===di||i===pi||i===hi)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ui)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===di)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pi)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hi)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mi||i===_i||i===vi)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===mi||i===_i)return d===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===vi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gi||i===Ei||i===Si||i===Mi||i===Ti||i===xi||i===Ai||i===Ri||i===Ci||i===bi||i===Pi||i===Li||i===wi||i===Ui)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===gi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ei)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Si)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ti)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ai)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ri)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ci)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Li)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wi)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ui)return d===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Un||i===Di||i===Ii)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===Un)return d===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Di)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ii)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qa||i===yi||i===Ni||i===Oi)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===Un)return o.COMPRESSED_RED_RGTC1_EXT;if(i===yi)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ni)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oi)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const ru=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,au=`
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

}`;class ou{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){const c=new Cr,o=n.properties.get(c);o.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=c}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Nt({vertexShader:ru,fragmentShader:au,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class su extends sa{constructor(n,t){super();const i=this;let c=null,o=1,d=null,f="local-floor",b=1,g=null,C=null,A=null,E=null,v=null,N=null;const w=new ou,l=t.getContextAttributes();let r=null,P=null;const T=[],_=[],B=new ut;let L=null;const I=new jt;I.viewport=new ft;const G=new jt;G.viewport=new ft;const h=[I,G],u=new ca;let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=T[k];return j===void 0&&(j=new Rn,T[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=T[k];return j===void 0&&(j=new Rn,T[k]=j),j.getGripSpace()},this.getHand=function(k){let j=T[k];return j===void 0&&(j=new Rn,T[k]=j),j.getHandSpace()};function V(k){const j=_.indexOf(k.inputSource);if(j===-1)return;const de=T[j];de!==void 0&&(de.update(k.inputSource,k.frame,g||d),de.dispatchEvent({type:k.type,data:k.inputSource}))}function Y(){c.removeEventListener("select",V),c.removeEventListener("selectstart",V),c.removeEventListener("selectend",V),c.removeEventListener("squeeze",V),c.removeEventListener("squeezestart",V),c.removeEventListener("squeezeend",V),c.removeEventListener("end",Y),c.removeEventListener("inputsourceschange",Q);for(let k=0;k<T.length;k++){const j=_[k];j!==null&&(_[k]=null,T[k].disconnect(j))}R=null,q=null,w.reset(),n.setRenderTarget(r),v=null,E=null,A=null,c=null,P=null,Ze.stop(),i.isPresenting=!1,n.setPixelRatio(L),n.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){f=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(k){g=k},this.getBaseLayer=function(){return E!==null?E:v},this.getBinding=function(){return A},this.getFrame=function(){return N},this.getSession=function(){return c},this.setSession=async function(k){if(c=k,c!==null){if(r=n.getRenderTarget(),c.addEventListener("select",V),c.addEventListener("selectstart",V),c.addEventListener("selectend",V),c.addEventListener("squeeze",V),c.addEventListener("squeezestart",V),c.addEventListener("squeezeend",V),c.addEventListener("end",Y),c.addEventListener("inputsourceschange",Q),l.xrCompatible!==!0&&await t.makeXRCompatible(),L=n.getPixelRatio(),n.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ie=null,Me=null;l.depth&&(Me=l.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=l.stencil?mn:jn,ie=l.stencil?tn:nn);const Be={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:o};A=new XRWebGLBinding(c,t),E=A.createProjectionLayer(Be),c.updateRenderState({layers:[E]}),n.setPixelRatio(1),n.setSize(E.textureWidth,E.textureHeight,!1),P=new Xt(E.textureWidth,E.textureHeight,{format:xt,type:yt,depthTexture:new Sr(E.textureWidth,E.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:l.stencil,colorSpace:n.outputColorSpace,samples:l.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1})}else{const de={antialias:l.antialias,alpha:!0,depth:l.depth,stencil:l.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(c,t,de),c.updateRenderState({baseLayer:v}),n.setPixelRatio(1),n.setSize(v.framebufferWidth,v.framebufferHeight,!1),P=new Xt(v.framebufferWidth,v.framebufferHeight,{format:xt,type:yt,colorSpace:n.outputColorSpace,stencilBuffer:l.stencil})}P.isXRRenderTarget=!0,this.setFoveation(b),g=null,d=await c.requestReferenceSpace(f),Ze.setContext(c),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function Q(k){for(let j=0;j<k.removed.length;j++){const de=k.removed[j],ie=_.indexOf(de);ie>=0&&(_[ie]=null,T[ie].disconnect(de))}for(let j=0;j<k.added.length;j++){const de=k.added[j];let ie=_.indexOf(de);if(ie===-1){for(let Be=0;Be<T.length;Be++)if(Be>=_.length){_.push(de),ie=Be;break}else if(_[Be]===null){_[Be]=de,ie=Be;break}if(ie===-1)break}const Me=T[ie];Me&&Me.connect(de)}}const W=new Ge,J=new Ge;function F(k,j,de){W.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const ie=W.distanceTo(J),Me=j.projectionMatrix.elements,Be=de.projectionMatrix.elements,Te=Me[14]/(Me[10]-1),Je=Me[14]/(Me[10]+1),$e=(Me[9]+1)/Me[5],we=(Me[9]-1)/Me[5],m=(Me[8]-1)/Me[0],pt=(Be[8]+1)/Be[0],Ue=Te*m,De=Te*pt,_e=ie/(-m+pt),Xe=_e*-m;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Xe),k.translateZ(_e),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Me[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const he=Te+_e,p=Je+_e,a=Ue-Xe,U=De+(ie-Xe),z=$e*Je/p*he,K=we*Je/p*he;k.projectionMatrix.makePerspective(a,U,z,K,he,p),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function me(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(c===null)return;let j=k.near,de=k.far;w.texture!==null&&(w.depthNear>0&&(j=w.depthNear),w.depthFar>0&&(de=w.depthFar)),u.near=G.near=I.near=j,u.far=G.far=I.far=de,(R!==u.near||q!==u.far)&&(c.updateRenderState({depthNear:u.near,depthFar:u.far}),R=u.near,q=u.far),I.layers.mask=k.layers.mask|2,G.layers.mask=k.layers.mask|4,u.layers.mask=I.layers.mask|G.layers.mask;const ie=k.parent,Me=u.cameras;me(u,ie);for(let Be=0;Be<Me.length;Be++)me(Me[Be],ie);Me.length===2?F(u,I,G):u.projectionMatrix.copy(I.projectionMatrix),Se(k,u,ie)};function Se(k,j,de){de===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=la*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return u},this.getFoveation=function(){if(!(E===null&&v===null))return b},this.setFoveation=function(k){b=k,E!==null&&(E.fixedFoveation=k),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=k)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(u)};let Le=null;function He(k,j){if(C=j.getViewerPose(g||d),N=j,C!==null){const de=C.views;v!==null&&(n.setRenderTargetFramebuffer(P,v.framebuffer),n.setRenderTarget(P));let ie=!1;de.length!==u.cameras.length&&(u.cameras.length=0,ie=!0);for(let Te=0;Te<de.length;Te++){const Je=de[Te];let $e=null;if(v!==null)$e=v.getViewport(Je);else{const m=A.getViewSubImage(E,Je);$e=m.viewport,Te===0&&(n.setRenderTargetTextures(P,m.colorTexture,E.ignoreDepthValues?void 0:m.depthStencilTexture),n.setRenderTarget(P))}let we=h[Te];we===void 0&&(we=new jt,we.layers.enable(Te),we.viewport=new ft,h[Te]=we),we.matrix.fromArray(Je.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Je.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set($e.x,$e.y,$e.width,$e.height),Te===0&&(u.matrix.copy(we.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale)),ie===!0&&u.cameras.push(we)}const Me=c.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&A){const Te=A.getDepthInformation(de[0]);Te&&Te.isValid&&Te.texture&&w.init(n,Te,c.renderState)}}for(let de=0;de<T.length;de++){const ie=_[de],Me=T[de];ie!==null&&Me!==void 0&&Me.update(ie,j,g||d)}Le&&Le(k,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),N=null}const Ze=new Fr;Ze.setAnimationLoop(He),this.setAnimationLoop=function(k){Le=k},this.dispose=function(){}}}const Lt=new Jn,cu=new zt;function lu(e,n){function t(l,r){l.matrixAutoUpdate===!0&&l.updateMatrix(),r.value.copy(l.matrix)}function i(l,r){r.color.getRGB(l.fogColor.value,Ir(e)),r.isFog?(l.fogNear.value=r.near,l.fogFar.value=r.far):r.isFogExp2&&(l.fogDensity.value=r.density)}function c(l,r,P,T,_){r.isMeshBasicMaterial||r.isMeshLambertMaterial?o(l,r):r.isMeshToonMaterial?(o(l,r),A(l,r)):r.isMeshPhongMaterial?(o(l,r),C(l,r)):r.isMeshStandardMaterial?(o(l,r),E(l,r),r.isMeshPhysicalMaterial&&v(l,r,_)):r.isMeshMatcapMaterial?(o(l,r),N(l,r)):r.isMeshDepthMaterial?o(l,r):r.isMeshDistanceMaterial?(o(l,r),w(l,r)):r.isMeshNormalMaterial?o(l,r):r.isLineBasicMaterial?(d(l,r),r.isLineDashedMaterial&&f(l,r)):r.isPointsMaterial?b(l,r,P,T):r.isSpriteMaterial?g(l,r):r.isShadowMaterial?(l.color.value.copy(r.color),l.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}function o(l,r){l.opacity.value=r.opacity,r.color&&l.diffuse.value.copy(r.color),r.emissive&&l.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.bumpMap&&(l.bumpMap.value=r.bumpMap,t(r.bumpMap,l.bumpMapTransform),l.bumpScale.value=r.bumpScale,r.side===_t&&(l.bumpScale.value*=-1)),r.normalMap&&(l.normalMap.value=r.normalMap,t(r.normalMap,l.normalMapTransform),l.normalScale.value.copy(r.normalScale),r.side===_t&&l.normalScale.value.negate()),r.displacementMap&&(l.displacementMap.value=r.displacementMap,t(r.displacementMap,l.displacementMapTransform),l.displacementScale.value=r.displacementScale,l.displacementBias.value=r.displacementBias),r.emissiveMap&&(l.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,l.emissiveMapTransform)),r.specularMap&&(l.specularMap.value=r.specularMap,t(r.specularMap,l.specularMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest);const P=n.get(r),T=P.envMap,_=P.envMapRotation;T&&(l.envMap.value=T,Lt.copy(_),Lt.x*=-1,Lt.y*=-1,Lt.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Lt.y*=-1,Lt.z*=-1),l.envMapRotation.value.setFromMatrix4(cu.makeRotationFromEuler(Lt)),l.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=r.reflectivity,l.ior.value=r.ior,l.refractionRatio.value=r.refractionRatio),r.lightMap&&(l.lightMap.value=r.lightMap,l.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,l.lightMapTransform)),r.aoMap&&(l.aoMap.value=r.aoMap,l.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,l.aoMapTransform))}function d(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform))}function f(l,r){l.dashSize.value=r.dashSize,l.totalSize.value=r.dashSize+r.gapSize,l.scale.value=r.scale}function b(l,r,P,T){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.size.value=r.size*P,l.scale.value=T*.5,r.map&&(l.map.value=r.map,t(r.map,l.uvTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function g(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.rotation.value=r.rotation,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function C(l,r){l.specular.value.copy(r.specular),l.shininess.value=Math.max(r.shininess,1e-4)}function A(l,r){r.gradientMap&&(l.gradientMap.value=r.gradientMap)}function E(l,r){l.metalness.value=r.metalness,r.metalnessMap&&(l.metalnessMap.value=r.metalnessMap,t(r.metalnessMap,l.metalnessMapTransform)),l.roughness.value=r.roughness,r.roughnessMap&&(l.roughnessMap.value=r.roughnessMap,t(r.roughnessMap,l.roughnessMapTransform)),r.envMap&&(l.envMapIntensity.value=r.envMapIntensity)}function v(l,r,P){l.ior.value=r.ior,r.sheen>0&&(l.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),l.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(l.sheenColorMap.value=r.sheenColorMap,t(r.sheenColorMap,l.sheenColorMapTransform)),r.sheenRoughnessMap&&(l.sheenRoughnessMap.value=r.sheenRoughnessMap,t(r.sheenRoughnessMap,l.sheenRoughnessMapTransform))),r.clearcoat>0&&(l.clearcoat.value=r.clearcoat,l.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(l.clearcoatMap.value=r.clearcoatMap,t(r.clearcoatMap,l.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,t(r.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(l.clearcoatNormalMap.value=r.clearcoatNormalMap,t(r.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),r.side===_t&&l.clearcoatNormalScale.value.negate())),r.dispersion>0&&(l.dispersion.value=r.dispersion),r.iridescence>0&&(l.iridescence.value=r.iridescence,l.iridescenceIOR.value=r.iridescenceIOR,l.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(l.iridescenceMap.value=r.iridescenceMap,t(r.iridescenceMap,l.iridescenceMapTransform)),r.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=r.iridescenceThicknessMap,t(r.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),r.transmission>0&&(l.transmission.value=r.transmission,l.transmissionSamplerMap.value=P.texture,l.transmissionSamplerSize.value.set(P.width,P.height),r.transmissionMap&&(l.transmissionMap.value=r.transmissionMap,t(r.transmissionMap,l.transmissionMapTransform)),l.thickness.value=r.thickness,r.thicknessMap&&(l.thicknessMap.value=r.thicknessMap,t(r.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=r.attenuationDistance,l.attenuationColor.value.copy(r.attenuationColor)),r.anisotropy>0&&(l.anisotropyVector.value.set(r.anisotropy*Math.cos(r.anisotropyRotation),r.anisotropy*Math.sin(r.anisotropyRotation)),r.anisotropyMap&&(l.anisotropyMap.value=r.anisotropyMap,t(r.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=r.specularIntensity,l.specularColor.value.copy(r.specularColor),r.specularColorMap&&(l.specularColorMap.value=r.specularColorMap,t(r.specularColorMap,l.specularColorMapTransform)),r.specularIntensityMap&&(l.specularIntensityMap.value=r.specularIntensityMap,t(r.specularIntensityMap,l.specularIntensityMapTransform))}function N(l,r){r.matcap&&(l.matcap.value=r.matcap)}function w(l,r){const P=n.get(r).light;l.referencePosition.value.setFromMatrixPosition(P.matrixWorld),l.nearDistance.value=P.shadow.camera.near,l.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:c}}function fu(e,n,t,i){let c={},o={},d=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function b(P,T){const _=T.program;i.uniformBlockBinding(P,_)}function g(P,T){let _=c[P.id];_===void 0&&(N(P),_=C(P),c[P.id]=_,P.addEventListener("dispose",l));const B=T.program;i.updateUBOMapping(P,B);const L=n.render.frame;o[P.id]!==L&&(E(P),o[P.id]=L)}function C(P){const T=A();P.__bindingPointIndex=T;const _=e.createBuffer(),B=P.__size,L=P.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,B,L),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,_),_}function A(){for(let P=0;P<f;P++)if(d.indexOf(P)===-1)return d.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(P){const T=c[P.id],_=P.uniforms,B=P.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let L=0,I=_.length;L<I;L++){const G=Array.isArray(_[L])?_[L]:[_[L]];for(let h=0,u=G.length;h<u;h++){const R=G[h];if(v(R,L,h,B)===!0){const q=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let Q=0;Q<V.length;Q++){const W=V[Q],J=w(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,q+Y,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,q,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(P,T,_,B){const L=P.value,I=T+"_"+_;if(B[I]===void 0)return typeof L=="number"||typeof L=="boolean"?B[I]=L:B[I]=L.clone(),!0;{const G=B[I];if(typeof L=="number"||typeof L=="boolean"){if(G!==L)return B[I]=L,!0}else if(G.equals(L)===!1)return G.copy(L),!0}return!1}function N(P){const T=P.uniforms;let _=0;const B=16;for(let I=0,G=T.length;I<G;I++){const h=Array.isArray(T[I])?T[I]:[T[I]];for(let u=0,R=h.length;u<R;u++){const q=h[u],V=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,Q=V.length;Y<Q;Y++){const W=V[Y],J=w(W),F=_%B,me=F%J.boundary,Se=F+me;_+=me,Se!==0&&B-Se<J.storage&&(_+=B-Se),q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=_,_+=J.storage}}}const L=_%B;return L>0&&(_+=B-L),P.__size=_,P.__cache={},this}function w(P){const T={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(T.boundary=4,T.storage=4):P.isVector2?(T.boundary=8,T.storage=8):P.isVector3||P.isColor?(T.boundary=16,T.storage=12):P.isVector4?(T.boundary=16,T.storage=16):P.isMatrix3?(T.boundary=48,T.storage=48):P.isMatrix4?(T.boundary=64,T.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),T}function l(P){const T=P.target;T.removeEventListener("dispose",l);const _=d.indexOf(T.__bindingPointIndex);d.splice(_,1),e.deleteBuffer(c[T.id]),delete c[T.id],delete o[T.id]}function r(){for(const P in c)e.deleteBuffer(c[P]);d=[],c={},o={}}return{bind:b,update:g,dispose:r}}class pr{constructor(n={}){const{canvas:t=ea(),context:i=null,depth:c=!0,stencil:o=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:b=!0,preserveDrawingBuffer:g=!1,powerPreference:C="default",failIfMajorPerformanceCaveat:A=!1,reverseDepthBuffer:E=!1}=n;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=d;const N=new Uint32Array(4),w=new Int32Array(4);let l=null,r=null;const P=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ta,this.toneMapping=Rt,this.toneMappingExposure=1;const _=this;let B=!1,L=0,I=0,G=null,h=-1,u=null;const R=new ft,q=new ft;let V=null;const Y=new Ke(0);let Q=0,W=t.width,J=t.height,F=1,me=null,Se=null;const Le=new ft(0,0,W,J),He=new ft(0,0,W,J);let Ze=!1;const k=new Er;let j=!1,de=!1;this.transmissionResolutionScale=1;const ie=new zt,Me=new zt,Be=new Ge,Te=new ft,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function we(){return G===null?F:1}let m=i;function pt(s,M){return t.getContext(s,M)}try{const s={alpha:!0,depth:c,stencil:o,antialias:f,premultipliedAlpha:b,preserveDrawingBuffer:g,powerPreference:C,failIfMajorPerformanceCaveat:A};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),m===null){const M="webgl2";if(m=pt(M,s),m===null)throw pt(M)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw console.error("THREE.WebGLRenderer: "+s.message),s}let Ue,De,_e,Xe,he,p,a,U,z,K,H,pe,re,ce,ye,Z,le,Ee,xe,fe,Ie,be,ze,S;function te(){Ue=new Sl(m),Ue.init(),be=new iu(m,Ue),De=new hl(m,Ue,n,be),_e=new tu(m,Ue),De.reverseDepthBuffer&&E&&_e.buffers.depth.setReversed(!0),Xe=new xl(m),he=new kf,p=new nu(m,Ue,_e,he,De,be,Xe),a=new _l(_),U=new El(_),z=new wo(m),ze=new dl(m,z),K=new Ml(m,z,Xe,ze),H=new Rl(m,K,z,Xe),xe=new Al(m,De,p),Z=new ml(he),pe=new Vf(_,a,U,Ue,De,ze,Z),re=new lu(_,he),ce=new zf,ye=new Zf(Ue),Ee=new ul(_,a,U,_e,H,v,b),le=new Jf(_,H,De),S=new fu(m,Xe,De,_e),fe=new pl(m,Ue,Xe),Ie=new Tl(m,Ue,Xe),Xe.programs=pe.programs,_.capabilities=De,_.extensions=Ue,_.properties=he,_.renderLists=ce,_.shadowMap=le,_.state=_e,_.info=Xe}te();const O=new su(_,m);this.xr=O,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){const s=Ue.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){const s=Ue.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(s){s!==void 0&&(F=s,this.setSize(W,J,!1))},this.getSize=function(s){return s.set(W,J)},this.setSize=function(s,M,D=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=s,J=M,t.width=Math.floor(s*F),t.height=Math.floor(M*F),D===!0&&(t.style.width=s+"px",t.style.height=M+"px"),this.setViewport(0,0,s,M)},this.getDrawingBufferSize=function(s){return s.set(W*F,J*F).floor()},this.setDrawingBufferSize=function(s,M,D){W=s,J=M,F=D,t.width=Math.floor(s*D),t.height=Math.floor(M*D),this.setViewport(0,0,s,M)},this.getCurrentViewport=function(s){return s.copy(R)},this.getViewport=function(s){return s.copy(Le)},this.setViewport=function(s,M,D,y){s.isVector4?Le.set(s.x,s.y,s.z,s.w):Le.set(s,M,D,y),_e.viewport(R.copy(Le).multiplyScalar(F).round())},this.getScissor=function(s){return s.copy(He)},this.setScissor=function(s,M,D,y){s.isVector4?He.set(s.x,s.y,s.z,s.w):He.set(s,M,D,y),_e.scissor(q.copy(He).multiplyScalar(F).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(s){_e.setScissorTest(Ze=s)},this.setOpaqueSort=function(s){me=s},this.setTransparentSort=function(s){Se=s},this.getClearColor=function(s){return s.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(s=!0,M=!0,D=!0){let y=0;if(s){let x=!1;if(G!==null){const $=G.texture.format;x=$===Ur||$===wr||$===Lr}if(x){const $=G.texture.type,ne=$===yt||$===nn||$===vn||$===tn||$===Ar||$===Rr,se=Ee.getClearColor(),ue=Ee.getClearAlpha(),Ae=se.r,Re=se.g,ve=se.b;ne?(N[0]=Ae,N[1]=Re,N[2]=ve,N[3]=ue,m.clearBufferuiv(m.COLOR,0,N)):(w[0]=Ae,w[1]=Re,w[2]=ve,w[3]=ue,m.clearBufferiv(m.COLOR,0,w))}else y|=m.COLOR_BUFFER_BIT}M&&(y|=m.DEPTH_BUFFER_BIT),D&&(y|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),m.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ee.dispose(),ce.dispose(),ye.dispose(),he.dispose(),a.dispose(),U.dispose(),H.dispose(),ze.dispose(),S.dispose(),pe.dispose(),O.dispose(),O.removeEventListener("sessionstart",ri),O.removeEventListener("sessionend",ai),Ct.stop()};function X(s){s.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const s=Xe.autoReset,M=le.enabled,D=le.autoUpdate,y=le.needsUpdate,x=le.type;te(),Xe.autoReset=s,le.enabled=M,le.autoUpdate=D,le.needsUpdate=y,le.type=x}function ae(s){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function Ce(s){const M=s.target;M.removeEventListener("dispose",Ce),Qe(M)}function Qe(s){at(s),he.remove(s)}function at(s){const M=he.get(s).programs;M!==void 0&&(M.forEach(function(D){pe.releaseProgram(D)}),s.isShaderMaterial&&pe.releaseShaderCache(s))}this.renderBufferDirect=function(s,M,D,y,x,$){M===null&&(M=Je);const ne=x.isMesh&&x.matrixWorld.determinant()<0,se=Yr(s,M,D,y,x);_e.setMaterial(y,ne);let ue=D.index,Ae=1;if(y.wireframe===!0){if(ue=K.getWireframeAttribute(D),ue===void 0)return;Ae=2}const Re=D.drawRange,ve=D.attributes.position;let Ne=Re.start*Ae,Ve=(Re.start+Re.count)*Ae;$!==null&&(Ne=Math.max(Ne,$.start*Ae),Ve=Math.min(Ve,($.start+$.count)*Ae)),ue!==null?(Ne=Math.max(Ne,0),Ve=Math.min(Ve,ue.count)):ve!=null&&(Ne=Math.max(Ne,0),Ve=Math.min(Ve,ve.count));const et=Ve-Ne;if(et<0||et===1/0)return;ze.setup(x,y,se,D,ue);let je,Oe=fe;if(ue!==null&&(je=z.get(ue),Oe=Ie,Oe.setIndex(je)),x.isMesh)y.wireframe===!0?(_e.setLineWidth(y.wireframeLinewidth*we()),Oe.setMode(m.LINES)):Oe.setMode(m.TRIANGLES);else if(x.isLine){let ge=y.linewidth;ge===void 0&&(ge=1),_e.setLineWidth(ge*we()),x.isLineSegments?Oe.setMode(m.LINES):x.isLineLoop?Oe.setMode(m.LINE_LOOP):Oe.setMode(m.LINE_STRIP)}else x.isPoints?Oe.setMode(m.POINTS):x.isSprite&&Oe.setMode(m.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)Oe.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Oe.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{const ge=x._multiDrawStarts,rt=x._multiDrawCounts,ke=x._multiDrawCount,gt=ue?z.get(ue).bytesPerElement:1,Ot=he.get(y).currentProgram.getUniforms();for(let dt=0;dt<ke;dt++)Ot.setValue(m,"_gl_DrawID",dt),Oe.render(ge[dt]/gt,rt[dt])}else if(x.isInstancedMesh)Oe.renderInstances(Ne,et,x.count);else if(D.isInstancedBufferGeometry){const ge=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,rt=Math.min(D.instanceCount,ge);Oe.renderInstances(Ne,et,rt)}else Oe.render(Ne,et)};function We(s,M,D){s.transparent===!0&&s.side===Tt&&s.forceSinglePass===!1?(s.side=_t,s.needsUpdate=!0,on(s,M,D),s.side=en,s.needsUpdate=!0,on(s,M,D),s.side=Tt):on(s,M,D)}this.compile=function(s,M,D=null){D===null&&(D=s),r=ye.get(D),r.init(M),T.push(r),D.traverseVisible(function(x){x.isLight&&x.layers.test(M.layers)&&(r.pushLight(x),x.castShadow&&r.pushShadow(x))}),s!==D&&s.traverseVisible(function(x){x.isLight&&x.layers.test(M.layers)&&(r.pushLight(x),x.castShadow&&r.pushShadow(x))}),r.setupLights();const y=new Set;return s.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;const $=x.material;if($)if(Array.isArray($))for(let ne=0;ne<$.length;ne++){const se=$[ne];We(se,D,x),y.add(se)}else We($,D,x),y.add($)}),T.pop(),r=null,y},this.compileAsync=function(s,M,D=null){const y=this.compile(s,M,D);return new Promise(x=>{function $(){if(y.forEach(function(ne){he.get(ne).currentProgram.isReady()&&y.delete(ne)}),y.size===0){x(s);return}setTimeout($,10)}Ue.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let vt=null;function St(s){vt&&vt(s)}function ri(){Ct.stop()}function ai(){Ct.start()}const Ct=new Fr;Ct.setAnimationLoop(St),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(s){vt=s,O.setAnimationLoop(s),s===null?Ct.stop():Ct.start()},O.addEventListener("sessionstart",ri),O.addEventListener("sessionend",ai),this.render=function(s,M){if(M!==void 0&&M.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(M),M=O.getCamera()),s.isScene===!0&&s.onBeforeRender(_,s,M,G),r=ye.get(s,T.length),r.init(M),T.push(r),Me.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),k.setFromProjectionMatrix(Me),de=this.localClippingEnabled,j=Z.init(this.clippingPlanes,de),l=ce.get(s,P.length),l.init(),P.push(l),O.enabled===!0&&O.isPresenting===!0){const $=_.xr.getDepthSensingMesh();$!==null&&Tn($,M,-1/0,_.sortObjects)}Tn(s,M,0,_.sortObjects),l.finish(),_.sortObjects===!0&&l.sort(me,Se),$e=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,$e&&Ee.addToRenderList(l,s),this.info.render.frame++,j===!0&&Z.beginShadows();const D=r.state.shadowsArray;le.render(D,s,M),j===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const y=l.opaque,x=l.transmissive;if(r.setupLights(),M.isArrayCamera){const $=M.cameras;if(x.length>0)for(let ne=0,se=$.length;ne<se;ne++){const ue=$[ne];si(y,x,s,ue)}$e&&Ee.render(s);for(let ne=0,se=$.length;ne<se;ne++){const ue=$[ne];oi(l,s,ue,ue.viewport)}}else x.length>0&&si(y,x,s,M),$e&&Ee.render(s),oi(l,s,M);G!==null&&I===0&&(p.updateMultisampleRenderTarget(G),p.updateRenderTargetMipmap(G)),s.isScene===!0&&s.onAfterRender(_,s,M),ze.resetDefaultState(),h=-1,u=null,T.pop(),T.length>0?(r=T[T.length-1],j===!0&&Z.setGlobalState(_.clippingPlanes,r.state.camera)):r=null,P.pop(),P.length>0?l=P[P.length-1]:l=null};function Tn(s,M,D,y){if(s.visible===!1)return;if(s.layers.test(M.layers)){if(s.isGroup)D=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(M);else if(s.isLight)r.pushLight(s),s.castShadow&&r.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||k.intersectsSprite(s)){y&&Te.setFromMatrixPosition(s.matrixWorld).applyMatrix4(Me);const ne=H.update(s),se=s.material;se.visible&&l.push(s,ne,se,D,Te.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||k.intersectsObject(s))){const ne=H.update(s),se=s.material;if(y&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),Te.copy(s.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Te.copy(ne.boundingSphere.center)),Te.applyMatrix4(s.matrixWorld).applyMatrix4(Me)),Array.isArray(se)){const ue=ne.groups;for(let Ae=0,Re=ue.length;Ae<Re;Ae++){const ve=ue[Ae],Ne=se[ve.materialIndex];Ne&&Ne.visible&&l.push(s,ne,Ne,D,Te.z,ve)}}else se.visible&&l.push(s,ne,se,D,Te.z,null)}}const $=s.children;for(let ne=0,se=$.length;ne<se;ne++)Tn($[ne],M,D,y)}function oi(s,M,D,y){const x=s.opaque,$=s.transmissive,ne=s.transparent;r.setupLightsView(D),j===!0&&Z.setGlobalState(_.clippingPlanes,D),y&&_e.viewport(R.copy(y)),x.length>0&&an(x,M,D),$.length>0&&an($,M,D),ne.length>0&&an(ne,M,D),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function si(s,M,D,y){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;r.state.transmissionRenderTarget[y.id]===void 0&&(r.state.transmissionRenderTarget[y.id]=new Xt(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?gn:yt,minFilter:Zt,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const $=r.state.transmissionRenderTarget[y.id],ne=y.viewport||R;$.setSize(ne.z*_.transmissionResolutionScale,ne.w*_.transmissionResolutionScale);const se=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(Y),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),$e&&Ee.render(D);const ue=_.toneMapping;_.toneMapping=Rt;const Ae=y.viewport;if(y.viewport!==void 0&&(y.viewport=void 0),r.setupLightsView(y),j===!0&&Z.setGlobalState(_.clippingPlanes,y),an(s,D,y),p.updateMultisampleRenderTarget($),p.updateRenderTargetMipmap($),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ve=0,Ne=M.length;ve<Ne;ve++){const Ve=M[ve],et=Ve.object,je=Ve.geometry,Oe=Ve.material,ge=Ve.group;if(Oe.side===Tt&&et.layers.test(y.layers)){const rt=Oe.side;Oe.side=_t,Oe.needsUpdate=!0,ci(et,D,y,je,Oe,ge),Oe.side=rt,Oe.needsUpdate=!0,Re=!0}}Re===!0&&(p.updateMultisampleRenderTarget($),p.updateRenderTargetMipmap($))}_.setRenderTarget(se),_.setClearColor(Y,Q),Ae!==void 0&&(y.viewport=Ae),_.toneMapping=ue}function an(s,M,D){const y=M.isScene===!0?M.overrideMaterial:null;for(let x=0,$=s.length;x<$;x++){const ne=s[x],se=ne.object,ue=ne.geometry,Ae=y===null?ne.material:y,Re=ne.group;se.layers.test(D.layers)&&ci(se,M,D,ue,Ae,Re)}}function ci(s,M,D,y,x,$){s.onBeforeRender(_,M,D,y,x,$),s.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),x.onBeforeRender(_,M,D,y,s,$),x.transparent===!0&&x.side===Tt&&x.forceSinglePass===!1?(x.side=_t,x.needsUpdate=!0,_.renderBufferDirect(D,M,y,x,s,$),x.side=en,x.needsUpdate=!0,_.renderBufferDirect(D,M,y,x,s,$),x.side=Tt):_.renderBufferDirect(D,M,y,x,s,$),s.onAfterRender(_,M,D,y,x,$)}function on(s,M,D){M.isScene!==!0&&(M=Je);const y=he.get(s),x=r.state.lights,$=r.state.shadowsArray,ne=x.state.version,se=pe.getParameters(s,x.state,$,M,D),ue=pe.getProgramCacheKey(se);let Ae=y.programs;y.environment=s.isMeshStandardMaterial?M.environment:null,y.fog=M.fog,y.envMap=(s.isMeshStandardMaterial?U:a).get(s.envMap||y.environment),y.envMapRotation=y.environment!==null&&s.envMap===null?M.environmentRotation:s.envMapRotation,Ae===void 0&&(s.addEventListener("dispose",Ce),Ae=new Map,y.programs=Ae);let Re=Ae.get(ue);if(Re!==void 0){if(y.currentProgram===Re&&y.lightsStateVersion===ne)return fi(s,se),Re}else se.uniforms=pe.getUniforms(s),s.onBeforeCompile(se,_),Re=pe.acquireProgram(se,ue),Ae.set(ue,Re),y.uniforms=se.uniforms;const ve=y.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(ve.clippingPlanes=Z.uniform),fi(s,se),y.needsLights=Kr(s),y.lightsStateVersion=ne,y.needsLights&&(ve.ambientLightColor.value=x.state.ambient,ve.lightProbe.value=x.state.probe,ve.directionalLights.value=x.state.directional,ve.directionalLightShadows.value=x.state.directionalShadow,ve.spotLights.value=x.state.spot,ve.spotLightShadows.value=x.state.spotShadow,ve.rectAreaLights.value=x.state.rectArea,ve.ltc_1.value=x.state.rectAreaLTC1,ve.ltc_2.value=x.state.rectAreaLTC2,ve.pointLights.value=x.state.point,ve.pointLightShadows.value=x.state.pointShadow,ve.hemisphereLights.value=x.state.hemi,ve.directionalShadowMap.value=x.state.directionalShadowMap,ve.directionalShadowMatrix.value=x.state.directionalShadowMatrix,ve.spotShadowMap.value=x.state.spotShadowMap,ve.spotLightMatrix.value=x.state.spotLightMatrix,ve.spotLightMap.value=x.state.spotLightMap,ve.pointShadowMap.value=x.state.pointShadowMap,ve.pointShadowMatrix.value=x.state.pointShadowMatrix),y.currentProgram=Re,y.uniformsList=null,Re}function li(s){if(s.uniformsList===null){const M=s.currentProgram.getUniforms();s.uniformsList=hn.seqWithValue(M.seq,s.uniforms)}return s.uniformsList}function fi(s,M){const D=he.get(s);D.outputColorSpace=M.outputColorSpace,D.batching=M.batching,D.batchingColor=M.batchingColor,D.instancing=M.instancing,D.instancingColor=M.instancingColor,D.instancingMorph=M.instancingMorph,D.skinning=M.skinning,D.morphTargets=M.morphTargets,D.morphNormals=M.morphNormals,D.morphColors=M.morphColors,D.morphTargetsCount=M.morphTargetsCount,D.numClippingPlanes=M.numClippingPlanes,D.numIntersection=M.numClipIntersection,D.vertexAlphas=M.vertexAlphas,D.vertexTangents=M.vertexTangents,D.toneMapping=M.toneMapping}function Yr(s,M,D,y,x){M.isScene!==!0&&(M=Je),p.resetTextureUnits();const $=M.fog,ne=y.isMeshStandardMaterial?M.environment:null,se=G===null?_.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:En,ue=(y.isMeshStandardMaterial?U:a).get(y.envMap||ne),Ae=y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Re=!!D.attributes.tangent&&(!!y.normalMap||y.anisotropy>0),ve=!!D.morphAttributes.position,Ne=!!D.morphAttributes.normal,Ve=!!D.morphAttributes.color;let et=Rt;y.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(et=_.toneMapping);const je=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Oe=je!==void 0?je.length:0,ge=he.get(y),rt=r.state.lights;if(j===!0&&(de===!0||s!==u)){const ot=s===u&&y.id===h;Z.setState(y,s,ot)}let ke=!1;y.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==rt.state.version||ge.outputColorSpace!==se||x.isBatchedMesh&&ge.batching===!1||!x.isBatchedMesh&&ge.batching===!0||x.isBatchedMesh&&ge.batchingColor===!0&&x.colorTexture===null||x.isBatchedMesh&&ge.batchingColor===!1&&x.colorTexture!==null||x.isInstancedMesh&&ge.instancing===!1||!x.isInstancedMesh&&ge.instancing===!0||x.isSkinnedMesh&&ge.skinning===!1||!x.isSkinnedMesh&&ge.skinning===!0||x.isInstancedMesh&&ge.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&ge.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&ge.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&ge.instancingMorph===!1&&x.morphTexture!==null||ge.envMap!==ue||y.fog===!0&&ge.fog!==$||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Z.numPlanes||ge.numIntersection!==Z.numIntersection)||ge.vertexAlphas!==Ae||ge.vertexTangents!==Re||ge.morphTargets!==ve||ge.morphNormals!==Ne||ge.morphColors!==Ve||ge.toneMapping!==et||ge.morphTargetsCount!==Oe)&&(ke=!0):(ke=!0,ge.__version=y.version);let gt=ge.currentProgram;ke===!0&&(gt=on(y,M,x));let Ot=!1,dt=!1,Kt=!1;const qe=gt.getUniforms(),ht=ge.uniforms;if(_e.useProgram(gt.program)&&(Ot=!0,dt=!0,Kt=!0),y.id!==h&&(h=y.id,dt=!0),Ot||u!==s){_e.buffers.depth.getReversed()?(ie.copy(s.projectionMatrix),ia(ie),ra(ie),qe.setValue(m,"projectionMatrix",ie)):qe.setValue(m,"projectionMatrix",s.projectionMatrix),qe.setValue(m,"viewMatrix",s.matrixWorldInverse);const st=qe.map.cameraPosition;st!==void 0&&st.setValue(m,Be.setFromMatrixPosition(s.matrixWorld)),De.logarithmicDepthBuffer&&qe.setValue(m,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(y.isMeshPhongMaterial||y.isMeshToonMaterial||y.isMeshLambertMaterial||y.isMeshBasicMaterial||y.isMeshStandardMaterial||y.isShaderMaterial)&&qe.setValue(m,"isOrthographic",s.isOrthographicCamera===!0),u!==s&&(u=s,dt=!0,Kt=!0)}if(x.isSkinnedMesh){qe.setOptional(m,x,"bindMatrix"),qe.setOptional(m,x,"bindMatrixInverse");const ot=x.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),qe.setValue(m,"boneTexture",ot.boneTexture,p))}x.isBatchedMesh&&(qe.setOptional(m,x,"batchingTexture"),qe.setValue(m,"batchingTexture",x._matricesTexture,p),qe.setOptional(m,x,"batchingIdTexture"),qe.setValue(m,"batchingIdTexture",x._indirectTexture,p),qe.setOptional(m,x,"batchingColorTexture"),x._colorsTexture!==null&&qe.setValue(m,"batchingColorTexture",x._colorsTexture,p));const mt=D.morphAttributes;if((mt.position!==void 0||mt.normal!==void 0||mt.color!==void 0)&&xe.update(x,D,gt),(dt||ge.receiveShadow!==x.receiveShadow)&&(ge.receiveShadow=x.receiveShadow,qe.setValue(m,"receiveShadow",x.receiveShadow)),y.isMeshGouraudMaterial&&y.envMap!==null&&(ht.envMap.value=ue,ht.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),y.isMeshStandardMaterial&&y.envMap===null&&M.environment!==null&&(ht.envMapIntensity.value=M.environmentIntensity),dt&&(qe.setValue(m,"toneMappingExposure",_.toneMappingExposure),ge.needsLights&&qr(ht,Kt),$&&y.fog===!0&&re.refreshFogUniforms(ht,$),re.refreshMaterialUniforms(ht,y,F,J,r.state.transmissionRenderTarget[s.id]),hn.upload(m,li(ge),ht,p)),y.isShaderMaterial&&y.uniformsNeedUpdate===!0&&(hn.upload(m,li(ge),ht,p),y.uniformsNeedUpdate=!1),y.isSpriteMaterial&&qe.setValue(m,"center",x.center),qe.setValue(m,"modelViewMatrix",x.modelViewMatrix),qe.setValue(m,"normalMatrix",x.normalMatrix),qe.setValue(m,"modelMatrix",x.matrixWorld),y.isShaderMaterial||y.isRawShaderMaterial){const ot=y.uniformsGroups;for(let st=0,xn=ot.length;st<xn;st++){const bt=ot[st];S.update(bt,gt),S.bind(bt,gt)}}return gt}function qr(s,M){s.ambientLightColor.needsUpdate=M,s.lightProbe.needsUpdate=M,s.directionalLights.needsUpdate=M,s.directionalLightShadows.needsUpdate=M,s.pointLights.needsUpdate=M,s.pointLightShadows.needsUpdate=M,s.spotLights.needsUpdate=M,s.spotLightShadows.needsUpdate=M,s.rectAreaLights.needsUpdate=M,s.hemisphereLights.needsUpdate=M}function Kr(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(s,M,D){he.get(s.texture).__webglTexture=M,he.get(s.depthTexture).__webglTexture=D;const y=he.get(s);y.__hasExternalTextures=!0,y.__autoAllocateDepthBuffer=D===void 0,y.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(s,M){const D=he.get(s);D.__webglFramebuffer=M,D.__useDefaultFramebuffer=M===void 0};const $r=m.createFramebuffer();this.setRenderTarget=function(s,M=0,D=0){G=s,L=M,I=D;let y=!0,x=null,$=!1,ne=!1;if(s){const ue=he.get(s);if(ue.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(m.FRAMEBUFFER,null),y=!1;else if(ue.__webglFramebuffer===void 0)p.setupRenderTarget(s);else if(ue.__hasExternalTextures)p.rebindTextures(s,he.get(s.texture).__webglTexture,he.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){const ve=s.depthTexture;if(ue.__boundDepthTexture!==ve){if(ve!==null&&he.has(ve)&&(s.width!==ve.image.width||s.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");p.setupDepthRenderbuffer(s)}}const Ae=s.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ne=!0);const Re=he.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(Re[M])?x=Re[M][D]:x=Re[M],$=!0):s.samples>0&&p.useMultisampledRTT(s)===!1?x=he.get(s).__webglMultisampledFramebuffer:Array.isArray(Re)?x=Re[D]:x=Re,R.copy(s.viewport),q.copy(s.scissor),V=s.scissorTest}else R.copy(Le).multiplyScalar(F).floor(),q.copy(He).multiplyScalar(F).floor(),V=Ze;if(D!==0&&(x=$r),_e.bindFramebuffer(m.FRAMEBUFFER,x)&&y&&_e.drawBuffers(s,x),_e.viewport(R),_e.scissor(q),_e.setScissorTest(V),$){const ue=he.get(s.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+M,ue.__webglTexture,D)}else if(ne){const ue=he.get(s.texture),Ae=M;m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,ue.__webglTexture,D,Ae)}else if(s!==null&&D!==0){const ue=he.get(s.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,ue.__webglTexture,D)}h=-1},this.readRenderTargetPixels=function(s,M,D,y,x,$,ne){if(!(s&&s.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=he.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){_e.bindFramebuffer(m.FRAMEBUFFER,se);try{const ue=s.texture,Ae=ue.format,Re=ue.type;if(!De.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M>=0&&M<=s.width-y&&D>=0&&D<=s.height-x&&m.readPixels(M,D,y,x,be.convert(Ae),be.convert(Re),$)}finally{const ue=G!==null?he.get(G).__webglFramebuffer:null;_e.bindFramebuffer(m.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(s,M,D,y,x,$,ne){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=he.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){const ue=s.texture,Ae=ue.format,Re=ue.type;if(!De.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(M>=0&&M<=s.width-y&&D>=0&&D<=s.height-x){_e.bindFramebuffer(m.FRAMEBUFFER,se);const ve=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,ve),m.bufferData(m.PIXEL_PACK_BUFFER,$.byteLength,m.STREAM_READ),m.readPixels(M,D,y,x,be.convert(Ae),be.convert(Re),0);const Ne=G!==null?he.get(G).__webglFramebuffer:null;_e.bindFramebuffer(m.FRAMEBUFFER,Ne);const Ve=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await aa(m,Ve,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,ve),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,$),m.deleteBuffer(ve),m.deleteSync(Ve),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(s,M=null,D=0){s.isTexture!==!0&&(Ht("WebGLRenderer: copyFramebufferToTexture function signature has changed."),M=arguments[0]||null,s=arguments[1]);const y=Math.pow(2,-D),x=Math.floor(s.image.width*y),$=Math.floor(s.image.height*y),ne=M!==null?M.x:0,se=M!==null?M.y:0;p.setTexture2D(s,0),m.copyTexSubImage2D(m.TEXTURE_2D,D,0,0,ne,se,x,$),_e.unbindTexture()};const Zr=m.createFramebuffer(),Qr=m.createFramebuffer();this.copyTextureToTexture=function(s,M,D=null,y=null,x=0,$=null){s.isTexture!==!0&&(Ht("WebGLRenderer: copyTextureToTexture function signature has changed."),y=arguments[0]||null,s=arguments[1],M=arguments[2],$=arguments[3]||0,D=null),$===null&&(x!==0?(Ht("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=x,x=0):$=0);let ne,se,ue,Ae,Re,ve,Ne,Ve,et;const je=s.isCompressedTexture?s.mipmaps[$]:s.image;if(D!==null)ne=D.max.x-D.min.x,se=D.max.y-D.min.y,ue=D.isBox3?D.max.z-D.min.z:1,Ae=D.min.x,Re=D.min.y,ve=D.isBox3?D.min.z:0;else{const mt=Math.pow(2,-x);ne=Math.floor(je.width*mt),se=Math.floor(je.height*mt),s.isDataArrayTexture?ue=je.depth:s.isData3DTexture?ue=Math.floor(je.depth*mt):ue=1,Ae=0,Re=0,ve=0}y!==null?(Ne=y.x,Ve=y.y,et=y.z):(Ne=0,Ve=0,et=0);const Oe=be.convert(M.format),ge=be.convert(M.type);let rt;M.isData3DTexture?(p.setTexture3D(M,0),rt=m.TEXTURE_3D):M.isDataArrayTexture||M.isCompressedArrayTexture?(p.setTexture2DArray(M,0),rt=m.TEXTURE_2D_ARRAY):(p.setTexture2D(M,0),rt=m.TEXTURE_2D),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,M.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,M.unpackAlignment);const ke=m.getParameter(m.UNPACK_ROW_LENGTH),gt=m.getParameter(m.UNPACK_IMAGE_HEIGHT),Ot=m.getParameter(m.UNPACK_SKIP_PIXELS),dt=m.getParameter(m.UNPACK_SKIP_ROWS),Kt=m.getParameter(m.UNPACK_SKIP_IMAGES);m.pixelStorei(m.UNPACK_ROW_LENGTH,je.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,je.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Ae),m.pixelStorei(m.UNPACK_SKIP_ROWS,Re),m.pixelStorei(m.UNPACK_SKIP_IMAGES,ve);const qe=s.isDataArrayTexture||s.isData3DTexture,ht=M.isDataArrayTexture||M.isData3DTexture;if(s.isDepthTexture){const mt=he.get(s),ot=he.get(M),st=he.get(mt.__renderTarget),xn=he.get(ot.__renderTarget);_e.bindFramebuffer(m.READ_FRAMEBUFFER,st.__webglFramebuffer),_e.bindFramebuffer(m.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let bt=0;bt<ue;bt++)qe&&(m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,he.get(s).__webglTexture,x,ve+bt),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,he.get(M).__webglTexture,$,et+bt)),m.blitFramebuffer(Ae,Re,ne,se,Ne,Ve,ne,se,m.DEPTH_BUFFER_BIT,m.NEAREST);_e.bindFramebuffer(m.READ_FRAMEBUFFER,null),_e.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(x!==0||s.isRenderTargetTexture||he.has(s)){const mt=he.get(s),ot=he.get(M);_e.bindFramebuffer(m.READ_FRAMEBUFFER,Zr),_e.bindFramebuffer(m.DRAW_FRAMEBUFFER,Qr);for(let st=0;st<ue;st++)qe?m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,mt.__webglTexture,x,ve+st):m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,mt.__webglTexture,x),ht?m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,ot.__webglTexture,$,et+st):m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,ot.__webglTexture,$),x!==0?m.blitFramebuffer(Ae,Re,ne,se,Ne,Ve,ne,se,m.COLOR_BUFFER_BIT,m.NEAREST):ht?m.copyTexSubImage3D(rt,$,Ne,Ve,et+st,Ae,Re,ne,se):m.copyTexSubImage2D(rt,$,Ne,Ve,Ae,Re,ne,se);_e.bindFramebuffer(m.READ_FRAMEBUFFER,null),_e.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else ht?s.isDataTexture||s.isData3DTexture?m.texSubImage3D(rt,$,Ne,Ve,et,ne,se,ue,Oe,ge,je.data):M.isCompressedArrayTexture?m.compressedTexSubImage3D(rt,$,Ne,Ve,et,ne,se,ue,Oe,je.data):m.texSubImage3D(rt,$,Ne,Ve,et,ne,se,ue,Oe,ge,je):s.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,$,Ne,Ve,ne,se,Oe,ge,je.data):s.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,$,Ne,Ve,je.width,je.height,Oe,je.data):m.texSubImage2D(m.TEXTURE_2D,$,Ne,Ve,ne,se,Oe,ge,je);m.pixelStorei(m.UNPACK_ROW_LENGTH,ke),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,gt),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Ot),m.pixelStorei(m.UNPACK_SKIP_ROWS,dt),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Kt),$===0&&M.generateMipmaps&&m.generateMipmap(rt),_e.unbindTexture()},this.copyTextureToTexture3D=function(s,M,D=null,y=null,x=0){return s.isTexture!==!0&&(Ht("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,y=arguments[1]||null,s=arguments[2],M=arguments[3],x=arguments[4]||0),Ht('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(s,M,D,y,x)},this.initRenderTarget=function(s){he.get(s).__webglFramebuffer===void 0&&p.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?p.setTextureCube(s,0):s.isData3DTexture?p.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?p.setTexture2DArray(s,0):p.setTexture2D(s,0),_e.unbindTexture()},this.resetState=function(){L=0,I=0,G=null,_e.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(n),t.unpackColorSpace=tt._getUnpackColorSpace()}}const ii=Kn("camera",()=>{const e=lt(75),n=lt(window.innerWidth/window.innerHeight),t=lt(.1),i=lt(1e3),c=lt(50),o=lt(null);function d(){return o.value===null&&(o.value=new jt(e.value,n.value,t.value,i.value),o.value.position.z=c.value),o.value}function f(b,g,C){o.value.position.x+=b,o.value.position.y+=g,o.value.position.z+=C}return{createCamera:d,camera:o,updatePosition:f}}),Bt=new Jn(0,0,0,"YXZ"),Gt=new Ge,uu={type:"change"},du={type:"lock"},pu={type:"unlock"},hr=Math.PI/2;class hu extends bo{constructor(n,t=null){super(n,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=mu.bind(this),this._onPointerlockChange=_u.bind(this),this._onPointerlockError=vu.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(n){return n.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(n){if(this.enabled===!1)return;const t=this.object;Gt.setFromMatrixColumn(t.matrix,0),Gt.crossVectors(t.up,Gt),t.position.addScaledVector(Gt,n)}moveRight(n){if(this.enabled===!1)return;const t=this.object;Gt.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Gt,n)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function mu(e){if(this.enabled===!1||this.isLocked===!1)return;const n=this.object;Bt.setFromQuaternion(n.quaternion),Bt.y-=e.movementX*.002*this.pointerSpeed,Bt.x-=e.movementY*.002*this.pointerSpeed,Bt.x=Math.max(hr-this.maxPolarAngle,Math.min(hr-this.minPolarAngle,Bt.x)),n.quaternion.setFromEuler(Bt),this.dispatchEvent(uu)}function _u(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(du),this.isLocked=!0):(this.dispatchEvent(pu),this.isLocked=!1)}function vu(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const un=ii(),kr=Kn("cameracontrol",()=>{const e=lt(new Ge(0,0,0)),n=lt(new Ge),t=lt(new Ge),i=lt(new Ge),c=lt(null),o=2,d=lt({forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1});function f(){c.value=new hu(un.createCamera(),document.body),un.camera=c.value.object,document.getElementById("three-canvas").addEventListener("click",function(){c.value.lock()}),document.body.addEventListener("keydown",A),document.body.addEventListener("keyup",E)}function b(v){g(v),t.value.add(i.value.clone().multiplyScalar(v)),n.value.add(t.value.clone().multiplyScalar(v)),un.camera.position.copy(n.value),C(v)}function g(v){d.value.forward&&(e.value.z-=v),d.value.backward&&(e.value.z+=v),d.value.left&&(e.value.x-=v),d.value.right&&(e.value.x+=v),d.value.up&&(e.value.y+=v),d.value.down&&(e.value.y-=v),e.value.lengthSq()>0&&(e.value.normalize(),e.value.applyQuaternion(un.camera.quaternion),i.value.copy(e.value).multiplyScalar(o),e.value.set(0,0,0))}function C(v){const N=Math.abs(1-v);t.value.multiplyScalar(N),i.value.multiplyScalar(.9-N)}function A(v){switch(console.log("key pressed",v.code),v.code){case"KeyW":case"ArrowUp":d.value.forward=!0;break;case"KeyS":case"ArrowDown":d.value.backward=!0;break;case"KeyA":case"ArrowLeft":d.value.left=!0;break;case"KeyD":case"ArrowRight":d.value.right=!0;break;case"Space":case"ShiftRight":d.value.up=!0;break;case"ControlRight":case"ControlLeft":d.value.down=!0;break}}function E(v){switch(v.code){case"KeyW":case"ArrowUp":d.value.forward=!1;break;case"KeyS":case"ArrowDown":d.value.backward=!1;break;case"KeyA":case"ArrowLeft":d.value.left=!1;break;case"KeyD":case"ArrowRight":d.value.right=!1;break;case"Space":case"ShiftRight":d.value.up=!1;break;case"ControlRight":case"ControlLeft":d.value.down=!1;break}}return{updateCameraPosition:b,initControls:f,pointer_controls:c,dampening:C,velocity:t}}),gu={class:"bg-black/50 overflow-auto"},Eu={__name:"MainRender",setup(e){const n=ii(),t=ei(),i=kr();ti();const c=new Po;let o=new pr,d=null;$n(()=>{t.initScene(),f()}),gr(()=>{d&&cancelAnimationFrame(d)});function f(){const g=document.querySelector("#three-canvas");o=new pr({antialias:!0,canvas:g}),o.setSize(window.innerWidth,window.innerHeight),i.initControls(),d=requestAnimationFrame(b)}function b(g){i.pointer_controls.isLocked===!0&&i.updateCameraPosition(c.getDelta()),o.render(t.render_scene,n.camera),d=requestAnimationFrame(b)}return jr(()=>t.render_scene,(g,C)=>{console.log("scene changed",g,C),o.render(g,n.camera),d&&cancelAnimationFrame(d),d=requestAnimationFrame(b)}),(g,C)=>(Qn(),Zn("div",gu,C[0]||(C[0]=[Jr("canvas",{class:"",id:"three-canvas"},null,-1)])))}},Wr=`(function(){"use strict";onmessage=e=>{const[o,s,a]=e.data,n=t(o,s,a);postMessage(n)};function t(e,o,s){return console.log("worker processing claim:",e,o,s),c(e,o,s),"claim processed by worker"}async function c(e,o,s){const a=new FormData;a.append("voxel",e),a.append("is_holding",!0);const n=await fetch(o,{method:"POST",headers:{"X-CSRFToken":s},body:a}),r=await n.json();if(n.ok)return console.log("created claim",r),r;console.error("failed to create claim"),console.error(n)}})();
`,mr=typeof self<"u"&&self.Blob&&new Blob([Wr],{type:"text/javascript;charset=utf-8"});function Su(e){let n;try{if(n=mr&&(self.URL||self.webkitURL).createObjectURL(mr),!n)throw"";const t=new Worker(n,{name:e==null?void 0:e.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(n)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Wr),{name:e==null?void 0:e.name})}finally{n&&(self.URL||self.webkitURL).revokeObjectURL(n)}}const zr='(function(){"use strict";self.onmessage=async n=>{const s=n.data,e=s[0],o=s[1],c=s[2],t=s[3],a=s[4],r=s[5],i=s[6],l=await f(e,o,c,t,a,r,i);postMessage(l)};async function f(n,s,e,o,c,t,a){const r=await _(Math.floor(n),Math.floor(s),Math.floor(e),o,c),i=h(r,t),l=d(i,a);return u(l,r)}function h(n,s){let e=[];for(const o of n){const c=s.findIndex(t=>t.pk===o.pk);e.push(c)}return e}function d(n,s){let e=[];for(const o of n)o<0?e.push("CREATENEW"):e.push(s[o].object.uuid);return e}function u(n,s){let e={};for(let o=0;o<n.length;o++){const c=n[o],t=s[o];c=="CREATENEW"?e[`${c}_${t.pk}`]={x:t.x,y:t.y,z:t.z,color:t.color}:e[`${c}`]={x:t.x,y:t.y,z:t.z}}return e}async function _(n,s,e,o,c){const t=new URLSearchParams({x:n,y:s,z:e}),a=await fetch(`${o}nearest/?${t}`,{method:"GET",headers:{"X-CSRFToken":c}});if(a.ok)return await a.json();console.error("failed to fetch nearest"),console.error(a)}})();\n',_r=typeof self<"u"&&self.Blob&&new Blob([zr],{type:"text/javascript;charset=utf-8"});function Mu(e){let n;try{if(n=_r&&(self.URL||self.webkitURL).createObjectURL(_r),!n)throw"";const t=new Worker(n,{name:e==null?void 0:e.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(n)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(zr),{name:e==null?void 0:e.name})}finally{n&&(self.URL||self.webkitURL).revokeObjectURL(n)}}const Xr=`(function(){"use strict";self.onmessage=async s=>{const t=s.data,e=t[0],n=t[1],a=await o(e,n);postMessage(a)};async function o(s,t){const e=await fetch(s,{method:"GET",headers:{"X-CSRFToken":t}});if(e.ok)return await e.json();console.error("failed to fetch recent"),console.error(e)}})();
`,vr=typeof self<"u"&&self.Blob&&new Blob([Xr],{type:"text/javascript;charset=utf-8"});function Tu(e){let n;try{if(n=vr&&(self.URL||self.webkitURL).createObjectURL(vr),!n)throw"";const t=new Worker(n,{name:e==null?void 0:e.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(n)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Xr),{name:e==null?void 0:e.name})}finally{n&&(self.URL||self.webkitURL).revokeObjectURL(n)}}const xu={__name:"MainCamera",setup(e){const n=ii(),t=kr(),i=ti(),c=ei(),o=Or(),d=new Su;new Mu;const f=new Tu,b=lt(new Date);console.log("last_updated:",b.value.toISOString()),d.onmessage=r=>{console.log(r.data)};let g,C,A,E;$n(()=>{g=setInterval(v,200),C=setInterval(N,400),A=setInterval(w,800),E=setInterval(l,4e3)}),gr(()=>{clearInterval(g),clearInterval(C),clearInterval(A),clearInterval(E)});function v(){const r=n.camera.position.x,P=n.camera.position.y,T=n.camera.position.z;i.getCollectiblesInRegion(r,P,T)}function N(){for(let r of i.collection_queue){const P=o.pullVoxelMesh(r.pk);P&&(t.dampening(.8),c.remove(P),i.claim_queue.push(r))}i.collection_queue=[]}async function w(){for(let r of i.claim_queue){const P=[r.pk,`${window.location.origin}/apiv1/claims/`,window.csrf_token];console.log("sending pk to claim_worker:",P),d.postMessage(P)}i.claim_queue=[]}async function l(){const r=new URLSearchParams({updated_since:b.value.toISOString()}),P=`${window.location.origin}/apiv1/voxels/recent/?${r}`,T=window.csrf_token,_=[P,T];console.log("sending recent refresh to recent_worker:",_),f.postMessage(_),f.onmessage=B=>{console.log("recent_worker message:",B.data);const L=B.data;for(const I of L){o.voxel_list.push(I);const G=o.drawVoxel(I.x,I.y,I.z,`#${I.color}`);c.add(G)}b.value=new Date}}return(r,P)=>(Qn(),Zn("div"))}},Au=Kn("light",()=>{const e=lt([]);function n(t,i,c){const f=new Lo(16777215,2);return f.position.set(t,i,c),e.value.push(f),f}return{createLight:n,light_list:e}}),Ru={__name:"MainScene",setup(e){const n=ei(),t=Au(),i=Or(),c=ti();$n(async()=>{await i.fetchVoxels(),c.buildHashMap(i.voxel_list),await i.drawVoxels(),o(),await d()});function o(){t.createLight(4,8,16),t.createLight(-4,8,16),t.createLight(0,50,-2)}async function d(){for(let f of t.light_list){const b=f.clone();n.add(b)}for(let f of i.voxel_mesh_list)n.add(f)}return(f,b)=>null}},Pu={__name:"GameView",setup(e){return(n,t)=>(Qn(),Zn("div",null,[An(Eu),An(xu),An(Ru)]))}};export{Pu as default};
