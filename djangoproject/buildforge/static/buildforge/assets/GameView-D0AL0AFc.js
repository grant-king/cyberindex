import{d as Zn,r as et,o as Qn,a as Sr,w as di,c as jn,b as Jn,e as ea,f as Rn}from"./index-BC4BI7_i.js";import{c as ta,S as na,N as Rt,V as ut,C as $e,F as Mr,M as qt,a as He,R as ia,W as Yt,b as nt,L as jt,H as gn,U as Nt,D as Tt,B as _t,d as tn,t as ra,e as aa,f as En,p as oa,w as Vt,g as sa,E as ca,h as st,P as Xt,A as la,i as bn,j as xt,k as mn,l as ei,m as nn,n as rn,o as Tr,q as fa,r as kt,s as _n,u as ua,v as da,x as Qt,O as pa,y as ha,z as ma,G as _a,I as va,J as ga,K as Ea,Q as Sa,T as Ma,X as Ta,Y as xa,Z as Aa,_ as Ra,$ as ba,a0 as Ca,a1 as Pa,a2 as La,a3 as wa,a4 as Cn,a5 as Wt,a6 as cn,a7 as Ua,a8 as en,a9 as Da,aa as Ia,ab as ya,ac as Na,ad as xr,ae as Oa,af as Fa,ag as Ba,ah as Ga,ai as Be,aj as Ha,ak as Va,al as ka,am as Ot,an as Ar,ao as dn,ap as At,aq as Rr,ar as yt,as as Mt,at as vn,au as br,av as Cr,aw as Pr,ax as Lr,ay as Wa,az as za,aA as Xa,aB as wr,aC as It,aD as qa,aE as Ya,aF as Ka,aG as $a,aH as Za,aI as Ur,aJ as Qa,aK as Dr,aL as Ir,aM as Pn,aN as Ln,aO as wn,aP as Un,aQ as qe,aR as pi,aS as hi,aT as mi,aU as _i,aV as vi,aW as gi,aX as Ei,aY as Si,aZ as Mi,a_ as Ti,a$ as xi,b0 as Ai,b1 as Ri,b2 as bi,b3 as Ci,b4 as Pi,b5 as Li,b6 as wi,b7 as Ui,b8 as Di,b9 as Ii,ba as Dn,bb as yi,bc as Ni,bd as ja,be as Oi,bf as Fi,bg as Bi,bh as Hn,bi as Vn,bj as kn,bk as Wn,bl as zn,bm as Xn,bn as qn,bo as pn,bp as Ja,bq as Gi,br as Hi,bs as Vi,bt as Yn,bu as Kn,bv as eo,bw as yr,bx as to,by as ft,bz as Sn,bA as no,bB as io,bC as Nr,bD as Or,bE as ki,bF as ti,bG as Wi,bH as Fr,bI as an,bJ as Kt,bK as ro,bL as ao,bM as oo,bN as so,bO as co,bP as zi,bQ as lo,bR as fo,bS as uo,bT as po,bU as ho,bV as mo,bW as _o,bX as vo,bY as go,bZ as Eo,b_ as So,b$ as Mo,c0 as To,c1 as xo,c2 as Ao,c3 as Ro,c4 as bo,c5 as Co,c6 as In,c7 as Po,c8 as Mn,c9 as ni,ca as Lo,cb as Br,cc as wo}from"./voxel-D6zeumKD.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gr(){let e=null,n=!1,t=null,i=null;function c(a,d){t(a,d),i=e.requestAnimationFrame(c)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(c),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function Uo(e){const n=new WeakMap;function t(f,E){const m=f.array,C=f.usage,R=m.byteLength,S=e.createBuffer();e.bindBuffer(E,S),e.bufferData(E,m,C),f.onUploadCallback();let A;if(m instanceof Float32Array)A=e.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?A=e.HALF_FLOAT:A=e.UNSIGNED_SHORT;else if(m instanceof Int16Array)A=e.SHORT;else if(m instanceof Uint32Array)A=e.UNSIGNED_INT;else if(m instanceof Int32Array)A=e.INT;else if(m instanceof Int8Array)A=e.BYTE;else if(m instanceof Uint8Array)A=e.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)A=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:A,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:R}}function i(f,E,m){const C=E.array,R=E.updateRanges;if(e.bindBuffer(m,f),R.length===0)e.bufferSubData(m,0,C);else{R.sort((A,N)=>A.start-N.start);let S=0;for(let A=1;A<R.length;A++){const N=R[S],L=R[A];L.start<=N.start+N.count+1?N.count=Math.max(N.count,L.start+L.count-N.start):(++S,R[S]=L)}R.length=S+1;for(let A=0,N=R.length;A<N;A++){const L=R[A];e.bufferSubData(m,L.start*C.BYTES_PER_ELEMENT,C,L.start,L.count)}E.clearUpdateRanges()}E.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const E=n.get(f);E&&(e.deleteBuffer(E.buffer),n.delete(f))}function d(f,E){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const C=n.get(f);(!C||C.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=n.get(f);if(m===void 0)n.set(f,t(f,E));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(m.buffer,f,E),m.version=f.version}}return{get:c,remove:a,update:d}}var Do=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Io=`#ifdef USE_ALPHAHASH
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
#endif`,yo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,No=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bo=`#ifdef USE_AOMAP
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
#endif`,Go=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ho=`#ifdef USE_BATCHING
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
#endif`,Vo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ko=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zo=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xo=`#ifdef USE_IRIDESCENCE
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
#endif`,qo=`#ifdef USE_BUMPMAP
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
#endif`,Ko=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$o=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,es=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ts=`#define PI 3.141592653589793
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
} // validated`,ns=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,is=`vec3 transformedNormal = objectNormal;
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
#endif`,rs=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,as=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,os=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ss=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cs="gl_FragColor = linearToOutputTexel( gl_FragColor );",ls=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fs=`#ifdef USE_ENVMAP
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
#endif`,us=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ds=`#ifdef USE_ENVMAP
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
#endif`,ps=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hs=`#ifdef USE_ENVMAP
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
#endif`,ms=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_s=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Es=`#ifdef USE_GRADIENTMAP
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
}`,Ss=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ms=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ts=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xs=`uniform bool receiveShadow;
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
#endif`,As=`#ifdef USE_ENVMAP
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
#endif`,Rs=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bs=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Ps=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ls=`PhysicalMaterial material;
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
#endif`,ws=`struct PhysicalMaterial {
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
}`,Us=`
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
#endif`,Ds=`#if defined( RE_IndirectDiffuse )
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
#endif`,Is=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ys=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ns=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Os=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fs=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bs=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gs=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vs=`#if defined( USE_POINTS_UV )
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
#endif`,ks=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ws=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zs=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qs=`#ifdef USE_MORPHNORMALS
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
#endif`,Ks=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$s=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zs=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,js=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Js=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ec=`#ifdef USE_NORMALMAP
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
#endif`,tc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ic=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ac=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_c=`float getShadowMask() {
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
}`,vc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gc=`#ifdef USE_SKINNING
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
#endif`,Ec=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sc=`#ifdef USE_SKINNING
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
#endif`,Mc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ac=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rc=`#ifdef USE_TRANSMISSION
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
#endif`,bc=`#ifdef USE_TRANSMISSION
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
#endif`,Pc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dc=`uniform sampler2D t2D;
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
}`,Ic=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yc=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fc=`#include <common>
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
}`,Bc=`#if DEPTH_PACKING == 3200
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
}`,Gc=`#define DISTANCE
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
}`,Hc=`#define DISTANCE
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
}`,Vc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wc=`uniform float scale;
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
}`,zc=`uniform vec3 diffuse;
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
}`,Xc=`#include <common>
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
}`,qc=`uniform vec3 diffuse;
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
}`,Kc=`#define LAMBERT
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
}`,$c=`#define MATCAP
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
}`,Zc=`#define MATCAP
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
}`,Qc=`#define NORMAL
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
}`,jc=`#define NORMAL
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
}`,Jc=`#define PHONG
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
}`,el=`#define PHONG
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
}`,tl=`#define STANDARD
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
}`,nl=`#define STANDARD
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
}`,il=`#define TOON
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
}`,rl=`#define TOON
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
}`,al=`uniform float size;
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
}`,ol=`uniform vec3 diffuse;
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
}`,sl=`#include <common>
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
}`,cl=`uniform vec3 color;
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
}`,ll=`uniform float rotation;
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
}`,fl=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:Do,alphahash_pars_fragment:Io,alphamap_fragment:yo,alphamap_pars_fragment:No,alphatest_fragment:Oo,alphatest_pars_fragment:Fo,aomap_fragment:Bo,aomap_pars_fragment:Go,batching_pars_vertex:Ho,batching_vertex:Vo,begin_vertex:ko,beginnormal_vertex:Wo,bsdfs:zo,iridescence_fragment:Xo,bumpmap_pars_fragment:qo,clipping_planes_fragment:Yo,clipping_planes_pars_fragment:Ko,clipping_planes_pars_vertex:$o,clipping_planes_vertex:Zo,color_fragment:Qo,color_pars_fragment:jo,color_pars_vertex:Jo,color_vertex:es,common:ts,cube_uv_reflection_fragment:ns,defaultnormal_vertex:is,displacementmap_pars_vertex:rs,displacementmap_vertex:as,emissivemap_fragment:os,emissivemap_pars_fragment:ss,colorspace_fragment:cs,colorspace_pars_fragment:ls,envmap_fragment:fs,envmap_common_pars_fragment:us,envmap_pars_fragment:ds,envmap_pars_vertex:ps,envmap_physical_pars_fragment:As,envmap_vertex:hs,fog_vertex:ms,fog_pars_vertex:_s,fog_fragment:vs,fog_pars_fragment:gs,gradientmap_pars_fragment:Es,lightmap_pars_fragment:Ss,lights_lambert_fragment:Ms,lights_lambert_pars_fragment:Ts,lights_pars_begin:xs,lights_toon_fragment:Rs,lights_toon_pars_fragment:bs,lights_phong_fragment:Cs,lights_phong_pars_fragment:Ps,lights_physical_fragment:Ls,lights_physical_pars_fragment:ws,lights_fragment_begin:Us,lights_fragment_maps:Ds,lights_fragment_end:Is,logdepthbuf_fragment:ys,logdepthbuf_pars_fragment:Ns,logdepthbuf_pars_vertex:Os,logdepthbuf_vertex:Fs,map_fragment:Bs,map_pars_fragment:Gs,map_particle_fragment:Hs,map_particle_pars_fragment:Vs,metalnessmap_fragment:ks,metalnessmap_pars_fragment:Ws,morphinstance_vertex:zs,morphcolor_vertex:Xs,morphnormal_vertex:qs,morphtarget_pars_vertex:Ys,morphtarget_vertex:Ks,normal_fragment_begin:$s,normal_fragment_maps:Zs,normal_pars_fragment:Qs,normal_pars_vertex:js,normal_vertex:Js,normalmap_pars_fragment:ec,clearcoat_normal_fragment_begin:tc,clearcoat_normal_fragment_maps:nc,clearcoat_pars_fragment:ic,iridescence_pars_fragment:rc,opaque_fragment:ac,packing:oc,premultiplied_alpha_fragment:sc,project_vertex:cc,dithering_fragment:lc,dithering_pars_fragment:fc,roughnessmap_fragment:uc,roughnessmap_pars_fragment:dc,shadowmap_pars_fragment:pc,shadowmap_pars_vertex:hc,shadowmap_vertex:mc,shadowmask_pars_fragment:_c,skinbase_vertex:vc,skinning_pars_vertex:gc,skinning_vertex:Ec,skinnormal_vertex:Sc,specularmap_fragment:Mc,specularmap_pars_fragment:Tc,tonemapping_fragment:xc,tonemapping_pars_fragment:Ac,transmission_fragment:Rc,transmission_pars_fragment:bc,uv_pars_fragment:Cc,uv_pars_vertex:Pc,uv_vertex:Lc,worldpos_vertex:wc,background_vert:Uc,background_frag:Dc,backgroundCube_vert:Ic,backgroundCube_frag:yc,cube_vert:Nc,cube_frag:Oc,depth_vert:Fc,depth_frag:Bc,distanceRGBA_vert:Gc,distanceRGBA_frag:Hc,equirect_vert:Vc,equirect_frag:kc,linedashed_vert:Wc,linedashed_frag:zc,meshbasic_vert:Xc,meshbasic_frag:qc,meshlambert_vert:Yc,meshlambert_frag:Kc,meshmatcap_vert:$c,meshmatcap_frag:Zc,meshnormal_vert:Qc,meshnormal_frag:jc,meshphong_vert:Jc,meshphong_frag:el,meshphysical_vert:tl,meshphysical_frag:nl,meshtoon_vert:il,meshtoon_frag:rl,points_vert:al,points_frag:ol,shadow_vert:sl,shadow_frag:cl,sprite_vert:ll,sprite_frag:fl},ee={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Et={basic:{uniforms:ft([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ft([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ft([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ft([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ft([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ft([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ft([ee.points,ee.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ft([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ft([ee.common,ee.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ft([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ft([ee.sprite,ee.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ft([ee.common,ee.displacementmap,{referencePosition:{value:new He},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ft([ee.lights,ee.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Et.physical={uniforms:ft([Et.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const ln={r:0,b:0,g:0},Pt=new ti,ul=new qt;function dl(e,n,t,i,c,a,d){const f=new $e(0);let E=a===!0?0:1,m,C,R=null,S=0,A=null;function N(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:n).get(_)),_}function L(v){let _=!1;const F=N(v);F===null?r(f,E):F&&F.isColor&&(r(F,1),_=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(v,_){const F=N(_);F&&(F.isCubeTexture||F.mapping===Sn)?(C===void 0&&(C=new At(new Or(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:ki(Et.backgroundCube.uniforms),vertexShader:Et.backgroundCube.vertexShader,fragmentShader:Et.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),C.geometry.deleteAttribute("normal"),C.geometry.deleteAttribute("uv"),C.onBeforeRender=function(P,y,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(C.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(C)),Pt.copy(_.backgroundRotation),Pt.x*=-1,Pt.y*=-1,Pt.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Pt.y*=-1,Pt.z*=-1),C.material.uniforms.envMap.value=F,C.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,C.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,C.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,C.material.uniforms.backgroundRotation.value.setFromMatrix4(ul.makeRotationFromEuler(Pt)),C.material.toneMapped=nt.getTransfer(F.colorSpace)!==qe,(R!==F||S!==F.version||A!==e.toneMapping)&&(C.material.needsUpdate=!0,R=F,S=F.version,A=e.toneMapping),C.layers.enableAll(),v.unshift(C,C.geometry,C.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new At(new Lr(2,2),new Ot({name:"BackgroundMaterial",uniforms:ki(Et.background.uniforms),vertexShader:Et.background.vertexShader,fragmentShader:Et.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=nt.getTransfer(F.colorSpace)!==qe,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(R!==F||S!==F.version||A!==e.toneMapping)&&(m.material.needsUpdate=!0,R=F,S=F.version,A=e.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function r(v,_){v.getRGB(ln,Nr(e)),i.buffers.color.setClear(ln.r,ln.g,ln.b,_,d)}function D(){C!==void 0&&(C.geometry.dispose(),C.material.dispose(),C=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(v,_=1){f.set(v),E=_,r(f,E)},getClearAlpha:function(){return E},setClearAlpha:function(v){E=v,r(f,E)},render:L,addToRenderList:l,dispose:D}}function pl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},c=S(null);let a=c,d=!1;function f(u,b,Y,H,q){let Q=!1;const k=R(H,Y,b);a!==k&&(a=k,m(a.object)),Q=A(u,H,Y,q),Q&&N(u,H,Y,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),(Q||d)&&(d=!1,_(u,b,Y,H),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function E(){return e.createVertexArray()}function m(u){return e.bindVertexArray(u)}function C(u){return e.deleteVertexArray(u)}function R(u,b,Y){const H=Y.wireframe===!0;let q=i[u.id];q===void 0&&(q={},i[u.id]=q);let Q=q[b.id];Q===void 0&&(Q={},q[b.id]=Q);let k=Q[H];return k===void 0&&(k=S(E()),Q[H]=k),k}function S(u){const b=[],Y=[],H=[];for(let q=0;q<t;q++)b[q]=0,Y[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:Y,attributeDivisors:H,object:u,attributes:{},index:null}}function A(u,b,Y,H){const q=a.attributes,Q=b.attributes;let k=0;const j=Y.getAttributes();for(const B in j)if(j[B].location>=0){const Ee=q[B];let be=Q[B];if(be===void 0&&(B==="instanceMatrix"&&u.instanceMatrix&&(be=u.instanceMatrix),B==="instanceColor"&&u.instanceColor&&(be=u.instanceColor)),Ee===void 0||Ee.attribute!==be||be&&Ee.data!==be.data)return!0;k++}return a.attributesNum!==k||a.index!==H}function N(u,b,Y,H){const q={},Q=b.attributes;let k=0;const j=Y.getAttributes();for(const B in j)if(j[B].location>=0){let Ee=Q[B];Ee===void 0&&(B==="instanceMatrix"&&u.instanceMatrix&&(Ee=u.instanceMatrix),B==="instanceColor"&&u.instanceColor&&(Ee=u.instanceColor));const be={};be.attribute=Ee,Ee&&Ee.data&&(be.data=Ee.data),q[B]=be,k++}a.attributes=q,a.attributesNum=k,a.index=H}function L(){const u=a.newAttributes;for(let b=0,Y=u.length;b<Y;b++)u[b]=0}function l(u){r(u,0)}function r(u,b){const Y=a.newAttributes,H=a.enabledAttributes,q=a.attributeDivisors;Y[u]=1,H[u]===0&&(e.enableVertexAttribArray(u),H[u]=1),q[u]!==b&&(e.vertexAttribDivisor(u,b),q[u]=b)}function D(){const u=a.newAttributes,b=a.enabledAttributes;for(let Y=0,H=b.length;Y<H;Y++)b[Y]!==u[Y]&&(e.disableVertexAttribArray(Y),b[Y]=0)}function v(u,b,Y,H,q,Q,k){k===!0?e.vertexAttribIPointer(u,b,Y,q,Q):e.vertexAttribPointer(u,b,Y,H,q,Q)}function _(u,b,Y,H){L();const q=H.attributes,Q=Y.getAttributes(),k=b.defaultAttributeValues;for(const j in Q){const B=Q[j];if(B.location>=0){let he=q[j];if(he===void 0&&(j==="instanceMatrix"&&u.instanceMatrix&&(he=u.instanceMatrix),j==="instanceColor"&&u.instanceColor&&(he=u.instanceColor)),he!==void 0){const Ee=he.normalized,be=he.itemSize,Oe=n.get(he);if(Oe===void 0)continue;const Ye=Oe.buffer,W=Oe.type,J=Oe.bytesPerElement,de=W===e.INT||W===e.UNSIGNED_INT||he.gpuType===wr;if(he.isInterleavedBufferAttribute){const ie=he.data,Me=ie.stride,Ge=he.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<B.locationSize;Te++)r(B.location+Te,ie.meshPerAttribute);u.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<B.locationSize;Te++)l(B.location+Te);e.bindBuffer(e.ARRAY_BUFFER,Ye);for(let Te=0;Te<B.locationSize;Te++)v(B.location+Te,be/B.locationSize,W,Ee,Me*J,(Ge+be/B.locationSize*Te)*J,de)}else{if(he.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)r(B.location+ie,he.meshPerAttribute);u.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ie=0;ie<B.locationSize;ie++)l(B.location+ie);e.bindBuffer(e.ARRAY_BUFFER,Ye);for(let ie=0;ie<B.locationSize;ie++)v(B.location+ie,be/B.locationSize,W,Ee,be*J,be/B.locationSize*ie*J,de)}}else if(k!==void 0){const Ee=k[j];if(Ee!==void 0)switch(Ee.length){case 2:e.vertexAttrib2fv(B.location,Ee);break;case 3:e.vertexAttrib3fv(B.location,Ee);break;case 4:e.vertexAttrib4fv(B.location,Ee);break;default:e.vertexAttrib1fv(B.location,Ee)}}}}D()}function F(){G();for(const u in i){const b=i[u];for(const Y in b){const H=b[Y];for(const q in H)C(H[q].object),delete H[q];delete b[Y]}delete i[u]}}function P(u){if(i[u.id]===void 0)return;const b=i[u.id];for(const Y in b){const H=b[Y];for(const q in H)C(H[q].object),delete H[q];delete b[Y]}delete i[u.id]}function y(u){for(const b in i){const Y=i[b];if(Y[u.id]===void 0)continue;const H=Y[u.id];for(const q in H)C(H[q].object),delete H[q];delete Y[u.id]}}function G(){h(),d=!0,a!==c&&(a=c,m(a.object))}function h(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:G,resetDefaultState:h,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:y,initAttributes:L,enableAttribute:l,disableUnusedAttributes:D}}function hl(e,n,t){let i;function c(m){i=m}function a(m,C){e.drawArrays(i,m,C),t.update(C,i,1)}function d(m,C,R){R!==0&&(e.drawArraysInstanced(i,m,C,R),t.update(C,i,R))}function f(m,C,R){if(R===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,m,0,C,0,R);let A=0;for(let N=0;N<R;N++)A+=C[N];t.update(A,i,1)}function E(m,C,R,S){if(R===0)return;const A=n.get("WEBGL_multi_draw");if(A===null)for(let N=0;N<m.length;N++)d(m[N],C[N],S[N]);else{A.multiDrawArraysInstancedWEBGL(i,m,0,C,0,S,0,R);let N=0;for(let L=0;L<R;L++)N+=C[L]*S[L];t.update(N,i,1)}}this.setMode=c,this.render=a,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=E}function ml(e,n,t,i){let c;function a(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const y=n.get("EXT_texture_filter_anisotropic");c=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(y){return!(y!==xt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(y){const G=y===gn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(y!==Nt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==It&&!G)}function E(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const C=E(m);C!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",C,"instead."),m=C);const R=t.logarithmicDepthBuffer===!0,S=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),A=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),N=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),r=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),F=N>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:E,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:R,reverseDepthBuffer:S,maxTextures:A,maxVertexTextures:N,maxTextureSize:L,maxCubemapSize:l,maxAttributes:r,maxVertexUniforms:D,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:F,maxSamples:P}}function _l(e){const n=this;let t=null,i=0,c=!1,a=!1;const d=new Ga,f=new Be,E={value:null,needsUpdate:!1};this.uniform=E,this.numPlanes=0,this.numIntersection=0,this.init=function(R,S){const A=R.length!==0||S||i!==0||c;return c=S,i=R.length,A},this.beginShadows=function(){a=!0,C(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(R,S){t=C(R,S,0)},this.setState=function(R,S,A){const N=R.clippingPlanes,L=R.clipIntersection,l=R.clipShadows,r=e.get(R);if(!c||N===null||N.length===0||a&&!l)a?C(null):m();else{const D=a?0:i,v=D*4;let _=r.clippingState||null;E.value=_,_=C(N,S,v,A);for(let F=0;F!==v;++F)_[F]=t[F];r.clippingState=_,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=D}};function m(){E.value!==t&&(E.value=t,E.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function C(R,S,A,N){const L=R!==null?R.length:0;let l=null;if(L!==0){if(l=E.value,N!==!0||l===null){const r=A+L*4,D=S.matrixWorldInverse;f.getNormalMatrix(D),(l===null||l.length<r)&&(l=new Float32Array(r));for(let v=0,_=A;v!==L;++v,_+=4)d.copy(R[v]).applyMatrix4(D,f),d.normal.toArray(l,_),l[_+3]=d.constant}E.value=l,E.needsUpdate=!0}return n.numPlanes=L,n.numIntersection=0,l}}function vl(e){let n=new WeakMap;function t(d,f){return f===Yn?d.mapping=an:f===Kn&&(d.mapping=Kt),d}function i(d){if(d&&d.isTexture){const f=d.mapping;if(f===Yn||f===Kn)if(n.has(d)){const E=n.get(d).texture;return t(E,d.mapping)}else{const E=d.image;if(E&&E.height>0){const m=new eo(E.height);return m.fromEquirectangularTexture(e,d),n.set(d,m),d.addEventListener("dispose",c),t(m.texture,d.mapping)}else return null}}return d}function c(d){const f=d.target;f.removeEventListener("dispose",c);const E=n.get(f);E!==void 0&&(n.delete(f),E.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const zt=4,Xi=[.125,.215,.35,.446,.526,.582],Dt=20,yn=new ro,qi=new $e;let Nn=null,On=0,Fn=0,Bn=!1;const Ut=(1+Math.sqrt(5))/2,Bt=1/Ut,Yi=[new He(-Ut,Bt,0),new He(Ut,Bt,0),new He(-Bt,0,Ut),new He(Bt,0,Ut),new He(0,Ut,-Bt),new He(0,Ut,Bt),new He(-1,1,-1),new He(1,1,-1),new He(-1,1,1),new He(1,1,1)];class Ki{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,c=100){Nn=this._renderer.getRenderTarget(),On=this._renderer.getActiveCubeFace(),Fn=this._renderer.getActiveMipmapLevel(),Bn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(n,i,c,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Nn,On,Fn),this._renderer.xr.enabled=Bn,n.scissorTest=!1,fn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===an||n.mapping===Kt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Nn=this._renderer.getRenderTarget(),On=this._renderer.getActiveCubeFace(),Fn=this._renderer.getActiveMipmapLevel(),Bn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:gn,format:xt,colorSpace:En,depthBuffer:!1},c=$i(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$i(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gl(a)),this._blurMaterial=El(a,n,t)}return c}_compileMaterial(n){const t=new At(this._lodPlanes[0],n);this._renderer.compile(t,yn)}_sceneToCubeUV(n,t,i,c){const f=new Xt(90,1,t,i),E=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],C=this._renderer,R=C.autoClear,S=C.toneMapping;C.getClearColor(qi),C.toneMapping=Rt,C.autoClear=!1;const A=new ao({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),N=new At(new Or,A);let L=!1;const l=n.background;l?l.isColor&&(A.color.copy(l),n.background=null,L=!0):(A.color.copy(qi),L=!0);for(let r=0;r<6;r++){const D=r%3;D===0?(f.up.set(0,E[r],0),f.lookAt(m[r],0,0)):D===1?(f.up.set(0,0,E[r]),f.lookAt(0,m[r],0)):(f.up.set(0,E[r],0),f.lookAt(0,0,m[r]));const v=this._cubeSize;fn(c,D*v,r>2?v:0,v,v),C.setRenderTarget(c),L&&C.render(N,f),C.render(n,f)}N.geometry.dispose(),N.material.dispose(),C.toneMapping=S,C.autoClear=R,n.background=l}_textureToCubeUV(n,t){const i=this._renderer,c=n.mapping===an||n.mapping===Kt;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qi()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zi());const a=c?this._cubemapMaterial:this._equirectMaterial,d=new At(this._lodPlanes[0],a),f=a.uniforms;f.envMap.value=n;const E=this._cubeSize;fn(t,0,0,3*E,2*E),i.setRenderTarget(t),i.render(d,yn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const c=this._lodPlanes.length;for(let a=1;a<c;a++){const d=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=Yi[(c-a-1)%Yi.length];this._blur(n,a-1,a,d,f)}t.autoClear=i}_blur(n,t,i,c,a){const d=this._pingPongRenderTarget;this._halfBlur(n,d,t,i,c,"latitudinal",a),this._halfBlur(d,n,i,i,c,"longitudinal",a)}_halfBlur(n,t,i,c,a,d,f){const E=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const C=3,R=new At(this._lodPlanes[c],m),S=m.uniforms,A=this._sizeLods[i]-1,N=isFinite(a)?Math.PI/(2*A):2*Math.PI/(2*Dt-1),L=a/N,l=isFinite(a)?1+Math.floor(C*L):Dt;l>Dt&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${Dt}`);const r=[];let D=0;for(let y=0;y<Dt;++y){const G=y/L,h=Math.exp(-G*G/2);r.push(h),y===0?D+=h:y<l&&(D+=2*h)}for(let y=0;y<r.length;y++)r[y]=r[y]/D;S.envMap.value=n.texture,S.samples.value=l,S.weights.value=r,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:v}=this;S.dTheta.value=N,S.mipInt.value=v-i;const _=this._sizeLods[c],F=3*_*(c>v-zt?c-v+zt:0),P=4*(this._cubeSize-_);fn(t,F,P,3*_,2*_),E.setRenderTarget(t),E.render(R,yn)}}function gl(e){const n=[],t=[],i=[];let c=e;const a=e-zt+1+Xi.length;for(let d=0;d<a;d++){const f=Math.pow(2,c);t.push(f);let E=1/f;d>e-zt?E=Xi[d-e+zt-1]:d===0&&(E=0),i.push(E);const m=1/(f-2),C=-m,R=1+m,S=[C,C,R,C,R,R,C,C,R,R,C,R],A=6,N=6,L=3,l=2,r=1,D=new Float32Array(L*N*A),v=new Float32Array(l*N*A),_=new Float32Array(r*N*A);for(let P=0;P<A;P++){const y=P%3*2/3-1,G=P>2?0:-1,h=[y,G,0,y+2/3,G,0,y+2/3,G+1,0,y,G,0,y+2/3,G+1,0,y,G+1,0];D.set(h,L*N*P),v.set(S,l*N*P);const u=[P,P,P,P,P,P];_.set(u,r*N*P)}const F=new Ar;F.setAttribute("position",new dn(D,L)),F.setAttribute("uv",new dn(v,l)),F.setAttribute("faceIndex",new dn(_,r)),n.push(F),c>zt&&c--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function $i(e,n,t){const i=new Yt(e,n,t);return i.texture.mapping=Sn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fn(e,n,t,i,c){e.viewport.set(n,t,i,c),e.scissor.set(n,t,i,c)}function El(e,n,t){const i=new Float32Array(Dt),c=new He(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Dt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:ii(),fragmentShader:`

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
		`,blending:yt,depthTest:!1,depthWrite:!1})}function Zi(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ii(),fragmentShader:`

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
		`,blending:yt,depthTest:!1,depthWrite:!1})}function Qi(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yt,depthTest:!1,depthWrite:!1})}function ii(){return`

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
	`}function Sl(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const E=f.mapping,m=E===Yn||E===Kn,C=E===an||E===Kt;if(m||C){let R=n.get(f);const S=R!==void 0?R.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new Ki(e)),R=m?t.fromEquirectangular(f,R):t.fromCubemap(f,R),R.texture.pmremVersion=f.pmremVersion,n.set(f,R),R.texture;if(R!==void 0)return R.texture;{const A=f.image;return m&&A&&A.height>0||C&&A&&c(A)?(t===null&&(t=new Ki(e)),R=m?t.fromEquirectangular(f):t.fromCubemap(f),R.texture.pmremVersion=f.pmremVersion,n.set(f,R),f.addEventListener("dispose",a),R.texture):null}}}return f}function c(f){let E=0;const m=6;for(let C=0;C<m;C++)f[C]!==void 0&&E++;return E===m}function a(f){const E=f.target;E.removeEventListener("dispose",a);const m=n.get(E);m!==void 0&&(n.delete(E),m.dispose())}function d(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:d}}function Ml(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let c;switch(i){case"WEBGL_depth_texture":c=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=e.getExtension(i)}return n[i]=c,c}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const c=t(i);return c===null&&Vt("THREE.WebGLRenderer: "+i+" extension not supported."),c}}}function Tl(e,n,t,i){const c={},a=new WeakMap;function d(R){const S=R.target;S.index!==null&&n.remove(S.index);for(const N in S.attributes)n.remove(S.attributes[N]);S.removeEventListener("dispose",d),delete c[S.id];const A=a.get(S);A&&(n.remove(A),a.delete(S)),i.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(R,S){return c[S.id]===!0||(S.addEventListener("dispose",d),c[S.id]=!0,t.memory.geometries++),S}function E(R){const S=R.attributes;for(const A in S)n.update(S[A],e.ARRAY_BUFFER)}function m(R){const S=[],A=R.index,N=R.attributes.position;let L=0;if(A!==null){const D=A.array;L=A.version;for(let v=0,_=D.length;v<_;v+=3){const F=D[v+0],P=D[v+1],y=D[v+2];S.push(F,P,P,y,y,F)}}else if(N!==void 0){const D=N.array;L=N.version;for(let v=0,_=D.length/3-1;v<_;v+=3){const F=v+0,P=v+1,y=v+2;S.push(F,P,P,y,y,F)}}else return;const l=new(co(S)?oo:so)(S,1);l.version=L;const r=a.get(R);r&&n.remove(r),a.set(R,l)}function C(R){const S=a.get(R);if(S){const A=R.index;A!==null&&S.version<A.version&&m(R)}else m(R);return a.get(R)}return{get:f,update:E,getWireframeAttribute:C}}function xl(e,n,t){let i;function c(S){i=S}let a,d;function f(S){a=S.type,d=S.bytesPerElement}function E(S,A){e.drawElements(i,A,a,S*d),t.update(A,i,1)}function m(S,A,N){N!==0&&(e.drawElementsInstanced(i,A,a,S*d,N),t.update(A,i,N))}function C(S,A,N){if(N===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,A,0,a,S,0,N);let l=0;for(let r=0;r<N;r++)l+=A[r];t.update(l,i,1)}function R(S,A,N,L){if(N===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let r=0;r<S.length;r++)m(S[r]/d,A[r],L[r]);else{l.multiDrawElementsInstancedWEBGL(i,A,0,a,S,0,L,0,N);let r=0;for(let D=0;D<N;D++)r+=A[D]*L[D];t.update(r,i,1)}}this.setMode=c,this.setIndex=f,this.render=E,this.renderInstances=m,this.renderMultiDraw=C,this.renderMultiDrawInstances=R}function Al(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,d,f){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=f*(a/3);break;case e.LINES:t.lines+=f*(a/2);break;case e.LINE_STRIP:t.lines+=f*(a-1);break;case e.LINE_LOOP:t.lines+=f*a;break;case e.POINTS:t.points+=f*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function c(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:c,update:i}}function Rl(e,n,t){const i=new WeakMap,c=new ut;function a(d,f,E){const m=d.morphTargetInfluences,C=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,R=C!==void 0?C.length:0;let S=i.get(f);if(S===void 0||S.count!==R){let h=function(){y.dispose(),i.delete(f),f.removeEventListener("dispose",h)};S!==void 0&&S.texture.dispose();const A=f.morphAttributes.position!==void 0,N=f.morphAttributes.normal!==void 0,L=f.morphAttributes.color!==void 0,l=f.morphAttributes.position||[],r=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let v=0;A===!0&&(v=1),N===!0&&(v=2),L===!0&&(v=3);let _=f.attributes.position.count*v,F=1;_>n.maxTextureSize&&(F=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const P=new Float32Array(_*F*4*R),y=new yr(P,_,F,R);y.type=It,y.needsUpdate=!0;const G=v*4;for(let u=0;u<R;u++){const b=l[u],Y=r[u],H=D[u],q=_*F*4*u;for(let Q=0;Q<b.count;Q++){const k=Q*G;A===!0&&(c.fromBufferAttribute(b,Q),P[q+k+0]=c.x,P[q+k+1]=c.y,P[q+k+2]=c.z,P[q+k+3]=0),N===!0&&(c.fromBufferAttribute(Y,Q),P[q+k+4]=c.x,P[q+k+5]=c.y,P[q+k+6]=c.z,P[q+k+7]=0),L===!0&&(c.fromBufferAttribute(H,Q),P[q+k+8]=c.x,P[q+k+9]=c.y,P[q+k+10]=c.z,P[q+k+11]=H.itemSize===4?c.w:1)}}S={count:R,texture:y,size:new st(_,F)},i.set(f,S),f.addEventListener("dispose",h)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)E.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let A=0;for(let L=0;L<m.length;L++)A+=m[L];const N=f.morphTargetsRelative?1:1-A;E.getUniforms().setValue(e,"morphTargetBaseInfluence",N),E.getUniforms().setValue(e,"morphTargetInfluences",m)}E.getUniforms().setValue(e,"morphTargetsTexture",S.texture,t),E.getUniforms().setValue(e,"morphTargetsTextureSize",S.size)}return{update:a}}function bl(e,n,t,i){let c=new WeakMap;function a(E){const m=i.render.frame,C=E.geometry,R=n.get(E,C);if(c.get(R)!==m&&(n.update(R),c.set(R,m)),E.isInstancedMesh&&(E.hasEventListener("dispose",f)===!1&&E.addEventListener("dispose",f),c.get(E)!==m&&(t.update(E.instanceMatrix,e.ARRAY_BUFFER),E.instanceColor!==null&&t.update(E.instanceColor,e.ARRAY_BUFFER),c.set(E,m))),E.isSkinnedMesh){const S=E.skeleton;c.get(S)!==m&&(S.update(),c.set(S,m))}return R}function d(){c=new WeakMap}function f(E){const m=E.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:a,dispose:d}}const Hr=new Pr,ji=new Tr(1,1),Vr=new yr,kr=new So,Wr=new Eo,Ji=[],er=[],tr=new Float32Array(16),nr=new Float32Array(9),ir=new Float32Array(4);function $t(e,n,t){const i=e[0];if(i<=0||i>0)return e;const c=n*t;let a=Ji[c];if(a===void 0&&(a=new Float32Array(c),Ji[c]=a),n!==0){i.toArray(a,0);for(let d=1,f=0;d!==n;++d)f+=t,e[d].toArray(a,f)}return a}function it(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function rt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Tn(e,n){let t=er[n];t===void 0&&(t=new Int32Array(n),er[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Cl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Pl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2fv(this.addr,n),rt(t,n)}}function Ll(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(it(t,n))return;e.uniform3fv(this.addr,n),rt(t,n)}}function wl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4fv(this.addr,n),rt(t,n)}}function Ul(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;ir.set(i),e.uniformMatrix2fv(this.addr,!1,ir),rt(t,i)}}function Dl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;nr.set(i),e.uniformMatrix3fv(this.addr,!1,nr),rt(t,i)}}function Il(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;tr.set(i),e.uniformMatrix4fv(this.addr,!1,tr),rt(t,i)}}function yl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Nl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2iv(this.addr,n),rt(t,n)}}function Ol(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3iv(this.addr,n),rt(t,n)}}function Fl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4iv(this.addr,n),rt(t,n)}}function Bl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Gl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2uiv(this.addr,n),rt(t,n)}}function Hl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3uiv(this.addr,n),rt(t,n)}}function Vl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4uiv(this.addr,n),rt(t,n)}}function kl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c);let a;this.type===e.SAMPLER_2D_SHADOW?(ji.compareFunction=xr,a=ji):a=Hr,t.setTexture2D(n||a,c)}function Wl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture3D(n||kr,c)}function zl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTextureCube(n||Wr,c)}function Xl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture2DArray(n||Vr,c)}function ql(e){switch(e){case 5126:return Cl;case 35664:return Pl;case 35665:return Ll;case 35666:return wl;case 35674:return Ul;case 35675:return Dl;case 35676:return Il;case 5124:case 35670:return yl;case 35667:case 35671:return Nl;case 35668:case 35672:return Ol;case 35669:case 35673:return Fl;case 5125:return Bl;case 36294:return Gl;case 36295:return Hl;case 36296:return Vl;case 35678:case 36198:case 36298:case 36306:case 35682:return kl;case 35679:case 36299:case 36307:return Wl;case 35680:case 36300:case 36308:case 36293:return zl;case 36289:case 36303:case 36311:case 36292:return Xl}}function Yl(e,n){e.uniform1fv(this.addr,n)}function Kl(e,n){const t=$t(n,this.size,2);e.uniform2fv(this.addr,t)}function $l(e,n){const t=$t(n,this.size,3);e.uniform3fv(this.addr,t)}function Zl(e,n){const t=$t(n,this.size,4);e.uniform4fv(this.addr,t)}function Ql(e,n){const t=$t(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function jl(e,n){const t=$t(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Jl(e,n){const t=$t(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function ef(e,n){e.uniform1iv(this.addr,n)}function tf(e,n){e.uniform2iv(this.addr,n)}function nf(e,n){e.uniform3iv(this.addr,n)}function rf(e,n){e.uniform4iv(this.addr,n)}function af(e,n){e.uniform1uiv(this.addr,n)}function of(e,n){e.uniform2uiv(this.addr,n)}function sf(e,n){e.uniform3uiv(this.addr,n)}function cf(e,n){e.uniform4uiv(this.addr,n)}function lf(e,n,t){const i=this.cache,c=n.length,a=Tn(t,c);it(i,a)||(e.uniform1iv(this.addr,a),rt(i,a));for(let d=0;d!==c;++d)t.setTexture2D(n[d]||Hr,a[d])}function ff(e,n,t){const i=this.cache,c=n.length,a=Tn(t,c);it(i,a)||(e.uniform1iv(this.addr,a),rt(i,a));for(let d=0;d!==c;++d)t.setTexture3D(n[d]||kr,a[d])}function uf(e,n,t){const i=this.cache,c=n.length,a=Tn(t,c);it(i,a)||(e.uniform1iv(this.addr,a),rt(i,a));for(let d=0;d!==c;++d)t.setTextureCube(n[d]||Wr,a[d])}function df(e,n,t){const i=this.cache,c=n.length,a=Tn(t,c);it(i,a)||(e.uniform1iv(this.addr,a),rt(i,a));for(let d=0;d!==c;++d)t.setTexture2DArray(n[d]||Vr,a[d])}function pf(e){switch(e){case 5126:return Yl;case 35664:return Kl;case 35665:return $l;case 35666:return Zl;case 35674:return Ql;case 35675:return jl;case 35676:return Jl;case 5124:case 35670:return ef;case 35667:case 35671:return tf;case 35668:case 35672:return nf;case 35669:case 35673:return rf;case 5125:return af;case 36294:return of;case 36295:return sf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return uf;case 36289:case 36303:case 36311:case 36292:return df}}class hf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ql(t.type)}}class mf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pf(t.type)}}class _f{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const c=this.seq;for(let a=0,d=c.length;a!==d;++a){const f=c[a];f.setValue(n,t[f.id],i)}}}const Gn=/(\w+)(\])?(\[|\.)?/g;function rr(e,n){e.seq.push(n),e.map[n.id]=n}function vf(e,n,t){const i=e.name,c=i.length;for(Gn.lastIndex=0;;){const a=Gn.exec(i),d=Gn.lastIndex;let f=a[1];const E=a[2]==="]",m=a[3];if(E&&(f=f|0),m===void 0||m==="["&&d+2===c){rr(t,m===void 0?new hf(f,e,n):new mf(f,e,n));break}else{let R=t.map[f];R===void 0&&(R=new _f(f),rr(t,R)),t=R}}}class hn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const a=n.getActiveUniform(t,c),d=n.getUniformLocation(t,a.name);vf(a,d,this)}}setValue(n,t,i,c){const a=this.map[t];a!==void 0&&a.setValue(n,i,c)}setOptional(n,t,i){const c=t[i];c!==void 0&&this.setValue(n,i,c)}static upload(n,t,i,c){for(let a=0,d=t.length;a!==d;++a){const f=t[a],E=i[f.id];E.needsUpdate!==!1&&f.setValue(n,E.value,c)}}static seqWithValue(n,t){const i=[];for(let c=0,a=n.length;c!==a;++c){const d=n[c];d.id in t&&i.push(d)}return i}}function ar(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const gf=37297;let Ef=0;function Sf(e,n){const t=e.split(`
`),i=[],c=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let d=c;d<a;d++){const f=d+1;i.push(`${f===n?">":" "} ${f}: ${t[d]}`)}return i.join(`
`)}const or=new Be;function Mf(e){nt._getMatrix(or,nt.workingColorSpace,e);const n=`mat3( ${or.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(e)){case Fr:return[n,"LinearTransferOETF"];case qe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function sr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),c=e.getShaderInfoLog(n).trim();if(i&&c==="")return"";const a=/ERROR: 0:(\d+)/.exec(c);if(a){const d=parseInt(a[1]);return t.toUpperCase()+`

`+c+`

`+Sf(e.getShaderSource(n),d)}else return c}function Tf(e,n){const t=Mf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xf(e,n){let t;switch(n){case go:t="Linear";break;case vo:t="Reinhard";break;case _o:t="Cineon";break;case mo:t="ACESFilmic";break;case ho:t="AgX";break;case po:t="Neutral";break;case uo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const un=new He;function Af(){nt.getLuminanceCoefficients(un);const e=un.x.toFixed(4),n=un.y.toFixed(4),t=un.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jt).join(`
`)}function bf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Cf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let c=0;c<i;c++){const a=e.getActiveAttrib(n,c),d=a.name;let f=1;a.type===e.FLOAT_MAT2&&(f=2),a.type===e.FLOAT_MAT3&&(f=3),a.type===e.FLOAT_MAT4&&(f=4),t[d]={type:a.type,location:e.getAttribLocation(n,d),locationSize:f}}return t}function Jt(e){return e!==""}function cr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function lr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function $n(e){return e.replace(Pf,wf)}const Lf=new Map;function wf(e,n){let t=Le[n];if(t===void 0){const i=Lf.get(n);if(i!==void 0)t=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return $n(t)}const Uf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fr(e){return e.replace(Uf,Df)}function Df(e,n,t,i){let c="";for(let a=parseInt(n);a<parseInt(t);a++)c+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return c}function ur(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function If(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Rr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===fo?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Mt&&(n="SHADOWMAP_TYPE_VSM"),n}function yf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case an:case Kt:n="ENVMAP_TYPE_CUBE";break;case Sn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Nf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Kt:n="ENVMAP_MODE_REFRACTION";break}return n}function Of(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ao:n="ENVMAP_BLENDING_MULTIPLY";break;case xo:n="ENVMAP_BLENDING_MIX";break;case To:n="ENVMAP_BLENDING_ADD";break}return n}function Ff(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Bf(e,n,t,i){const c=e.getContext(),a=t.defines;let d=t.vertexShader,f=t.fragmentShader;const E=If(t),m=yf(t),C=Nf(t),R=Of(t),S=Ff(t),A=Rf(t),N=bf(a),L=c.createProgram();let l,r,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Jt).join(`
`),l.length>0&&(l+=`
`),r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Jt).join(`
`),r.length>0&&(r+=`
`)):(l=[ur(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+C:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+E:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jt).join(`
`),r=[ur(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+C:"",t.envMap?"#define "+R:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+E:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rt?"#define TONE_MAPPING":"",t.toneMapping!==Rt?Le.tonemapping_pars_fragment:"",t.toneMapping!==Rt?xf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Tf("linearToOutputTexel",t.outputColorSpace),Af(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jt).join(`
`)),d=$n(d),d=cr(d,t),d=lr(d,t),f=$n(f),f=cr(f,t),f=lr(f,t),d=fr(d),f=fr(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,l=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,r=["#define varying in",t.glslVersion===zi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const v=D+l+d,_=D+r+f,F=ar(c,c.VERTEX_SHADER,v),P=ar(c,c.FRAGMENT_SHADER,_);c.attachShader(L,F),c.attachShader(L,P),t.index0AttributeName!==void 0?c.bindAttribLocation(L,0,t.index0AttributeName):t.morphTargets===!0&&c.bindAttribLocation(L,0,"position"),c.linkProgram(L);function y(b){if(e.debug.checkShaderErrors){const Y=c.getProgramInfoLog(L).trim(),H=c.getShaderInfoLog(F).trim(),q=c.getShaderInfoLog(P).trim();let Q=!0,k=!0;if(c.getProgramParameter(L,c.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,L,F,P);else{const j=sr(c,F,"vertex"),B=sr(c,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(L,c.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+Y+`
`+j+`
`+B)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(H===""||q==="")&&(k=!1);k&&(b.diagnostics={runnable:Q,programLog:Y,vertexShader:{log:H,prefix:l},fragmentShader:{log:q,prefix:r}})}c.deleteShader(F),c.deleteShader(P),G=new hn(c,L),h=Cf(c,L)}let G;this.getUniforms=function(){return G===void 0&&y(this),G};let h;this.getAttributes=function(){return h===void 0&&y(this),h};let u=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=c.getProgramParameter(L,gf)),u},this.destroy=function(){i.releaseStatesOfProgram(this),c.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ef++,this.cacheKey=n,this.usedTimes=1,this.program=L,this.vertexShader=F,this.fragmentShader=P,this}let Gf=0;class Hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,c=this._getShaderStage(t),a=this._getShaderStage(i),d=this._getShaderCacheForMaterial(n);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(a)===!1&&(d.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Vf(n),t.set(n,i)),i}}class Vf{constructor(n){this.id=Gf++,this.code=n,this.usedTimes=0}}function kf(e,n,t,i,c,a,d){const f=new lo,E=new Hf,m=new Set,C=[],R=c.logarithmicDepthBuffer,S=c.vertexTextures;let A=c.precision;const N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(h){return m.add(h),h===0?"uv":`uv${h}`}function l(h,u,b,Y,H){const q=Y.fog,Q=H.geometry,k=h.isMeshStandardMaterial?Y.environment:null,j=(h.isMeshStandardMaterial?t:n).get(h.envMap||k),B=j&&j.mapping===Sn?j.image.height:null,he=N[h.type];h.precision!==null&&(A=c.getMaxPrecision(h.precision),A!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",A,"instead."));const Ee=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,be=Ee!==void 0?Ee.length:0;let Oe=0;Q.morphAttributes.position!==void 0&&(Oe=1),Q.morphAttributes.normal!==void 0&&(Oe=2),Q.morphAttributes.color!==void 0&&(Oe=3);let Ye,W,J,de;if(he){const We=Et[he];Ye=We.vertexShader,W=We.fragmentShader}else Ye=h.vertexShader,W=h.fragmentShader,E.update(h),J=E.getVertexShaderID(h),de=E.getFragmentShaderID(h);const ie=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),Ge=H.isInstancedMesh===!0,Te=H.isBatchedMesh===!0,Je=!!h.map,Ze=!!h.matcap,we=!!j,g=!!h.aoMap,pt=!!h.lightMap,Ue=!!h.bumpMap,De=!!h.normalMap,_e=!!h.displacementMap,Xe=!!h.emissiveMap,me=!!h.metalnessMap,p=!!h.roughnessMap,o=h.anisotropy>0,w=h.clearcoat>0,z=h.dispersion>0,K=h.iridescence>0,V=h.sheen>0,pe=h.transmission>0,re=o&&!!h.anisotropyMap,ce=w&&!!h.clearcoatMap,ye=w&&!!h.clearcoatNormalMap,Z=w&&!!h.clearcoatRoughnessMap,le=K&&!!h.iridescenceMap,Se=K&&!!h.iridescenceThicknessMap,xe=V&&!!h.sheenColorMap,fe=V&&!!h.sheenRoughnessMap,Ie=!!h.specularMap,Pe=!!h.specularColorMap,ze=!!h.specularIntensityMap,M=pe&&!!h.transmissionMap,te=pe&&!!h.thicknessMap,O=!!h.gradientMap,X=!!h.alphaMap,oe=h.alphaTest>0,ae=!!h.alphaHash,Ce=!!h.extensions;let Qe=Rt;h.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Qe=e.toneMapping);const ot={shaderID:he,shaderType:h.type,shaderName:h.name,vertexShader:Ye,fragmentShader:W,defines:h.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:A,batching:Te,batchingColor:Te&&H._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&H.instanceColor!==null,instancingMorph:Ge&&H.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ie===null?e.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:En,alphaToCoverage:!!h.alphaToCoverage,map:Je,matcap:Ze,envMap:we,envMapMode:we&&j.mapping,envMapCubeUVHeight:B,aoMap:g,lightMap:pt,bumpMap:Ue,normalMap:De,displacementMap:S&&_e,emissiveMap:Xe,normalMapObjectSpace:De&&h.normalMapType===io,normalMapTangentSpace:De&&h.normalMapType===no,metalnessMap:me,roughnessMap:p,anisotropy:o,anisotropyMap:re,clearcoat:w,clearcoatMap:ce,clearcoatNormalMap:ye,clearcoatRoughnessMap:Z,dispersion:z,iridescence:K,iridescenceMap:le,iridescenceThicknessMap:Se,sheen:V,sheenColorMap:xe,sheenRoughnessMap:fe,specularMap:Ie,specularColorMap:Pe,specularIntensityMap:ze,transmission:pe,transmissionMap:M,thicknessMap:te,gradientMap:O,opaque:h.transparent===!1&&h.blending===pn&&h.alphaToCoverage===!1,alphaMap:X,alphaTest:oe,alphaHash:ae,combine:h.combine,mapUv:Je&&L(h.map.channel),aoMapUv:g&&L(h.aoMap.channel),lightMapUv:pt&&L(h.lightMap.channel),bumpMapUv:Ue&&L(h.bumpMap.channel),normalMapUv:De&&L(h.normalMap.channel),displacementMapUv:_e&&L(h.displacementMap.channel),emissiveMapUv:Xe&&L(h.emissiveMap.channel),metalnessMapUv:me&&L(h.metalnessMap.channel),roughnessMapUv:p&&L(h.roughnessMap.channel),anisotropyMapUv:re&&L(h.anisotropyMap.channel),clearcoatMapUv:ce&&L(h.clearcoatMap.channel),clearcoatNormalMapUv:ye&&L(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&L(h.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&L(h.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&L(h.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&L(h.sheenColorMap.channel),sheenRoughnessMapUv:fe&&L(h.sheenRoughnessMap.channel),specularMapUv:Ie&&L(h.specularMap.channel),specularColorMapUv:Pe&&L(h.specularColorMap.channel),specularIntensityMapUv:ze&&L(h.specularIntensityMap.channel),transmissionMapUv:M&&L(h.transmissionMap.channel),thicknessMapUv:te&&L(h.thicknessMap.channel),alphaMapUv:X&&L(h.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(De||o),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Je||X),fog:!!q,useFog:h.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:h.flatShading===!0,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:R,reverseDepthBuffer:Me,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Oe,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&b.length>0,shadowMapType:e.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Je&&h.map.isVideoTexture===!0&&nt.getTransfer(h.map.colorSpace)===qe,decodeVideoTextureEmissive:Xe&&h.emissiveMap.isVideoTexture===!0&&nt.getTransfer(h.emissiveMap.colorSpace)===qe,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===Tt,flipSided:h.side===_t,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:Ce&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&h.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return ot.vertexUv1s=m.has(1),ot.vertexUv2s=m.has(2),ot.vertexUv3s=m.has(3),m.clear(),ot}function r(h){const u=[];if(h.shaderID?u.push(h.shaderID):(u.push(h.customVertexShaderID),u.push(h.customFragmentShaderID)),h.defines!==void 0)for(const b in h.defines)u.push(b),u.push(h.defines[b]);return h.isRawShaderMaterial===!1&&(D(u,h),v(u,h),u.push(e.outputColorSpace)),u.push(h.customProgramCacheKey),u.join()}function D(h,u){h.push(u.precision),h.push(u.outputColorSpace),h.push(u.envMapMode),h.push(u.envMapCubeUVHeight),h.push(u.mapUv),h.push(u.alphaMapUv),h.push(u.lightMapUv),h.push(u.aoMapUv),h.push(u.bumpMapUv),h.push(u.normalMapUv),h.push(u.displacementMapUv),h.push(u.emissiveMapUv),h.push(u.metalnessMapUv),h.push(u.roughnessMapUv),h.push(u.anisotropyMapUv),h.push(u.clearcoatMapUv),h.push(u.clearcoatNormalMapUv),h.push(u.clearcoatRoughnessMapUv),h.push(u.iridescenceMapUv),h.push(u.iridescenceThicknessMapUv),h.push(u.sheenColorMapUv),h.push(u.sheenRoughnessMapUv),h.push(u.specularMapUv),h.push(u.specularColorMapUv),h.push(u.specularIntensityMapUv),h.push(u.transmissionMapUv),h.push(u.thicknessMapUv),h.push(u.combine),h.push(u.fogExp2),h.push(u.sizeAttenuation),h.push(u.morphTargetsCount),h.push(u.morphAttributeCount),h.push(u.numDirLights),h.push(u.numPointLights),h.push(u.numSpotLights),h.push(u.numSpotLightMaps),h.push(u.numHemiLights),h.push(u.numRectAreaLights),h.push(u.numDirLightShadows),h.push(u.numPointLightShadows),h.push(u.numSpotLightShadows),h.push(u.numSpotLightShadowsWithMaps),h.push(u.numLightProbes),h.push(u.shadowMapType),h.push(u.toneMapping),h.push(u.numClippingPlanes),h.push(u.numClipIntersection),h.push(u.depthPacking)}function v(h,u){f.disableAll(),u.supportsVertexTextures&&f.enable(0),u.instancing&&f.enable(1),u.instancingColor&&f.enable(2),u.instancingMorph&&f.enable(3),u.matcap&&f.enable(4),u.envMap&&f.enable(5),u.normalMapObjectSpace&&f.enable(6),u.normalMapTangentSpace&&f.enable(7),u.clearcoat&&f.enable(8),u.iridescence&&f.enable(9),u.alphaTest&&f.enable(10),u.vertexColors&&f.enable(11),u.vertexAlphas&&f.enable(12),u.vertexUv1s&&f.enable(13),u.vertexUv2s&&f.enable(14),u.vertexUv3s&&f.enable(15),u.vertexTangents&&f.enable(16),u.anisotropy&&f.enable(17),u.alphaHash&&f.enable(18),u.batching&&f.enable(19),u.dispersion&&f.enable(20),u.batchingColor&&f.enable(21),h.push(f.mask),f.disableAll(),u.fog&&f.enable(0),u.useFog&&f.enable(1),u.flatShading&&f.enable(2),u.logarithmicDepthBuffer&&f.enable(3),u.reverseDepthBuffer&&f.enable(4),u.skinning&&f.enable(5),u.morphTargets&&f.enable(6),u.morphNormals&&f.enable(7),u.morphColors&&f.enable(8),u.premultipliedAlpha&&f.enable(9),u.shadowMapEnabled&&f.enable(10),u.doubleSided&&f.enable(11),u.flipSided&&f.enable(12),u.useDepthPacking&&f.enable(13),u.dithering&&f.enable(14),u.transmission&&f.enable(15),u.sheen&&f.enable(16),u.opaque&&f.enable(17),u.pointsUvs&&f.enable(18),u.decodeVideoTexture&&f.enable(19),u.decodeVideoTextureEmissive&&f.enable(20),u.alphaToCoverage&&f.enable(21),h.push(f.mask)}function _(h){const u=N[h.type];let b;if(u){const Y=Et[u];b=to.clone(Y.uniforms)}else b=h.uniforms;return b}function F(h,u){let b;for(let Y=0,H=C.length;Y<H;Y++){const q=C[Y];if(q.cacheKey===u){b=q,++b.usedTimes;break}}return b===void 0&&(b=new Bf(e,u,h,a),C.push(b)),b}function P(h){if(--h.usedTimes===0){const u=C.indexOf(h);C[u]=C[C.length-1],C.pop(),h.destroy()}}function y(h){E.remove(h)}function G(){E.dispose()}return{getParameters:l,getProgramCacheKey:r,getUniforms:_,acquireProgram:F,releaseProgram:P,releaseShaderCache:y,programs:C,dispose:G}}function Wf(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let f=e.get(d);return f===void 0&&(f={},e.set(d,f)),f}function i(d){e.delete(d)}function c(d,f,E){e.get(d)[f]=E}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:c,dispose:a}}function zf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function dr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function pr(){const e=[];let n=0;const t=[],i=[],c=[];function a(){n=0,t.length=0,i.length=0,c.length=0}function d(R,S,A,N,L,l){let r=e[n];return r===void 0?(r={id:R.id,object:R,geometry:S,material:A,groupOrder:N,renderOrder:R.renderOrder,z:L,group:l},e[n]=r):(r.id=R.id,r.object=R,r.geometry=S,r.material=A,r.groupOrder=N,r.renderOrder=R.renderOrder,r.z=L,r.group=l),n++,r}function f(R,S,A,N,L,l){const r=d(R,S,A,N,L,l);A.transmission>0?i.push(r):A.transparent===!0?c.push(r):t.push(r)}function E(R,S,A,N,L,l){const r=d(R,S,A,N,L,l);A.transmission>0?i.unshift(r):A.transparent===!0?c.unshift(r):t.unshift(r)}function m(R,S){t.length>1&&t.sort(R||zf),i.length>1&&i.sort(S||dr),c.length>1&&c.sort(S||dr)}function C(){for(let R=n,S=e.length;R<S;R++){const A=e[R];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:i,transparent:c,init:a,push:f,unshift:E,finish:C,sort:m}}function Xf(){let e=new WeakMap;function n(i,c){const a=e.get(i);let d;return a===void 0?(d=new pr,e.set(i,[d])):c>=a.length?(d=new pr,a.push(d)):d=a[c],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function qf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new He,color:new $e};break;case"SpotLight":t={position:new He,direction:new He,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new He,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new He,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new He,halfWidth:new He,halfHeight:new He};break}return e[n.id]=t,t}}}function Yf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Kf=0;function $f(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Zf(e){const n=new qf,t=Yf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)i.probe.push(new He);const c=new He,a=new qt,d=new qt;function f(m){let C=0,R=0,S=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let A=0,N=0,L=0,l=0,r=0,D=0,v=0,_=0,F=0,P=0,y=0;m.sort($f);for(let h=0,u=m.length;h<u;h++){const b=m[h],Y=b.color,H=b.intensity,q=b.distance,Q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)C+=Y.r*H,R+=Y.g*H,S+=Y.b*H;else if(b.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(b.sh.coefficients[k],H);y++}else if(b.isDirectionalLight){const k=n.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const j=b.shadow,B=t.get(b);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.directionalShadow[A]=B,i.directionalShadowMap[A]=Q,i.directionalShadowMatrix[A]=b.shadow.matrix,D++}i.directional[A]=k,A++}else if(b.isSpotLight){const k=n.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(Y).multiplyScalar(H),k.distance=q,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,i.spot[L]=k;const j=b.shadow;if(b.map&&(i.spotLightMap[F]=b.map,F++,j.updateMatrices(b),b.castShadow&&P++),i.spotLightMatrix[L]=j.matrix,b.castShadow){const B=t.get(b);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.spotShadow[L]=B,i.spotShadowMap[L]=Q,_++}L++}else if(b.isRectAreaLight){const k=n.get(b);k.color.copy(Y).multiplyScalar(H),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),i.rectArea[l]=k,l++}else if(b.isPointLight){const k=n.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){const j=b.shadow,B=t.get(b);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,i.pointShadow[N]=B,i.pointShadowMap[N]=Q,i.pointShadowMatrix[N]=b.shadow.matrix,v++}i.point[N]=k,N++}else if(b.isHemisphereLight){const k=n.get(b);k.skyColor.copy(b.color).multiplyScalar(H),k.groundColor.copy(b.groundColor).multiplyScalar(H),i.hemi[r]=k,r++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=C,i.ambient[1]=R,i.ambient[2]=S;const G=i.hash;(G.directionalLength!==A||G.pointLength!==N||G.spotLength!==L||G.rectAreaLength!==l||G.hemiLength!==r||G.numDirectionalShadows!==D||G.numPointShadows!==v||G.numSpotShadows!==_||G.numSpotMaps!==F||G.numLightProbes!==y)&&(i.directional.length=A,i.spot.length=L,i.rectArea.length=l,i.point.length=N,i.hemi.length=r,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+F-P,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=y,G.directionalLength=A,G.pointLength=N,G.spotLength=L,G.rectAreaLength=l,G.hemiLength=r,G.numDirectionalShadows=D,G.numPointShadows=v,G.numSpotShadows=_,G.numSpotMaps=F,G.numLightProbes=y,i.version=Kf++)}function E(m,C){let R=0,S=0,A=0,N=0,L=0;const l=C.matrixWorldInverse;for(let r=0,D=m.length;r<D;r++){const v=m[r];if(v.isDirectionalLight){const _=i.directional[R];_.direction.setFromMatrixPosition(v.matrixWorld),c.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(c),_.direction.transformDirection(l),R++}else if(v.isSpotLight){const _=i.spot[A];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(l),_.direction.setFromMatrixPosition(v.matrixWorld),c.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(c),_.direction.transformDirection(l),A++}else if(v.isRectAreaLight){const _=i.rectArea[N];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(l),d.identity(),a.copy(v.matrixWorld),a.premultiply(l),d.extractRotation(a),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(d),_.halfHeight.applyMatrix4(d),N++}else if(v.isPointLight){const _=i.point[S];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(l),S++}else if(v.isHemisphereLight){const _=i.hemi[L];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(l),L++}}}return{setup:f,setupView:E,state:i}}function hr(e){const n=new Zf(e),t=[],i=[];function c(C){m.camera=C,t.length=0,i.length=0}function a(C){t.push(C)}function d(C){i.push(C)}function f(){n.setup(t)}function E(C){n.setupView(t,C)}const m={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:m,setupLights:f,setupLightsView:E,pushLight:a,pushShadow:d}}function Qf(e){let n=new WeakMap;function t(c,a=0){const d=n.get(c);let f;return d===void 0?(f=new hr(e),n.set(c,[f])):a>=d.length?(f=new hr(e),d.push(f)):f=d[a],f}function i(){n=new WeakMap}return{get:t,dispose:i}}const jf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jf=`uniform sampler2D shadow_pass;
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
}`;function eu(e,n,t){let i=new Mr;const c=new st,a=new st,d=new ut,f=new Ha({depthPacking:Va}),E=new ka,m={},C=t.maxTextureSize,R={[tn]:_t,[_t]:tn,[Tt]:Tt},S=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:jf,fragmentShader:Jf}),A=S.clone();A.defines.HORIZONTAL_PASS=1;const N=new Ar;N.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new At(N,S),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let r=this.type;this.render=function(P,y,G){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||P.length===0)return;const h=e.getRenderTarget(),u=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),Y=e.state;Y.setBlending(yt),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const H=r!==Mt&&this.type===Mt,q=r===Mt&&this.type!==Mt;for(let Q=0,k=P.length;Q<k;Q++){const j=P[Q],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;c.copy(B.mapSize);const he=B.getFrameExtents();if(c.multiply(he),a.copy(B.mapSize),(c.x>C||c.y>C)&&(c.x>C&&(a.x=Math.floor(C/he.x),c.x=a.x*he.x,B.mapSize.x=a.x),c.y>C&&(a.y=Math.floor(C/he.y),c.y=a.y*he.y,B.mapSize.y=a.y)),B.map===null||H===!0||q===!0){const be=this.type!==Mt?{minFilter:en,magFilter:en}:{};B.map!==null&&B.map.dispose(),B.map=new Yt(c.x,c.y,be),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const Ee=B.getViewportCount();for(let be=0;be<Ee;be++){const Oe=B.getViewport(be);d.set(a.x*Oe.x,a.y*Oe.y,a.x*Oe.z,a.y*Oe.w),Y.viewport(d),B.updateMatrices(j,be),i=B.getFrustum(),_(y,G,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===Mt&&D(B,G),B.needsUpdate=!1}r=this.type,l.needsUpdate=!1,e.setRenderTarget(h,u,b)};function D(P,y){const G=n.update(L);S.defines.VSM_SAMPLES!==P.blurSamples&&(S.defines.VSM_SAMPLES=P.blurSamples,A.defines.VSM_SAMPLES=P.blurSamples,S.needsUpdate=!0,A.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Yt(c.x,c.y)),S.uniforms.shadow_pass.value=P.map.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(y,null,G,S,L,null),A.uniforms.shadow_pass.value=P.mapPass.texture,A.uniforms.resolution.value=P.mapSize,A.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(y,null,G,A,L,null)}function v(P,y,G,h){let u=null;const b=G.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)u=b;else if(u=G.isPointLight===!0?E:f,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const Y=u.uuid,H=y.uuid;let q=m[Y];q===void 0&&(q={},m[Y]=q);let Q=q[H];Q===void 0&&(Q=u.clone(),q[H]=Q,y.addEventListener("dispose",F)),u=Q}if(u.visible=y.visible,u.wireframe=y.wireframe,h===Mt?u.side=y.shadowSide!==null?y.shadowSide:y.side:u.side=y.shadowSide!==null?y.shadowSide:R[y.side],u.alphaMap=y.alphaMap,u.alphaTest=y.alphaTest,u.map=y.map,u.clipShadows=y.clipShadows,u.clippingPlanes=y.clippingPlanes,u.clipIntersection=y.clipIntersection,u.displacementMap=y.displacementMap,u.displacementScale=y.displacementScale,u.displacementBias=y.displacementBias,u.wireframeLinewidth=y.wireframeLinewidth,u.linewidth=y.linewidth,G.isPointLight===!0&&u.isMeshDistanceMaterial===!0){const Y=e.properties.get(u);Y.light=G}return u}function _(P,y,G,h,u){if(P.visible===!1)return;if(P.layers.test(y.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&u===Mt)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld);const H=n.update(P),q=P.material;if(Array.isArray(q)){const Q=H.groups;for(let k=0,j=Q.length;k<j;k++){const B=Q[k],he=q[B.materialIndex];if(he&&he.visible){const Ee=v(P,he,h,u);P.onBeforeShadow(e,P,y,G,H,Ee,B),e.renderBufferDirect(G,null,H,Ee,P,B),P.onAfterShadow(e,P,y,G,H,Ee,B)}}}else if(q.visible){const Q=v(P,q,h,u);P.onBeforeShadow(e,P,y,G,H,Q,null),e.renderBufferDirect(G,null,H,Q,P,null),P.onAfterShadow(e,P,y,G,H,Q,null)}}const Y=P.children;for(let H=0,q=Y.length;H<q;H++)_(Y[H],y,G,h,u)}function F(P){P.target.removeEventListener("dispose",F);for(const G in m){const h=m[G],u=P.target.uuid;u in h&&(h[u].dispose(),delete h[u])}}}const tu={[qn]:Xn,[zn]:Vn,[Wn]:Hn,[_n]:kn,[Xn]:qn,[Vn]:zn,[Hn]:Wn,[kn]:_n};function nu(e,n){function t(){let M=!1;const te=new ut;let O=null;const X=new ut(0,0,0,0);return{setMask:function(oe){O!==oe&&!M&&(e.colorMask(oe,oe,oe,oe),O=oe)},setLocked:function(oe){M=oe},setClear:function(oe,ae,Ce,Qe,ot){ot===!0&&(oe*=Qe,ae*=Qe,Ce*=Qe),te.set(oe,ae,Ce,Qe),X.equals(te)===!1&&(e.clearColor(oe,ae,Ce,Qe),X.copy(te))},reset:function(){M=!1,O=null,X.set(-1,0,0,0)}}}function i(){let M=!1,te=!1,O=null,X=null,oe=null;return{setReversed:function(ae){if(te!==ae){const Ce=n.get("EXT_clip_control");te?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const Qe=oe;oe=null,this.setClear(Qe)}te=ae},getReversed:function(){return te},setTest:function(ae){ae?ie(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(ae){O!==ae&&!M&&(e.depthMask(ae),O=ae)},setFunc:function(ae){if(te&&(ae=tu[ae]),X!==ae){switch(ae){case qn:e.depthFunc(e.NEVER);break;case Xn:e.depthFunc(e.ALWAYS);break;case zn:e.depthFunc(e.LESS);break;case _n:e.depthFunc(e.LEQUAL);break;case Wn:e.depthFunc(e.EQUAL);break;case kn:e.depthFunc(e.GEQUAL);break;case Vn:e.depthFunc(e.GREATER);break;case Hn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}X=ae}},setLocked:function(ae){M=ae},setClear:function(ae){oe!==ae&&(te&&(ae=1-ae),e.clearDepth(ae),oe=ae)},reset:function(){M=!1,O=null,X=null,oe=null,te=!1}}}function c(){let M=!1,te=null,O=null,X=null,oe=null,ae=null,Ce=null,Qe=null,ot=null;return{setTest:function(We){M||(We?ie(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(We){te!==We&&!M&&(e.stencilMask(We),te=We)},setFunc:function(We,vt,St){(O!==We||X!==vt||oe!==St)&&(e.stencilFunc(We,vt,St),O=We,X=vt,oe=St)},setOp:function(We,vt,St){(ae!==We||Ce!==vt||Qe!==St)&&(e.stencilOp(We,vt,St),ae=We,Ce=vt,Qe=St)},setLocked:function(We){M=We},setClear:function(We){ot!==We&&(e.clearStencil(We),ot=We)},reset:function(){M=!1,te=null,O=null,X=null,oe=null,ae=null,Ce=null,Qe=null,ot=null}}}const a=new t,d=new i,f=new c,E=new WeakMap,m=new WeakMap;let C={},R={},S=new WeakMap,A=[],N=null,L=!1,l=null,r=null,D=null,v=null,_=null,F=null,P=null,y=new $e(0,0,0),G=0,h=!1,u=null,b=null,Y=null,H=null,q=null;const Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=j>=2);let he=null,Ee={};const be=e.getParameter(e.SCISSOR_BOX),Oe=e.getParameter(e.VIEWPORT),Ye=new ut().fromArray(be),W=new ut().fromArray(Oe);function J(M,te,O,X){const oe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(M,ae),e.texParameteri(M,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(M,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ce=0;Ce<O;Ce++)M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,X,0,e.RGBA,e.UNSIGNED_BYTE,oe):e.texImage2D(te+Ce,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return ae}const de={};de[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ie(e.DEPTH_TEST),d.setFunc(_n),Ue(!1),De(Ro),ie(e.CULL_FACE),g(yt);function ie(M){C[M]!==!0&&(e.enable(M),C[M]=!0)}function Me(M){C[M]!==!1&&(e.disable(M),C[M]=!1)}function Ge(M,te){return R[M]!==te?(e.bindFramebuffer(M,te),R[M]=te,M===e.DRAW_FRAMEBUFFER&&(R[e.FRAMEBUFFER]=te),M===e.FRAMEBUFFER&&(R[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(M,te){let O=A,X=!1;if(M){O=S.get(te),O===void 0&&(O=[],S.set(te,O));const oe=M.textures;if(O.length!==oe.length||O[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Ce=oe.length;ae<Ce;ae++)O[ae]=e.COLOR_ATTACHMENT0+ae;O.length=oe.length,X=!0}}else O[0]!==e.BACK&&(O[0]=e.BACK,X=!0);X&&e.drawBuffers(O)}function Je(M){return N!==M?(e.useProgram(M),N=M,!0):!1}const Ze={[Qt]:e.FUNC_ADD,[da]:e.FUNC_SUBTRACT,[ua]:e.FUNC_REVERSE_SUBTRACT};Ze[bo]=e.MIN,Ze[Co]=e.MAX;const we={[Ca]:e.ZERO,[ba]:e.ONE,[Ra]:e.SRC_COLOR,[Aa]:e.SRC_ALPHA,[xa]:e.SRC_ALPHA_SATURATE,[Ta]:e.DST_COLOR,[Ma]:e.DST_ALPHA,[Sa]:e.ONE_MINUS_SRC_COLOR,[Ea]:e.ONE_MINUS_SRC_ALPHA,[ga]:e.ONE_MINUS_DST_COLOR,[va]:e.ONE_MINUS_DST_ALPHA,[_a]:e.CONSTANT_COLOR,[ma]:e.ONE_MINUS_CONSTANT_COLOR,[ha]:e.CONSTANT_ALPHA,[pa]:e.ONE_MINUS_CONSTANT_ALPHA};function g(M,te,O,X,oe,ae,Ce,Qe,ot,We){if(M===yt){L===!0&&(Me(e.BLEND),L=!1);return}if(L===!1&&(ie(e.BLEND),L=!0),M!==Ja){if(M!==l||We!==h){if((r!==Qt||_!==Qt)&&(e.blendEquation(e.FUNC_ADD),r=Qt,_=Qt),We)switch(M){case pn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vi:e.blendFunc(e.ONE,e.ONE);break;case Hi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Gi:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case pn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vi:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Hi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Gi:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}D=null,v=null,F=null,P=null,y.set(0,0,0),G=0,l=M,h=We}return}oe=oe||te,ae=ae||O,Ce=Ce||X,(te!==r||oe!==_)&&(e.blendEquationSeparate(Ze[te],Ze[oe]),r=te,_=oe),(O!==D||X!==v||ae!==F||Ce!==P)&&(e.blendFuncSeparate(we[O],we[X],we[ae],we[Ce]),D=O,v=X,F=ae,P=Ce),(Qe.equals(y)===!1||ot!==G)&&(e.blendColor(Qe.r,Qe.g,Qe.b,ot),y.copy(Qe),G=ot),l=M,h=!1}function pt(M,te){M.side===Tt?Me(e.CULL_FACE):ie(e.CULL_FACE);let O=M.side===_t;te&&(O=!O),Ue(O),M.blending===pn&&M.transparent===!1?g(yt):g(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),d.setFunc(M.depthFunc),d.setTest(M.depthTest),d.setMask(M.depthWrite),a.setMask(M.colorWrite);const X=M.stencilWrite;f.setTest(X),X&&(f.setMask(M.stencilWriteMask),f.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),f.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Xe(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(M){u!==M&&(M?e.frontFace(e.CW):e.frontFace(e.CCW),u=M)}function De(M){ie(e.CULL_FACE),M!==b&&e.cullFace(e.BACK),b=M}function _e(M){M!==Y&&(k&&e.lineWidth(M),Y=M)}function Xe(M,te,O){M?(ie(e.POLYGON_OFFSET_FILL),(H!==te||q!==O)&&(e.polygonOffset(te,O),H=te,q=O)):Me(e.POLYGON_OFFSET_FILL)}function me(M){M?ie(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function p(M){M===void 0&&(M=e.TEXTURE0+Q-1),he!==M&&(e.activeTexture(M),he=M)}function o(M,te,O){O===void 0&&(he===null?O=e.TEXTURE0+Q-1:O=he);let X=Ee[O];X===void 0&&(X={type:void 0,texture:void 0},Ee[O]=X),(X.type!==M||X.texture!==te)&&(he!==O&&(e.activeTexture(O),he=O),e.bindTexture(M,te||de[M]),X.type=M,X.texture=te)}function w(){const M=Ee[he];M!==void 0&&M.type!==void 0&&(e.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function z(){try{e.compressedTexImage2D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function K(){try{e.compressedTexImage3D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function V(){try{e.texSubImage2D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function pe(){try{e.texSubImage3D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function re(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ce(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ye(){try{e.texStorage2D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Z(){try{e.texStorage3D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function le(){try{e.texImage2D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Se(){try{e.texImage3D.apply(e,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function xe(M){Ye.equals(M)===!1&&(e.scissor(M.x,M.y,M.z,M.w),Ye.copy(M))}function fe(M){W.equals(M)===!1&&(e.viewport(M.x,M.y,M.z,M.w),W.copy(M))}function Ie(M,te){let O=m.get(te);O===void 0&&(O=new WeakMap,m.set(te,O));let X=O.get(M);X===void 0&&(X=e.getUniformBlockIndex(te,M.name),O.set(M,X))}function Pe(M,te){const X=m.get(te).get(M);E.get(te)!==X&&(e.uniformBlockBinding(te,X,M.__bindingPointIndex),E.set(te,X))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),C={},he=null,Ee={},R={},S=new WeakMap,A=[],N=null,L=!1,l=null,r=null,D=null,v=null,_=null,F=null,P=null,y=new $e(0,0,0),G=0,h=!1,u=null,b=null,Y=null,H=null,q=null,Ye.set(0,0,e.canvas.width,e.canvas.height),W.set(0,0,e.canvas.width,e.canvas.height),a.reset(),d.reset(),f.reset()}return{buffers:{color:a,depth:d,stencil:f},enable:ie,disable:Me,bindFramebuffer:Ge,drawBuffers:Te,useProgram:Je,setBlending:g,setMaterial:pt,setFlipSided:Ue,setCullFace:De,setLineWidth:_e,setPolygonOffset:Xe,setScissorTest:me,activeTexture:p,bindTexture:o,unbindTexture:w,compressedTexImage2D:z,compressedTexImage3D:K,texImage2D:le,texImage3D:Se,updateUBOMapping:Ie,uniformBlockBinding:Pe,texStorage2D:ye,texStorage3D:Z,texSubImage2D:V,texSubImage3D:pe,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:xe,viewport:fe,reset:ze}}function iu(e,n,t,i,c,a,d){const f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,E=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new st,C=new WeakMap;let R;const S=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(p,o){return A?new OffscreenCanvas(p,o):Mo("canvas")}function L(p,o,w){let z=1;const K=me(p);if((K.width>w||K.height>w)&&(z=w/Math.max(K.width,K.height)),z<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const V=Math.floor(z*K.width),pe=Math.floor(z*K.height);R===void 0&&(R=N(V,pe));const re=o?N(V,pe):R;return re.width=V,re.height=pe,re.getContext("2d").drawImage(p,0,0,V,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+pe+")."),re}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),p;return p}function l(p){return p.generateMipmaps}function r(p){e.generateMipmap(p)}function D(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(p,o,w,z,K=!1){if(p!==null){if(e[p]!==void 0)return e[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let V=o;if(o===e.RED&&(w===e.FLOAT&&(V=e.R32F),w===e.HALF_FLOAT&&(V=e.R16F),w===e.UNSIGNED_BYTE&&(V=e.R8)),o===e.RED_INTEGER&&(w===e.UNSIGNED_BYTE&&(V=e.R8UI),w===e.UNSIGNED_SHORT&&(V=e.R16UI),w===e.UNSIGNED_INT&&(V=e.R32UI),w===e.BYTE&&(V=e.R8I),w===e.SHORT&&(V=e.R16I),w===e.INT&&(V=e.R32I)),o===e.RG&&(w===e.FLOAT&&(V=e.RG32F),w===e.HALF_FLOAT&&(V=e.RG16F),w===e.UNSIGNED_BYTE&&(V=e.RG8)),o===e.RG_INTEGER&&(w===e.UNSIGNED_BYTE&&(V=e.RG8UI),w===e.UNSIGNED_SHORT&&(V=e.RG16UI),w===e.UNSIGNED_INT&&(V=e.RG32UI),w===e.BYTE&&(V=e.RG8I),w===e.SHORT&&(V=e.RG16I),w===e.INT&&(V=e.RG32I)),o===e.RGB_INTEGER&&(w===e.UNSIGNED_BYTE&&(V=e.RGB8UI),w===e.UNSIGNED_SHORT&&(V=e.RGB16UI),w===e.UNSIGNED_INT&&(V=e.RGB32UI),w===e.BYTE&&(V=e.RGB8I),w===e.SHORT&&(V=e.RGB16I),w===e.INT&&(V=e.RGB32I)),o===e.RGBA_INTEGER&&(w===e.UNSIGNED_BYTE&&(V=e.RGBA8UI),w===e.UNSIGNED_SHORT&&(V=e.RGBA16UI),w===e.UNSIGNED_INT&&(V=e.RGBA32UI),w===e.BYTE&&(V=e.RGBA8I),w===e.SHORT&&(V=e.RGBA16I),w===e.INT&&(V=e.RGBA32I)),o===e.RGB&&w===e.UNSIGNED_INT_5_9_9_9_REV&&(V=e.RGB9_E5),o===e.RGBA){const pe=K?Fr:nt.getTransfer(z);w===e.FLOAT&&(V=e.RGBA32F),w===e.HALF_FLOAT&&(V=e.RGBA16F),w===e.UNSIGNED_BYTE&&(V=pe===qe?e.SRGB8_ALPHA8:e.RGBA8),w===e.UNSIGNED_SHORT_4_4_4_4&&(V=e.RGBA4),w===e.UNSIGNED_SHORT_5_5_5_1&&(V=e.RGB5_A1)}return(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)&&n.get("EXT_color_buffer_float"),V}function _(p,o){let w;return p?o===null||o===rn||o===nn?w=e.DEPTH24_STENCIL8:o===It?w=e.DEPTH32F_STENCIL8:o===vn&&(w=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):o===null||o===rn||o===nn?w=e.DEPTH_COMPONENT24:o===It?w=e.DEPTH_COMPONENT32F:o===vn&&(w=e.DEPTH_COMPONENT16),w}function F(p,o){return l(p)===!0||p.isFramebufferTexture&&p.minFilter!==en&&p.minFilter!==Wt?Math.log2(Math.max(o.width,o.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?o.mipmaps.length:1}function P(p){const o=p.target;o.removeEventListener("dispose",P),G(o),o.isVideoTexture&&C.delete(o)}function y(p){const o=p.target;o.removeEventListener("dispose",y),u(o)}function G(p){const o=i.get(p);if(o.__webglInit===void 0)return;const w=p.source,z=S.get(w);if(z){const K=z[o.__cacheKey];K.usedTimes--,K.usedTimes===0&&h(p),Object.keys(z).length===0&&S.delete(w)}i.remove(p)}function h(p){const o=i.get(p);e.deleteTexture(o.__webglTexture);const w=p.source,z=S.get(w);delete z[o.__cacheKey],d.memory.textures--}function u(p){const o=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(o.__webglFramebuffer[z]))for(let K=0;K<o.__webglFramebuffer[z].length;K++)e.deleteFramebuffer(o.__webglFramebuffer[z][K]);else e.deleteFramebuffer(o.__webglFramebuffer[z]);o.__webglDepthbuffer&&e.deleteRenderbuffer(o.__webglDepthbuffer[z])}else{if(Array.isArray(o.__webglFramebuffer))for(let z=0;z<o.__webglFramebuffer.length;z++)e.deleteFramebuffer(o.__webglFramebuffer[z]);else e.deleteFramebuffer(o.__webglFramebuffer);if(o.__webglDepthbuffer&&e.deleteRenderbuffer(o.__webglDepthbuffer),o.__webglMultisampledFramebuffer&&e.deleteFramebuffer(o.__webglMultisampledFramebuffer),o.__webglColorRenderbuffer)for(let z=0;z<o.__webglColorRenderbuffer.length;z++)o.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(o.__webglColorRenderbuffer[z]);o.__webglDepthRenderbuffer&&e.deleteRenderbuffer(o.__webglDepthRenderbuffer)}const w=p.textures;for(let z=0,K=w.length;z<K;z++){const V=i.get(w[z]);V.__webglTexture&&(e.deleteTexture(V.__webglTexture),d.memory.textures--),i.remove(w[z])}i.remove(p)}let b=0;function Y(){b=0}function H(){const p=b;return p>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+c.maxTextures),b+=1,p}function q(p){const o=[];return o.push(p.wrapS),o.push(p.wrapT),o.push(p.wrapR||0),o.push(p.magFilter),o.push(p.minFilter),o.push(p.anisotropy),o.push(p.internalFormat),o.push(p.format),o.push(p.type),o.push(p.generateMipmaps),o.push(p.premultiplyAlpha),o.push(p.flipY),o.push(p.unpackAlignment),o.push(p.colorSpace),o.join()}function Q(p,o){const w=i.get(p);if(p.isVideoTexture&&_e(p),p.isRenderTargetTexture===!1&&p.version>0&&w.__version!==p.version){const z=p.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(w,p,o);return}}t.bindTexture(e.TEXTURE_2D,w.__webglTexture,e.TEXTURE0+o)}function k(p,o){const w=i.get(p);if(p.version>0&&w.__version!==p.version){W(w,p,o);return}t.bindTexture(e.TEXTURE_2D_ARRAY,w.__webglTexture,e.TEXTURE0+o)}function j(p,o){const w=i.get(p);if(p.version>0&&w.__version!==p.version){W(w,p,o);return}t.bindTexture(e.TEXTURE_3D,w.__webglTexture,e.TEXTURE0+o)}function B(p,o){const w=i.get(p);if(p.version>0&&w.__version!==p.version){J(w,p,o);return}t.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+o)}const he={[wa]:e.REPEAT,[La]:e.CLAMP_TO_EDGE,[Pa]:e.MIRRORED_REPEAT},Ee={[en]:e.NEAREST,[Ua]:e.NEAREST_MIPMAP_NEAREST,[cn]:e.NEAREST_MIPMAP_LINEAR,[Wt]:e.LINEAR,[Cn]:e.LINEAR_MIPMAP_NEAREST,[jt]:e.LINEAR_MIPMAP_LINEAR},be={[Ba]:e.NEVER,[Fa]:e.ALWAYS,[Oa]:e.LESS,[xr]:e.LEQUAL,[Na]:e.EQUAL,[ya]:e.GEQUAL,[Ia]:e.GREATER,[Da]:e.NOTEQUAL};function Oe(p,o){if(o.type===It&&n.has("OES_texture_float_linear")===!1&&(o.magFilter===Wt||o.magFilter===Cn||o.magFilter===cn||o.magFilter===jt||o.minFilter===Wt||o.minFilter===Cn||o.minFilter===cn||o.minFilter===jt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,he[o.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,he[o.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,he[o.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,Ee[o.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,Ee[o.minFilter]),o.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,be[o.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(o.magFilter===en||o.minFilter!==cn&&o.minFilter!==jt||o.type===It&&n.has("OES_texture_float_linear")===!1)return;if(o.anisotropy>1||i.get(o).__currentAnisotropy){const w=n.get("EXT_texture_filter_anisotropic");e.texParameterf(p,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(o.anisotropy,c.getMaxAnisotropy())),i.get(o).__currentAnisotropy=o.anisotropy}}}function Ye(p,o){let w=!1;p.__webglInit===void 0&&(p.__webglInit=!0,o.addEventListener("dispose",P));const z=o.source;let K=S.get(z);K===void 0&&(K={},S.set(z,K));const V=q(o);if(V!==p.__cacheKey){K[V]===void 0&&(K[V]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,w=!0),K[V].usedTimes++;const pe=K[p.__cacheKey];pe!==void 0&&(K[p.__cacheKey].usedTimes--,pe.usedTimes===0&&h(o)),p.__cacheKey=V,p.__webglTexture=K[V].texture}return w}function W(p,o,w){let z=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(z=e.TEXTURE_3D);const K=Ye(p,o),V=o.source;t.bindTexture(z,p.__webglTexture,e.TEXTURE0+w);const pe=i.get(V);if(V.version!==pe.__version||K===!0){t.activeTexture(e.TEXTURE0+w);const re=nt.getPrimaries(nt.workingColorSpace),ce=o.colorSpace===kt?null:nt.getPrimaries(o.colorSpace),ye=o.colorSpace===kt||re===ce?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Z=L(o.image,!1,c.maxTextureSize);Z=Xe(o,Z);const le=a.convert(o.format,o.colorSpace),Se=a.convert(o.type);let xe=v(o.internalFormat,le,Se,o.colorSpace,o.isVideoTexture);Oe(z,o);let fe;const Ie=o.mipmaps,Pe=o.isVideoTexture!==!0,ze=pe.__version===void 0||K===!0,M=V.dataReady,te=F(o,Z);if(o.isDepthTexture)xe=_(o.format===mn,o.type),ze&&(Pe?t.texStorage2D(e.TEXTURE_2D,1,xe,Z.width,Z.height):t.texImage2D(e.TEXTURE_2D,0,xe,Z.width,Z.height,0,le,Se,null));else if(o.isDataTexture)if(Ie.length>0){Pe&&ze&&t.texStorage2D(e.TEXTURE_2D,te,xe,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],Pe?M&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,le,Se,fe.data):t.texImage2D(e.TEXTURE_2D,O,xe,fe.width,fe.height,0,le,Se,fe.data);o.generateMipmaps=!1}else Pe?(ze&&t.texStorage2D(e.TEXTURE_2D,te,xe,Z.width,Z.height),M&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,Z.width,Z.height,le,Se,Z.data)):t.texImage2D(e.TEXTURE_2D,0,xe,Z.width,Z.height,0,le,Se,Z.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){Pe&&ze&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,xe,Ie[0].width,Ie[0].height,Z.depth);for(let O=0,X=Ie.length;O<X;O++)if(fe=Ie[O],o.format!==xt)if(le!==null)if(Pe){if(M)if(o.layerUpdates.size>0){const oe=Wi(fe.width,fe.height,o.format,o.type);for(const ae of o.layerUpdates){const Ce=fe.data.subarray(ae*oe/fe.data.BYTES_PER_ELEMENT,(ae+1)*oe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,ae,fe.width,fe.height,1,le,Ce)}o.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,Z.depth,le,fe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,O,xe,fe.width,fe.height,Z.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?M&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,Z.depth,le,Se,fe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,O,xe,fe.width,fe.height,Z.depth,0,le,Se,fe.data)}else{Pe&&ze&&t.texStorage2D(e.TEXTURE_2D,te,xe,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],o.format!==xt?le!==null?Pe?M&&t.compressedTexSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,le,fe.data):t.compressedTexImage2D(e.TEXTURE_2D,O,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?M&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,le,Se,fe.data):t.texImage2D(e.TEXTURE_2D,O,xe,fe.width,fe.height,0,le,Se,fe.data)}else if(o.isDataArrayTexture)if(Pe){if(ze&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,xe,Z.width,Z.height,Z.depth),M)if(o.layerUpdates.size>0){const O=Wi(Z.width,Z.height,o.format,o.type);for(const X of o.layerUpdates){const oe=Z.data.subarray(X*O/Z.data.BYTES_PER_ELEMENT,(X+1)*O/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,X,Z.width,Z.height,1,le,Se,oe)}o.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Se,Z.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,le,Se,Z.data);else if(o.isData3DTexture)Pe?(ze&&t.texStorage3D(e.TEXTURE_3D,te,xe,Z.width,Z.height,Z.depth),M&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Se,Z.data)):t.texImage3D(e.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,le,Se,Z.data);else if(o.isFramebufferTexture){if(ze)if(Pe)t.texStorage2D(e.TEXTURE_2D,te,xe,Z.width,Z.height);else{let O=Z.width,X=Z.height;for(let oe=0;oe<te;oe++)t.texImage2D(e.TEXTURE_2D,oe,xe,O,X,0,le,Se,null),O>>=1,X>>=1}}else if(Ie.length>0){if(Pe&&ze){const O=me(Ie[0]);t.texStorage2D(e.TEXTURE_2D,te,xe,O.width,O.height)}for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],Pe?M&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,le,Se,fe):t.texImage2D(e.TEXTURE_2D,O,xe,le,Se,fe);o.generateMipmaps=!1}else if(Pe){if(ze){const O=me(Z);t.texStorage2D(e.TEXTURE_2D,te,xe,O.width,O.height)}M&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,le,Se,Z)}else t.texImage2D(e.TEXTURE_2D,0,xe,le,Se,Z);l(o)&&r(z),pe.__version=V.version,o.onUpdate&&o.onUpdate(o)}p.__version=o.version}function J(p,o,w){if(o.image.length!==6)return;const z=Ye(p,o),K=o.source;t.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+w);const V=i.get(K);if(K.version!==V.__version||z===!0){t.activeTexture(e.TEXTURE0+w);const pe=nt.getPrimaries(nt.workingColorSpace),re=o.colorSpace===kt?null:nt.getPrimaries(o.colorSpace),ce=o.colorSpace===kt||pe===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ye=o.isCompressedTexture||o.image[0].isCompressedTexture,Z=o.image[0]&&o.image[0].isDataTexture,le=[];for(let X=0;X<6;X++)!ye&&!Z?le[X]=L(o.image[X],!0,c.maxCubemapSize):le[X]=Z?o.image[X].image:o.image[X],le[X]=Xe(o,le[X]);const Se=le[0],xe=a.convert(o.format,o.colorSpace),fe=a.convert(o.type),Ie=v(o.internalFormat,xe,fe,o.colorSpace),Pe=o.isVideoTexture!==!0,ze=V.__version===void 0||z===!0,M=K.dataReady;let te=F(o,Se);Oe(e.TEXTURE_CUBE_MAP,o);let O;if(ye){Pe&&ze&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,Se.width,Se.height);for(let X=0;X<6;X++){O=le[X].mipmaps;for(let oe=0;oe<O.length;oe++){const ae=O[oe];o.format!==xt?xe!==null?Pe?M&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,xe,ae.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?M&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,xe,fe,ae.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,ae.width,ae.height,0,xe,fe,ae.data)}}}else{if(O=o.mipmaps,Pe&&ze){O.length>0&&te++;const X=me(le[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,X.width,X.height)}for(let X=0;X<6;X++)if(Z){Pe?M&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,le[X].width,le[X].height,xe,fe,le[X].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,le[X].width,le[X].height,0,xe,fe,le[X].data);for(let oe=0;oe<O.length;oe++){const Ce=O[oe].image[X].image;Pe?M&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,Ce.width,Ce.height,xe,fe,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,Ce.width,Ce.height,0,xe,fe,Ce.data)}}else{Pe?M&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,fe,le[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,xe,fe,le[X]);for(let oe=0;oe<O.length;oe++){const ae=O[oe];Pe?M&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,xe,fe,ae.image[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,xe,fe,ae.image[X])}}}l(o)&&r(e.TEXTURE_CUBE_MAP),V.__version=K.version,o.onUpdate&&o.onUpdate(o)}p.__version=o.version}function de(p,o,w,z,K,V){const pe=a.convert(w.format,w.colorSpace),re=a.convert(w.type),ce=v(w.internalFormat,pe,re,w.colorSpace),ye=i.get(o),Z=i.get(w);if(Z.__renderTarget=o,!ye.__hasExternalTextures){const le=Math.max(1,o.width>>V),Se=Math.max(1,o.height>>V);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?t.texImage3D(K,V,ce,le,Se,o.depth,0,pe,re,null):t.texImage2D(K,V,ce,le,Se,0,pe,re,null)}t.bindFramebuffer(e.FRAMEBUFFER,p),De(o)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,K,Z.__webglTexture,0,Ue(o)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,K,Z.__webglTexture,V),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(p,o,w){if(e.bindRenderbuffer(e.RENDERBUFFER,p),o.depthBuffer){const z=o.depthTexture,K=z&&z.isDepthTexture?z.type:null,V=_(o.stencilBuffer,K),pe=o.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=Ue(o);De(o)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,V,o.width,o.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,V,o.width,o.height):e.renderbufferStorage(e.RENDERBUFFER,V,o.width,o.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,p)}else{const z=o.textures;for(let K=0;K<z.length;K++){const V=z[K],pe=a.convert(V.format,V.colorSpace),re=a.convert(V.type),ce=v(V.internalFormat,pe,re,V.colorSpace),ye=Ue(o);w&&De(o)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,ce,o.width,o.height):De(o)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye,ce,o.width,o.height):e.renderbufferStorage(e.RENDERBUFFER,ce,o.width,o.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(p,o){if(o&&o.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,p),!(o.depthTexture&&o.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(o.depthTexture);z.__renderTarget=o,(!z.__webglTexture||o.depthTexture.image.width!==o.width||o.depthTexture.image.height!==o.height)&&(o.depthTexture.image.width=o.width,o.depthTexture.image.height=o.height,o.depthTexture.needsUpdate=!0),Q(o.depthTexture,0);const K=z.__webglTexture,V=Ue(o);if(o.depthTexture.format===ei)De(o)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(o.depthTexture.format===mn)De(o)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ge(p){const o=i.get(p),w=p.isWebGLCubeRenderTarget===!0;if(o.__boundDepthTexture!==p.depthTexture){const z=p.depthTexture;if(o.__depthDisposeCallback&&o.__depthDisposeCallback(),z){const K=()=>{delete o.__boundDepthTexture,delete o.__depthDisposeCallback,z.removeEventListener("dispose",K)};z.addEventListener("dispose",K),o.__depthDisposeCallback=K}o.__boundDepthTexture=z}if(p.depthTexture&&!o.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Me(o.__webglFramebuffer,p)}else if(w){o.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[z]),o.__webglDepthbuffer[z]===void 0)o.__webglDepthbuffer[z]=e.createRenderbuffer(),ie(o.__webglDepthbuffer[z],p,!1);else{const K=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=o.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,V)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),o.__webglDepthbuffer===void 0)o.__webglDepthbuffer=e.createRenderbuffer(),ie(o.__webglDepthbuffer,p,!1);else{const z=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=o.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,z,e.RENDERBUFFER,K)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(p,o,w){const z=i.get(p);o!==void 0&&de(z.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),w!==void 0&&Ge(p)}function Je(p){const o=p.texture,w=i.get(p),z=i.get(o);p.addEventListener("dispose",y);const K=p.textures,V=p.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=o.version,d.memory.textures++),V){w.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o.mipmaps&&o.mipmaps.length>0){w.__webglFramebuffer[re]=[];for(let ce=0;ce<o.mipmaps.length;ce++)w.__webglFramebuffer[re][ce]=e.createFramebuffer()}else w.__webglFramebuffer[re]=e.createFramebuffer()}else{if(o.mipmaps&&o.mipmaps.length>0){w.__webglFramebuffer=[];for(let re=0;re<o.mipmaps.length;re++)w.__webglFramebuffer[re]=e.createFramebuffer()}else w.__webglFramebuffer=e.createFramebuffer();if(pe)for(let re=0,ce=K.length;re<ce;re++){const ye=i.get(K[re]);ye.__webglTexture===void 0&&(ye.__webglTexture=e.createTexture(),d.memory.textures++)}if(p.samples>0&&De(p)===!1){w.__webglMultisampledFramebuffer=e.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ce=K[re];w.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,w.__webglColorRenderbuffer[re]);const ye=a.convert(ce.format,ce.colorSpace),Z=a.convert(ce.type),le=v(ce.internalFormat,ye,Z,ce.colorSpace,p.isXRRenderTarget===!0),Se=Ue(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,Se,le,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,w.__webglColorRenderbuffer[re])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(w.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(w.__webglDepthRenderbuffer,p,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(V){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Oe(e.TEXTURE_CUBE_MAP,o);for(let re=0;re<6;re++)if(o.mipmaps&&o.mipmaps.length>0)for(let ce=0;ce<o.mipmaps.length;ce++)de(w.__webglFramebuffer[re][ce],p,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else de(w.__webglFramebuffer[re],p,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);l(o)&&r(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let re=0,ce=K.length;re<ce;re++){const ye=K[re],Z=i.get(ye);t.bindTexture(e.TEXTURE_2D,Z.__webglTexture),Oe(e.TEXTURE_2D,ye),de(w.__webglFramebuffer,p,ye,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,0),l(ye)&&r(e.TEXTURE_2D)}t.unbindTexture()}else{let re=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(re=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(re,z.__webglTexture),Oe(re,o),o.mipmaps&&o.mipmaps.length>0)for(let ce=0;ce<o.mipmaps.length;ce++)de(w.__webglFramebuffer[ce],p,o,e.COLOR_ATTACHMENT0,re,ce);else de(w.__webglFramebuffer,p,o,e.COLOR_ATTACHMENT0,re,0);l(o)&&r(re),t.unbindTexture()}p.depthBuffer&&Ge(p)}function Ze(p){const o=p.textures;for(let w=0,z=o.length;w<z;w++){const K=o[w];if(l(K)){const V=D(p),pe=i.get(K).__webglTexture;t.bindTexture(V,pe),r(V),t.unbindTexture()}}}const we=[],g=[];function pt(p){if(p.samples>0){if(De(p)===!1){const o=p.textures,w=p.width,z=p.height;let K=e.COLOR_BUFFER_BIT;const V=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=i.get(p),re=o.length>1;if(re)for(let ce=0;ce<o.length;ce++)t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ce=0;ce<o.length;ce++){if(p.resolveDepthBuffer&&(p.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ce]);const ye=i.get(o[ce]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ye,0)}e.blitFramebuffer(0,0,w,z,0,0,w,z,K,e.NEAREST),E===!0&&(we.length=0,g.length=0,we.push(e.COLOR_ATTACHMENT0+ce),p.depthBuffer&&p.resolveDepthBuffer===!1&&(we.push(V),g.push(V),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,g)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<o.length;ce++){t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ce]);const ye=i.get(o[ce]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,ye,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&E){const o=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[o])}}}function Ue(p){return Math.min(c.maxSamples,p.samples)}function De(p){const o=i.get(p);return p.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&o.__useRenderToTexture!==!1}function _e(p){const o=d.render.frame;C.get(p)!==o&&(C.set(p,o),p.update())}function Xe(p,o){const w=p.colorSpace,z=p.format,K=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||w!==En&&w!==kt&&(nt.getTransfer(w)===qe?(z!==xt||K!==Nt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),o}function me(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(m.width=p.naturalWidth||p.width,m.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(m.width=p.displayWidth,m.height=p.displayHeight):(m.width=p.width,m.height=p.height),m}this.allocateTextureUnit=H,this.resetTextureUnits=Y,this.setTexture2D=Q,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=B,this.rebindTextures=Te,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=de,this.useMultisampledRTT=De}function ru(e,n){function t(i,c=kt){let a;const d=nt.getTransfer(c);if(i===Nt)return e.UNSIGNED_BYTE;if(i===br)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Cr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Wa)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===za)return e.BYTE;if(i===Xa)return e.SHORT;if(i===vn)return e.UNSIGNED_SHORT;if(i===wr)return e.INT;if(i===rn)return e.UNSIGNED_INT;if(i===It)return e.FLOAT;if(i===gn)return e.HALF_FLOAT;if(i===qa)return e.ALPHA;if(i===Ya)return e.RGB;if(i===xt)return e.RGBA;if(i===Ka)return e.LUMINANCE;if(i===$a)return e.LUMINANCE_ALPHA;if(i===ei)return e.DEPTH_COMPONENT;if(i===mn)return e.DEPTH_STENCIL;if(i===Za)return e.RED;if(i===Ur)return e.RED_INTEGER;if(i===Qa)return e.RG;if(i===Dr)return e.RG_INTEGER;if(i===Ir)return e.RGBA_INTEGER;if(i===Pn||i===Ln||i===wn||i===Un)if(d===qe)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Pn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ln)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Un)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Pn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ln)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Un)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pi||i===hi||i===mi||i===_i)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===pi)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hi)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mi)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_i)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vi||i===gi||i===Ei)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===vi||i===gi)return d===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ei)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Si||i===Mi||i===Ti||i===xi||i===Ai||i===Ri||i===bi||i===Ci||i===Pi||i===Li||i===wi||i===Ui||i===Di||i===Ii)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Si)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mi)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ti)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xi)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ai)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ri)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bi)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ci)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pi)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Li)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wi)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ui)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Di)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ii)return d===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dn||i===yi||i===Ni)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Dn)return d===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yi)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ni)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ja||i===Oi||i===Fi||i===Bi)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===Dn)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Oi)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fi)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bi)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const au=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ou=`
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

}`;class su{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){const c=new Pr,a=n.properties.get(c);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=c}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Ot({vertexShader:au,fragmentShader:ou,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cu extends ca{constructor(n,t){super();const i=this;let c=null,a=1,d=null,f="local-floor",E=1,m=null,C=null,R=null,S=null,A=null,N=null;const L=new su,l=t.getContextAttributes();let r=null,D=null;const v=[],_=[],F=new st;let P=null;const y=new Xt;y.viewport=new ut;const G=new Xt;G.viewport=new ut;const h=[y,G],u=new la;let b=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=v[W];return J===void 0&&(J=new bn,v[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=v[W];return J===void 0&&(J=new bn,v[W]=J),J.getGripSpace()},this.getHand=function(W){let J=v[W];return J===void 0&&(J=new bn,v[W]=J),J.getHandSpace()};function H(W){const J=_.indexOf(W.inputSource);if(J===-1)return;const de=v[J];de!==void 0&&(de.update(W.inputSource,W.frame,m||d),de.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){c.removeEventListener("select",H),c.removeEventListener("selectstart",H),c.removeEventListener("selectend",H),c.removeEventListener("squeeze",H),c.removeEventListener("squeezestart",H),c.removeEventListener("squeezeend",H),c.removeEventListener("end",q),c.removeEventListener("inputsourceschange",Q);for(let W=0;W<v.length;W++){const J=_[W];J!==null&&(_[W]=null,v[W].disconnect(J))}b=null,Y=null,L.reset(),n.setRenderTarget(r),A=null,S=null,R=null,c=null,D=null,Ye.stop(),i.isPresenting=!1,n.setPixelRatio(P),n.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){f=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return S!==null?S:A},this.getBinding=function(){return R},this.getFrame=function(){return N},this.getSession=function(){return c},this.setSession=async function(W){if(c=W,c!==null){if(r=n.getRenderTarget(),c.addEventListener("select",H),c.addEventListener("selectstart",H),c.addEventListener("selectend",H),c.addEventListener("squeeze",H),c.addEventListener("squeezestart",H),c.addEventListener("squeezeend",H),c.addEventListener("end",q),c.addEventListener("inputsourceschange",Q),l.xrCompatible!==!0&&await t.makeXRCompatible(),P=n.getPixelRatio(),n.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ie=null,Me=null;l.depth&&(Me=l.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=l.stencil?mn:ei,ie=l.stencil?nn:rn);const Ge={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};R=new XRWebGLBinding(c,t),S=R.createProjectionLayer(Ge),c.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),D=new Yt(S.textureWidth,S.textureHeight,{format:xt,type:Nt,depthTexture:new Tr(S.textureWidth,S.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:l.stencil,colorSpace:n.outputColorSpace,samples:l.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}else{const de={antialias:l.antialias,alpha:!0,depth:l.depth,stencil:l.stencil,framebufferScaleFactor:a};A=new XRWebGLLayer(c,t,de),c.updateRenderState({baseLayer:A}),n.setPixelRatio(1),n.setSize(A.framebufferWidth,A.framebufferHeight,!1),D=new Yt(A.framebufferWidth,A.framebufferHeight,{format:xt,type:Nt,colorSpace:n.outputColorSpace,stencilBuffer:l.stencil})}D.isXRRenderTarget=!0,this.setFoveation(E),m=null,d=await c.requestReferenceSpace(f),Ye.setContext(c),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function Q(W){for(let J=0;J<W.removed.length;J++){const de=W.removed[J],ie=_.indexOf(de);ie>=0&&(_[ie]=null,v[ie].disconnect(de))}for(let J=0;J<W.added.length;J++){const de=W.added[J];let ie=_.indexOf(de);if(ie===-1){for(let Ge=0;Ge<v.length;Ge++)if(Ge>=_.length){_.push(de),ie=Ge;break}else if(_[Ge]===null){_[Ge]=de,ie=Ge;break}if(ie===-1)break}const Me=v[ie];Me&&Me.connect(de)}}const k=new He,j=new He;function B(W,J,de){k.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const ie=k.distanceTo(j),Me=J.projectionMatrix.elements,Ge=de.projectionMatrix.elements,Te=Me[14]/(Me[10]-1),Je=Me[14]/(Me[10]+1),Ze=(Me[9]+1)/Me[5],we=(Me[9]-1)/Me[5],g=(Me[8]-1)/Me[0],pt=(Ge[8]+1)/Ge[0],Ue=Te*g,De=Te*pt,_e=ie/(-g+pt),Xe=_e*-g;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Xe),W.translateZ(_e),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Me[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const me=Te+_e,p=Je+_e,o=Ue-Xe,w=De+(ie-Xe),z=Ze*Je/p*me,K=we*Je/p*me;W.projectionMatrix.makePerspective(o,w,z,K,me,p),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function he(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(c===null)return;let J=W.near,de=W.far;L.texture!==null&&(L.depthNear>0&&(J=L.depthNear),L.depthFar>0&&(de=L.depthFar)),u.near=G.near=y.near=J,u.far=G.far=y.far=de,(b!==u.near||Y!==u.far)&&(c.updateRenderState({depthNear:u.near,depthFar:u.far}),b=u.near,Y=u.far),y.layers.mask=W.layers.mask|2,G.layers.mask=W.layers.mask|4,u.layers.mask=y.layers.mask|G.layers.mask;const ie=W.parent,Me=u.cameras;he(u,ie);for(let Ge=0;Ge<Me.length;Ge++)he(Me[Ge],ie);Me.length===2?B(u,y,G):u.projectionMatrix.copy(y.projectionMatrix),Ee(W,u,ie)};function Ee(W,J,de){de===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return u},this.getFoveation=function(){if(!(S===null&&A===null))return E},this.setFoveation=function(W){E=W,S!==null&&(S.fixedFoveation=W),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=W)},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(u)};let be=null;function Oe(W,J){if(C=J.getViewerPose(m||d),N=J,C!==null){const de=C.views;A!==null&&(n.setRenderTargetFramebuffer(D,A.framebuffer),n.setRenderTarget(D));let ie=!1;de.length!==u.cameras.length&&(u.cameras.length=0,ie=!0);for(let Te=0;Te<de.length;Te++){const Je=de[Te];let Ze=null;if(A!==null)Ze=A.getViewport(Je);else{const g=R.getViewSubImage(S,Je);Ze=g.viewport,Te===0&&(n.setRenderTargetTextures(D,g.colorTexture,S.ignoreDepthValues?void 0:g.depthStencilTexture),n.setRenderTarget(D))}let we=h[Te];we===void 0&&(we=new Xt,we.layers.enable(Te),we.viewport=new ut,h[Te]=we),we.matrix.fromArray(Je.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Je.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Te===0&&(u.matrix.copy(we.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale)),ie===!0&&u.cameras.push(we)}const Me=c.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&R){const Te=R.getDepthInformation(de[0]);Te&&Te.isValid&&Te.texture&&L.init(n,Te,c.renderState)}}for(let de=0;de<v.length;de++){const ie=_[de],Me=v[de];ie!==null&&Me!==void 0&&Me.update(ie,J,m||d)}be&&be(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),N=null}const Ye=new Gr;Ye.setAnimationLoop(Oe),this.setAnimationLoop=function(W){be=W},this.dispose=function(){}}}const Lt=new ti,lu=new qt;function fu(e,n){function t(l,r){l.matrixAutoUpdate===!0&&l.updateMatrix(),r.value.copy(l.matrix)}function i(l,r){r.color.getRGB(l.fogColor.value,Nr(e)),r.isFog?(l.fogNear.value=r.near,l.fogFar.value=r.far):r.isFogExp2&&(l.fogDensity.value=r.density)}function c(l,r,D,v,_){r.isMeshBasicMaterial||r.isMeshLambertMaterial?a(l,r):r.isMeshToonMaterial?(a(l,r),R(l,r)):r.isMeshPhongMaterial?(a(l,r),C(l,r)):r.isMeshStandardMaterial?(a(l,r),S(l,r),r.isMeshPhysicalMaterial&&A(l,r,_)):r.isMeshMatcapMaterial?(a(l,r),N(l,r)):r.isMeshDepthMaterial?a(l,r):r.isMeshDistanceMaterial?(a(l,r),L(l,r)):r.isMeshNormalMaterial?a(l,r):r.isLineBasicMaterial?(d(l,r),r.isLineDashedMaterial&&f(l,r)):r.isPointsMaterial?E(l,r,D,v):r.isSpriteMaterial?m(l,r):r.isShadowMaterial?(l.color.value.copy(r.color),l.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}function a(l,r){l.opacity.value=r.opacity,r.color&&l.diffuse.value.copy(r.color),r.emissive&&l.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.bumpMap&&(l.bumpMap.value=r.bumpMap,t(r.bumpMap,l.bumpMapTransform),l.bumpScale.value=r.bumpScale,r.side===_t&&(l.bumpScale.value*=-1)),r.normalMap&&(l.normalMap.value=r.normalMap,t(r.normalMap,l.normalMapTransform),l.normalScale.value.copy(r.normalScale),r.side===_t&&l.normalScale.value.negate()),r.displacementMap&&(l.displacementMap.value=r.displacementMap,t(r.displacementMap,l.displacementMapTransform),l.displacementScale.value=r.displacementScale,l.displacementBias.value=r.displacementBias),r.emissiveMap&&(l.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,l.emissiveMapTransform)),r.specularMap&&(l.specularMap.value=r.specularMap,t(r.specularMap,l.specularMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest);const D=n.get(r),v=D.envMap,_=D.envMapRotation;v&&(l.envMap.value=v,Lt.copy(_),Lt.x*=-1,Lt.y*=-1,Lt.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Lt.y*=-1,Lt.z*=-1),l.envMapRotation.value.setFromMatrix4(lu.makeRotationFromEuler(Lt)),l.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=r.reflectivity,l.ior.value=r.ior,l.refractionRatio.value=r.refractionRatio),r.lightMap&&(l.lightMap.value=r.lightMap,l.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,l.lightMapTransform)),r.aoMap&&(l.aoMap.value=r.aoMap,l.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,l.aoMapTransform))}function d(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform))}function f(l,r){l.dashSize.value=r.dashSize,l.totalSize.value=r.dashSize+r.gapSize,l.scale.value=r.scale}function E(l,r,D,v){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.size.value=r.size*D,l.scale.value=v*.5,r.map&&(l.map.value=r.map,t(r.map,l.uvTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function m(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.rotation.value=r.rotation,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function C(l,r){l.specular.value.copy(r.specular),l.shininess.value=Math.max(r.shininess,1e-4)}function R(l,r){r.gradientMap&&(l.gradientMap.value=r.gradientMap)}function S(l,r){l.metalness.value=r.metalness,r.metalnessMap&&(l.metalnessMap.value=r.metalnessMap,t(r.metalnessMap,l.metalnessMapTransform)),l.roughness.value=r.roughness,r.roughnessMap&&(l.roughnessMap.value=r.roughnessMap,t(r.roughnessMap,l.roughnessMapTransform)),r.envMap&&(l.envMapIntensity.value=r.envMapIntensity)}function A(l,r,D){l.ior.value=r.ior,r.sheen>0&&(l.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),l.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(l.sheenColorMap.value=r.sheenColorMap,t(r.sheenColorMap,l.sheenColorMapTransform)),r.sheenRoughnessMap&&(l.sheenRoughnessMap.value=r.sheenRoughnessMap,t(r.sheenRoughnessMap,l.sheenRoughnessMapTransform))),r.clearcoat>0&&(l.clearcoat.value=r.clearcoat,l.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(l.clearcoatMap.value=r.clearcoatMap,t(r.clearcoatMap,l.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,t(r.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(l.clearcoatNormalMap.value=r.clearcoatNormalMap,t(r.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),r.side===_t&&l.clearcoatNormalScale.value.negate())),r.dispersion>0&&(l.dispersion.value=r.dispersion),r.iridescence>0&&(l.iridescence.value=r.iridescence,l.iridescenceIOR.value=r.iridescenceIOR,l.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(l.iridescenceMap.value=r.iridescenceMap,t(r.iridescenceMap,l.iridescenceMapTransform)),r.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=r.iridescenceThicknessMap,t(r.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),r.transmission>0&&(l.transmission.value=r.transmission,l.transmissionSamplerMap.value=D.texture,l.transmissionSamplerSize.value.set(D.width,D.height),r.transmissionMap&&(l.transmissionMap.value=r.transmissionMap,t(r.transmissionMap,l.transmissionMapTransform)),l.thickness.value=r.thickness,r.thicknessMap&&(l.thicknessMap.value=r.thicknessMap,t(r.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=r.attenuationDistance,l.attenuationColor.value.copy(r.attenuationColor)),r.anisotropy>0&&(l.anisotropyVector.value.set(r.anisotropy*Math.cos(r.anisotropyRotation),r.anisotropy*Math.sin(r.anisotropyRotation)),r.anisotropyMap&&(l.anisotropyMap.value=r.anisotropyMap,t(r.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=r.specularIntensity,l.specularColor.value.copy(r.specularColor),r.specularColorMap&&(l.specularColorMap.value=r.specularColorMap,t(r.specularColorMap,l.specularColorMapTransform)),r.specularIntensityMap&&(l.specularIntensityMap.value=r.specularIntensityMap,t(r.specularIntensityMap,l.specularIntensityMapTransform))}function N(l,r){r.matcap&&(l.matcap.value=r.matcap)}function L(l,r){const D=n.get(r).light;l.referencePosition.value.setFromMatrixPosition(D.matrixWorld),l.nearDistance.value=D.shadow.camera.near,l.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:c}}function uu(e,n,t,i){let c={},a={},d=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function E(D,v){const _=v.program;i.uniformBlockBinding(D,_)}function m(D,v){let _=c[D.id];_===void 0&&(N(D),_=C(D),c[D.id]=_,D.addEventListener("dispose",l));const F=v.program;i.updateUBOMapping(D,F);const P=n.render.frame;a[D.id]!==P&&(S(D),a[D.id]=P)}function C(D){const v=R();D.__bindingPointIndex=v;const _=e.createBuffer(),F=D.__size,P=D.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,F,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,_),_}function R(){for(let D=0;D<f;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const v=c[D.id],_=D.uniforms,F=D.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let P=0,y=_.length;P<y;P++){const G=Array.isArray(_[P])?_[P]:[_[P]];for(let h=0,u=G.length;h<u;h++){const b=G[h];if(A(b,P,h,F)===!0){const Y=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let q=0;for(let Q=0;Q<H.length;Q++){const k=H[Q],j=L(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,e.bufferSubData(e.UNIFORM_BUFFER,Y+q,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,Y,b.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function A(D,v,_,F){const P=D.value,y=v+"_"+_;if(F[y]===void 0)return typeof P=="number"||typeof P=="boolean"?F[y]=P:F[y]=P.clone(),!0;{const G=F[y];if(typeof P=="number"||typeof P=="boolean"){if(G!==P)return F[y]=P,!0}else if(G.equals(P)===!1)return G.copy(P),!0}return!1}function N(D){const v=D.uniforms;let _=0;const F=16;for(let y=0,G=v.length;y<G;y++){const h=Array.isArray(v[y])?v[y]:[v[y]];for(let u=0,b=h.length;u<b;u++){const Y=h[u],H=Array.isArray(Y.value)?Y.value:[Y.value];for(let q=0,Q=H.length;q<Q;q++){const k=H[q],j=L(k),B=_%F,he=B%j.boundary,Ee=B+he;_+=he,Ee!==0&&F-Ee<j.storage&&(_+=F-Ee),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=_,_+=j.storage}}}const P=_%F;return P>0&&(_+=F-P),D.__size=_,D.__cache={},this}function L(D){const v={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(v.boundary=4,v.storage=4):D.isVector2?(v.boundary=8,v.storage=8):D.isVector3||D.isColor?(v.boundary=16,v.storage=12):D.isVector4?(v.boundary=16,v.storage=16):D.isMatrix3?(v.boundary=48,v.storage=48):D.isMatrix4?(v.boundary=64,v.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),v}function l(D){const v=D.target;v.removeEventListener("dispose",l);const _=d.indexOf(v.__bindingPointIndex);d.splice(_,1),e.deleteBuffer(c[v.id]),delete c[v.id],delete a[v.id]}function r(){for(const D in c)e.deleteBuffer(c[D]);d=[],c={},a={}}return{bind:E,update:m,dispose:r}}class mr{constructor(n={}){const{canvas:t=ta(),context:i=null,depth:c=!0,stencil:a=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:E=!0,preserveDrawingBuffer:m=!1,powerPreference:C="default",failIfMajorPerformanceCaveat:R=!1,reverseDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let A;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=i.getContextAttributes().alpha}else A=d;const N=new Uint32Array(4),L=new Int32Array(4);let l=null,r=null;const D=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=na,this.toneMapping=Rt,this.toneMappingExposure=1;const _=this;let F=!1,P=0,y=0,G=null,h=-1,u=null;const b=new ut,Y=new ut;let H=null;const q=new $e(0);let Q=0,k=t.width,j=t.height,B=1,he=null,Ee=null;const be=new ut(0,0,k,j),Oe=new ut(0,0,k,j);let Ye=!1;const W=new Mr;let J=!1,de=!1;this.transmissionResolutionScale=1;const ie=new qt,Me=new qt,Ge=new He,Te=new ut,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function we(){return G===null?B:1}let g=i;function pt(s,T){return t.getContext(s,T)}try{const s={alpha:!0,depth:c,stencil:a,antialias:f,premultipliedAlpha:E,preserveDrawingBuffer:m,powerPreference:C,failIfMajorPerformanceCaveat:R};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ia}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),g===null){const T="webgl2";if(g=pt(T,s),g===null)throw pt(T)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw console.error("THREE.WebGLRenderer: "+s.message),s}let Ue,De,_e,Xe,me,p,o,w,z,K,V,pe,re,ce,ye,Z,le,Se,xe,fe,Ie,Pe,ze,M;function te(){Ue=new Ml(g),Ue.init(),Pe=new ru(g,Ue),De=new ml(g,Ue,n,Pe),_e=new nu(g,Ue),De.reverseDepthBuffer&&S&&_e.buffers.depth.setReversed(!0),Xe=new Al(g),me=new Wf,p=new iu(g,Ue,_e,me,De,Pe,Xe),o=new vl(_),w=new Sl(_),z=new Uo(g),ze=new pl(g,z),K=new Tl(g,z,Xe,ze),V=new bl(g,K,z,Xe),xe=new Rl(g,De,p),Z=new _l(me),pe=new kf(_,o,w,Ue,De,ze,Z),re=new fu(_,me),ce=new Xf,ye=new Qf(Ue),Se=new dl(_,o,w,_e,V,A,E),le=new eu(_,V,De),M=new uu(g,Xe,De,_e),fe=new hl(g,Ue,Xe),Ie=new xl(g,Ue,Xe),Xe.programs=pe.programs,_.capabilities=De,_.extensions=Ue,_.properties=me,_.renderLists=ce,_.shadowMap=le,_.state=_e,_.info=Xe}te();const O=new cu(_,g);this.xr=O,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const s=Ue.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){const s=Ue.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(s){s!==void 0&&(B=s,this.setSize(k,j,!1))},this.getSize=function(s){return s.set(k,j)},this.setSize=function(s,T,U=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=s,j=T,t.width=Math.floor(s*B),t.height=Math.floor(T*B),U===!0&&(t.style.width=s+"px",t.style.height=T+"px"),this.setViewport(0,0,s,T)},this.getDrawingBufferSize=function(s){return s.set(k*B,j*B).floor()},this.setDrawingBufferSize=function(s,T,U){k=s,j=T,B=U,t.width=Math.floor(s*U),t.height=Math.floor(T*U),this.setViewport(0,0,s,T)},this.getCurrentViewport=function(s){return s.copy(b)},this.getViewport=function(s){return s.copy(be)},this.setViewport=function(s,T,U,I){s.isVector4?be.set(s.x,s.y,s.z,s.w):be.set(s,T,U,I),_e.viewport(b.copy(be).multiplyScalar(B).round())},this.getScissor=function(s){return s.copy(Oe)},this.setScissor=function(s,T,U,I){s.isVector4?Oe.set(s.x,s.y,s.z,s.w):Oe.set(s,T,U,I),_e.scissor(Y.copy(Oe).multiplyScalar(B).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(s){_e.setScissorTest(Ye=s)},this.setOpaqueSort=function(s){he=s},this.setTransparentSort=function(s){Ee=s},this.getClearColor=function(s){return s.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(s=!0,T=!0,U=!0){let I=0;if(s){let x=!1;if(G!==null){const $=G.texture.format;x=$===Ir||$===Dr||$===Ur}if(x){const $=G.texture.type,ne=$===Nt||$===rn||$===vn||$===nn||$===br||$===Cr,se=Se.getClearColor(),ue=Se.getClearAlpha(),Ae=se.r,Re=se.g,ve=se.b;ne?(N[0]=Ae,N[1]=Re,N[2]=ve,N[3]=ue,g.clearBufferuiv(g.COLOR,0,N)):(L[0]=Ae,L[1]=Re,L[2]=ve,L[3]=ue,g.clearBufferiv(g.COLOR,0,L))}else I|=g.COLOR_BUFFER_BIT}T&&(I|=g.DEPTH_BUFFER_BIT),U&&(I|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Se.dispose(),ce.dispose(),ye.dispose(),me.dispose(),o.dispose(),w.dispose(),V.dispose(),ze.dispose(),M.dispose(),pe.dispose(),O.dispose(),O.removeEventListener("sessionstart",ai),O.removeEventListener("sessionend",oi),bt.stop()};function X(s){s.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const s=Xe.autoReset,T=le.enabled,U=le.autoUpdate,I=le.needsUpdate,x=le.type;te(),Xe.autoReset=s,le.enabled=T,le.autoUpdate=U,le.needsUpdate=I,le.type=x}function ae(s){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function Ce(s){const T=s.target;T.removeEventListener("dispose",Ce),Qe(T)}function Qe(s){ot(s),me.remove(s)}function ot(s){const T=me.get(s).programs;T!==void 0&&(T.forEach(function(U){pe.releaseProgram(U)}),s.isShaderMaterial&&pe.releaseShaderCache(s))}this.renderBufferDirect=function(s,T,U,I,x,$){T===null&&(T=Je);const ne=x.isMesh&&x.matrixWorld.determinant()<0,se=Kr(s,T,U,I,x);_e.setMaterial(I,ne);let ue=U.index,Ae=1;if(I.wireframe===!0){if(ue=K.getWireframeAttribute(U),ue===void 0)return;Ae=2}const Re=U.drawRange,ve=U.attributes.position;let Ne=Re.start*Ae,Ve=(Re.start+Re.count)*Ae;$!==null&&(Ne=Math.max(Ne,$.start*Ae),Ve=Math.min(Ve,($.start+$.count)*Ae)),ue!==null?(Ne=Math.max(Ne,0),Ve=Math.min(Ve,ue.count)):ve!=null&&(Ne=Math.max(Ne,0),Ve=Math.min(Ve,ve.count));const tt=Ve-Ne;if(tt<0||tt===1/0)return;ze.setup(x,I,se,U,ue);let je,Fe=fe;if(ue!==null&&(je=z.get(ue),Fe=Ie,Fe.setIndex(je)),x.isMesh)I.wireframe===!0?(_e.setLineWidth(I.wireframeLinewidth*we()),Fe.setMode(g.LINES)):Fe.setMode(g.TRIANGLES);else if(x.isLine){let ge=I.linewidth;ge===void 0&&(ge=1),_e.setLineWidth(ge*we()),x.isLineSegments?Fe.setMode(g.LINES):x.isLineLoop?Fe.setMode(g.LINE_LOOP):Fe.setMode(g.LINE_STRIP)}else x.isPoints?Fe.setMode(g.POINTS):x.isSprite&&Fe.setMode(g.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)Fe.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Fe.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{const ge=x._multiDrawStarts,at=x._multiDrawCounts,ke=x._multiDrawCount,gt=ue?z.get(ue).bytesPerElement:1,Ft=me.get(I).currentProgram.getUniforms();for(let dt=0;dt<ke;dt++)Ft.setValue(g,"_gl_DrawID",dt),Fe.render(ge[dt]/gt,at[dt])}else if(x.isInstancedMesh)Fe.renderInstances(Ne,tt,x.count);else if(U.isInstancedBufferGeometry){const ge=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,at=Math.min(U.instanceCount,ge);Fe.renderInstances(Ne,tt,at)}else Fe.render(Ne,tt)};function We(s,T,U){s.transparent===!0&&s.side===Tt&&s.forceSinglePass===!1?(s.side=_t,s.needsUpdate=!0,sn(s,T,U),s.side=tn,s.needsUpdate=!0,sn(s,T,U),s.side=Tt):sn(s,T,U)}this.compile=function(s,T,U=null){U===null&&(U=s),r=ye.get(U),r.init(T),v.push(r),U.traverseVisible(function(x){x.isLight&&x.layers.test(T.layers)&&(r.pushLight(x),x.castShadow&&r.pushShadow(x))}),s!==U&&s.traverseVisible(function(x){x.isLight&&x.layers.test(T.layers)&&(r.pushLight(x),x.castShadow&&r.pushShadow(x))}),r.setupLights();const I=new Set;return s.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;const $=x.material;if($)if(Array.isArray($))for(let ne=0;ne<$.length;ne++){const se=$[ne];We(se,U,x),I.add(se)}else We($,U,x),I.add($)}),v.pop(),r=null,I},this.compileAsync=function(s,T,U=null){const I=this.compile(s,T,U);return new Promise(x=>{function $(){if(I.forEach(function(ne){me.get(ne).currentProgram.isReady()&&I.delete(ne)}),I.size===0){x(s);return}setTimeout($,10)}Ue.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let vt=null;function St(s){vt&&vt(s)}function ai(){bt.stop()}function oi(){bt.start()}const bt=new Gr;bt.setAnimationLoop(St),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(s){vt=s,O.setAnimationLoop(s),s===null?bt.stop():bt.start()},O.addEventListener("sessionstart",ai),O.addEventListener("sessionend",oi),this.render=function(s,T){if(T!==void 0&&T.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(T),T=O.getCamera()),s.isScene===!0&&s.onBeforeRender(_,s,T,G),r=ye.get(s,v.length),r.init(T),v.push(r),Me.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),W.setFromProjectionMatrix(Me),de=this.localClippingEnabled,J=Z.init(this.clippingPlanes,de),l=ce.get(s,D.length),l.init(),D.push(l),O.enabled===!0&&O.isPresenting===!0){const $=_.xr.getDepthSensingMesh();$!==null&&xn($,T,-1/0,_.sortObjects)}xn(s,T,0,_.sortObjects),l.finish(),_.sortObjects===!0&&l.sort(he,Ee),Ze=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Ze&&Se.addToRenderList(l,s),this.info.render.frame++,J===!0&&Z.beginShadows();const U=r.state.shadowsArray;le.render(U,s,T),J===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=l.opaque,x=l.transmissive;if(r.setupLights(),T.isArrayCamera){const $=T.cameras;if(x.length>0)for(let ne=0,se=$.length;ne<se;ne++){const ue=$[ne];ci(I,x,s,ue)}Ze&&Se.render(s);for(let ne=0,se=$.length;ne<se;ne++){const ue=$[ne];si(l,s,ue,ue.viewport)}}else x.length>0&&ci(I,x,s,T),Ze&&Se.render(s),si(l,s,T);G!==null&&y===0&&(p.updateMultisampleRenderTarget(G),p.updateRenderTargetMipmap(G)),s.isScene===!0&&s.onAfterRender(_,s,T),ze.resetDefaultState(),h=-1,u=null,v.pop(),v.length>0?(r=v[v.length-1],J===!0&&Z.setGlobalState(_.clippingPlanes,r.state.camera)):r=null,D.pop(),D.length>0?l=D[D.length-1]:l=null};function xn(s,T,U,I){if(s.visible===!1)return;if(s.layers.test(T.layers)){if(s.isGroup)U=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(T);else if(s.isLight)r.pushLight(s),s.castShadow&&r.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||W.intersectsSprite(s)){I&&Te.setFromMatrixPosition(s.matrixWorld).applyMatrix4(Me);const ne=V.update(s),se=s.material;se.visible&&l.push(s,ne,se,U,Te.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||W.intersectsObject(s))){const ne=V.update(s),se=s.material;if(I&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),Te.copy(s.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Te.copy(ne.boundingSphere.center)),Te.applyMatrix4(s.matrixWorld).applyMatrix4(Me)),Array.isArray(se)){const ue=ne.groups;for(let Ae=0,Re=ue.length;Ae<Re;Ae++){const ve=ue[Ae],Ne=se[ve.materialIndex];Ne&&Ne.visible&&l.push(s,ne,Ne,U,Te.z,ve)}}else se.visible&&l.push(s,ne,se,U,Te.z,null)}}const $=s.children;for(let ne=0,se=$.length;ne<se;ne++)xn($[ne],T,U,I)}function si(s,T,U,I){const x=s.opaque,$=s.transmissive,ne=s.transparent;r.setupLightsView(U),J===!0&&Z.setGlobalState(_.clippingPlanes,U),I&&_e.viewport(b.copy(I)),x.length>0&&on(x,T,U),$.length>0&&on($,T,U),ne.length>0&&on(ne,T,U),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ci(s,T,U,I){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;r.state.transmissionRenderTarget[I.id]===void 0&&(r.state.transmissionRenderTarget[I.id]=new Yt(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?gn:Nt,minFilter:jt,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const $=r.state.transmissionRenderTarget[I.id],ne=I.viewport||b;$.setSize(ne.z*_.transmissionResolutionScale,ne.w*_.transmissionResolutionScale);const se=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(q),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),Ze&&Se.render(U);const ue=_.toneMapping;_.toneMapping=Rt;const Ae=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),r.setupLightsView(I),J===!0&&Z.setGlobalState(_.clippingPlanes,I),on(s,U,I),p.updateMultisampleRenderTarget($),p.updateRenderTargetMipmap($),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ve=0,Ne=T.length;ve<Ne;ve++){const Ve=T[ve],tt=Ve.object,je=Ve.geometry,Fe=Ve.material,ge=Ve.group;if(Fe.side===Tt&&tt.layers.test(I.layers)){const at=Fe.side;Fe.side=_t,Fe.needsUpdate=!0,li(tt,U,I,je,Fe,ge),Fe.side=at,Fe.needsUpdate=!0,Re=!0}}Re===!0&&(p.updateMultisampleRenderTarget($),p.updateRenderTargetMipmap($))}_.setRenderTarget(se),_.setClearColor(q,Q),Ae!==void 0&&(I.viewport=Ae),_.toneMapping=ue}function on(s,T,U){const I=T.isScene===!0?T.overrideMaterial:null;for(let x=0,$=s.length;x<$;x++){const ne=s[x],se=ne.object,ue=ne.geometry,Ae=I===null?ne.material:I,Re=ne.group;se.layers.test(U.layers)&&li(se,T,U,ue,Ae,Re)}}function li(s,T,U,I,x,$){s.onBeforeRender(_,T,U,I,x,$),s.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),x.onBeforeRender(_,T,U,I,s,$),x.transparent===!0&&x.side===Tt&&x.forceSinglePass===!1?(x.side=_t,x.needsUpdate=!0,_.renderBufferDirect(U,T,I,x,s,$),x.side=tn,x.needsUpdate=!0,_.renderBufferDirect(U,T,I,x,s,$),x.side=Tt):_.renderBufferDirect(U,T,I,x,s,$),s.onAfterRender(_,T,U,I,x,$)}function sn(s,T,U){T.isScene!==!0&&(T=Je);const I=me.get(s),x=r.state.lights,$=r.state.shadowsArray,ne=x.state.version,se=pe.getParameters(s,x.state,$,T,U),ue=pe.getProgramCacheKey(se);let Ae=I.programs;I.environment=s.isMeshStandardMaterial?T.environment:null,I.fog=T.fog,I.envMap=(s.isMeshStandardMaterial?w:o).get(s.envMap||I.environment),I.envMapRotation=I.environment!==null&&s.envMap===null?T.environmentRotation:s.envMapRotation,Ae===void 0&&(s.addEventListener("dispose",Ce),Ae=new Map,I.programs=Ae);let Re=Ae.get(ue);if(Re!==void 0){if(I.currentProgram===Re&&I.lightsStateVersion===ne)return ui(s,se),Re}else se.uniforms=pe.getUniforms(s),s.onBeforeCompile(se,_),Re=pe.acquireProgram(se,ue),Ae.set(ue,Re),I.uniforms=se.uniforms;const ve=I.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(ve.clippingPlanes=Z.uniform),ui(s,se),I.needsLights=Zr(s),I.lightsStateVersion=ne,I.needsLights&&(ve.ambientLightColor.value=x.state.ambient,ve.lightProbe.value=x.state.probe,ve.directionalLights.value=x.state.directional,ve.directionalLightShadows.value=x.state.directionalShadow,ve.spotLights.value=x.state.spot,ve.spotLightShadows.value=x.state.spotShadow,ve.rectAreaLights.value=x.state.rectArea,ve.ltc_1.value=x.state.rectAreaLTC1,ve.ltc_2.value=x.state.rectAreaLTC2,ve.pointLights.value=x.state.point,ve.pointLightShadows.value=x.state.pointShadow,ve.hemisphereLights.value=x.state.hemi,ve.directionalShadowMap.value=x.state.directionalShadowMap,ve.directionalShadowMatrix.value=x.state.directionalShadowMatrix,ve.spotShadowMap.value=x.state.spotShadowMap,ve.spotLightMatrix.value=x.state.spotLightMatrix,ve.spotLightMap.value=x.state.spotLightMap,ve.pointShadowMap.value=x.state.pointShadowMap,ve.pointShadowMatrix.value=x.state.pointShadowMatrix),I.currentProgram=Re,I.uniformsList=null,Re}function fi(s){if(s.uniformsList===null){const T=s.currentProgram.getUniforms();s.uniformsList=hn.seqWithValue(T.seq,s.uniforms)}return s.uniformsList}function ui(s,T){const U=me.get(s);U.outputColorSpace=T.outputColorSpace,U.batching=T.batching,U.batchingColor=T.batchingColor,U.instancing=T.instancing,U.instancingColor=T.instancingColor,U.instancingMorph=T.instancingMorph,U.skinning=T.skinning,U.morphTargets=T.morphTargets,U.morphNormals=T.morphNormals,U.morphColors=T.morphColors,U.morphTargetsCount=T.morphTargetsCount,U.numClippingPlanes=T.numClippingPlanes,U.numIntersection=T.numClipIntersection,U.vertexAlphas=T.vertexAlphas,U.vertexTangents=T.vertexTangents,U.toneMapping=T.toneMapping}function Kr(s,T,U,I,x){T.isScene!==!0&&(T=Je),p.resetTextureUnits();const $=T.fog,ne=I.isMeshStandardMaterial?T.environment:null,se=G===null?_.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:En,ue=(I.isMeshStandardMaterial?w:o).get(I.envMap||ne),Ae=I.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Re=!!U.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),ve=!!U.morphAttributes.position,Ne=!!U.morphAttributes.normal,Ve=!!U.morphAttributes.color;let tt=Rt;I.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(tt=_.toneMapping);const je=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Fe=je!==void 0?je.length:0,ge=me.get(I),at=r.state.lights;if(J===!0&&(de===!0||s!==u)){const ct=s===u&&I.id===h;Z.setState(I,s,ct)}let ke=!1;I.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==at.state.version||ge.outputColorSpace!==se||x.isBatchedMesh&&ge.batching===!1||!x.isBatchedMesh&&ge.batching===!0||x.isBatchedMesh&&ge.batchingColor===!0&&x.colorTexture===null||x.isBatchedMesh&&ge.batchingColor===!1&&x.colorTexture!==null||x.isInstancedMesh&&ge.instancing===!1||!x.isInstancedMesh&&ge.instancing===!0||x.isSkinnedMesh&&ge.skinning===!1||!x.isSkinnedMesh&&ge.skinning===!0||x.isInstancedMesh&&ge.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&ge.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&ge.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&ge.instancingMorph===!1&&x.morphTexture!==null||ge.envMap!==ue||I.fog===!0&&ge.fog!==$||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Z.numPlanes||ge.numIntersection!==Z.numIntersection)||ge.vertexAlphas!==Ae||ge.vertexTangents!==Re||ge.morphTargets!==ve||ge.morphNormals!==Ne||ge.morphColors!==Ve||ge.toneMapping!==tt||ge.morphTargetsCount!==Fe)&&(ke=!0):(ke=!0,ge.__version=I.version);let gt=ge.currentProgram;ke===!0&&(gt=sn(I,T,x));let Ft=!1,dt=!1,Zt=!1;const Ke=gt.getUniforms(),ht=ge.uniforms;if(_e.useProgram(gt.program)&&(Ft=!0,dt=!0,Zt=!0),I.id!==h&&(h=I.id,dt=!0),Ft||u!==s){_e.buffers.depth.getReversed()?(ie.copy(s.projectionMatrix),ra(ie),aa(ie),Ke.setValue(g,"projectionMatrix",ie)):Ke.setValue(g,"projectionMatrix",s.projectionMatrix),Ke.setValue(g,"viewMatrix",s.matrixWorldInverse);const lt=Ke.map.cameraPosition;lt!==void 0&&lt.setValue(g,Ge.setFromMatrixPosition(s.matrixWorld)),De.logarithmicDepthBuffer&&Ke.setValue(g,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ke.setValue(g,"isOrthographic",s.isOrthographicCamera===!0),u!==s&&(u=s,dt=!0,Zt=!0)}if(x.isSkinnedMesh){Ke.setOptional(g,x,"bindMatrix"),Ke.setOptional(g,x,"bindMatrixInverse");const ct=x.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),Ke.setValue(g,"boneTexture",ct.boneTexture,p))}x.isBatchedMesh&&(Ke.setOptional(g,x,"batchingTexture"),Ke.setValue(g,"batchingTexture",x._matricesTexture,p),Ke.setOptional(g,x,"batchingIdTexture"),Ke.setValue(g,"batchingIdTexture",x._indirectTexture,p),Ke.setOptional(g,x,"batchingColorTexture"),x._colorsTexture!==null&&Ke.setValue(g,"batchingColorTexture",x._colorsTexture,p));const mt=U.morphAttributes;if((mt.position!==void 0||mt.normal!==void 0||mt.color!==void 0)&&xe.update(x,U,gt),(dt||ge.receiveShadow!==x.receiveShadow)&&(ge.receiveShadow=x.receiveShadow,Ke.setValue(g,"receiveShadow",x.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ht.envMap.value=ue,ht.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&T.environment!==null&&(ht.envMapIntensity.value=T.environmentIntensity),dt&&(Ke.setValue(g,"toneMappingExposure",_.toneMappingExposure),ge.needsLights&&$r(ht,Zt),$&&I.fog===!0&&re.refreshFogUniforms(ht,$),re.refreshMaterialUniforms(ht,I,B,j,r.state.transmissionRenderTarget[s.id]),hn.upload(g,fi(ge),ht,p)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(hn.upload(g,fi(ge),ht,p),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ke.setValue(g,"center",x.center),Ke.setValue(g,"modelViewMatrix",x.modelViewMatrix),Ke.setValue(g,"normalMatrix",x.normalMatrix),Ke.setValue(g,"modelMatrix",x.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const ct=I.uniformsGroups;for(let lt=0,An=ct.length;lt<An;lt++){const Ct=ct[lt];M.update(Ct,gt),M.bind(Ct,gt)}}return gt}function $r(s,T){s.ambientLightColor.needsUpdate=T,s.lightProbe.needsUpdate=T,s.directionalLights.needsUpdate=T,s.directionalLightShadows.needsUpdate=T,s.pointLights.needsUpdate=T,s.pointLightShadows.needsUpdate=T,s.spotLights.needsUpdate=T,s.spotLightShadows.needsUpdate=T,s.rectAreaLights.needsUpdate=T,s.hemisphereLights.needsUpdate=T}function Zr(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(s,T,U){me.get(s.texture).__webglTexture=T,me.get(s.depthTexture).__webglTexture=U;const I=me.get(s);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=U===void 0,I.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(s,T){const U=me.get(s);U.__webglFramebuffer=T,U.__useDefaultFramebuffer=T===void 0};const Qr=g.createFramebuffer();this.setRenderTarget=function(s,T=0,U=0){G=s,P=T,y=U;let I=!0,x=null,$=!1,ne=!1;if(s){const ue=me.get(s);if(ue.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(g.FRAMEBUFFER,null),I=!1;else if(ue.__webglFramebuffer===void 0)p.setupRenderTarget(s);else if(ue.__hasExternalTextures)p.rebindTextures(s,me.get(s.texture).__webglTexture,me.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){const ve=s.depthTexture;if(ue.__boundDepthTexture!==ve){if(ve!==null&&me.has(ve)&&(s.width!==ve.image.width||s.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");p.setupDepthRenderbuffer(s)}}const Ae=s.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ne=!0);const Re=me.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(Re[T])?x=Re[T][U]:x=Re[T],$=!0):s.samples>0&&p.useMultisampledRTT(s)===!1?x=me.get(s).__webglMultisampledFramebuffer:Array.isArray(Re)?x=Re[U]:x=Re,b.copy(s.viewport),Y.copy(s.scissor),H=s.scissorTest}else b.copy(be).multiplyScalar(B).floor(),Y.copy(Oe).multiplyScalar(B).floor(),H=Ye;if(U!==0&&(x=Qr),_e.bindFramebuffer(g.FRAMEBUFFER,x)&&I&&_e.drawBuffers(s,x),_e.viewport(b),_e.scissor(Y),_e.setScissorTest(H),$){const ue=me.get(s.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+T,ue.__webglTexture,U)}else if(ne){const ue=me.get(s.texture),Ae=T;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,ue.__webglTexture,U,Ae)}else if(s!==null&&U!==0){const ue=me.get(s.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,ue.__webglTexture,U)}h=-1},this.readRenderTargetPixels=function(s,T,U,I,x,$,ne){if(!(s&&s.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=me.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){_e.bindFramebuffer(g.FRAMEBUFFER,se);try{const ue=s.texture,Ae=ue.format,Re=ue.type;if(!De.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=s.width-I&&U>=0&&U<=s.height-x&&g.readPixels(T,U,I,x,Pe.convert(Ae),Pe.convert(Re),$)}finally{const ue=G!==null?me.get(G).__webglFramebuffer:null;_e.bindFramebuffer(g.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(s,T,U,I,x,$,ne){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=me.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){const ue=s.texture,Ae=ue.format,Re=ue.type;if(!De.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(T>=0&&T<=s.width-I&&U>=0&&U<=s.height-x){_e.bindFramebuffer(g.FRAMEBUFFER,se);const ve=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,ve),g.bufferData(g.PIXEL_PACK_BUFFER,$.byteLength,g.STREAM_READ),g.readPixels(T,U,I,x,Pe.convert(Ae),Pe.convert(Re),0);const Ne=G!==null?me.get(G).__webglFramebuffer:null;_e.bindFramebuffer(g.FRAMEBUFFER,Ne);const Ve=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await oa(g,Ve,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,ve),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,$),g.deleteBuffer(ve),g.deleteSync(Ve),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(s,T=null,U=0){s.isTexture!==!0&&(Vt("WebGLRenderer: copyFramebufferToTexture function signature has changed."),T=arguments[0]||null,s=arguments[1]);const I=Math.pow(2,-U),x=Math.floor(s.image.width*I),$=Math.floor(s.image.height*I),ne=T!==null?T.x:0,se=T!==null?T.y:0;p.setTexture2D(s,0),g.copyTexSubImage2D(g.TEXTURE_2D,U,0,0,ne,se,x,$),_e.unbindTexture()};const jr=g.createFramebuffer(),Jr=g.createFramebuffer();this.copyTextureToTexture=function(s,T,U=null,I=null,x=0,$=null){s.isTexture!==!0&&(Vt("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,s=arguments[1],T=arguments[2],$=arguments[3]||0,U=null),$===null&&(x!==0?(Vt("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=x,x=0):$=0);let ne,se,ue,Ae,Re,ve,Ne,Ve,tt;const je=s.isCompressedTexture?s.mipmaps[$]:s.image;if(U!==null)ne=U.max.x-U.min.x,se=U.max.y-U.min.y,ue=U.isBox3?U.max.z-U.min.z:1,Ae=U.min.x,Re=U.min.y,ve=U.isBox3?U.min.z:0;else{const mt=Math.pow(2,-x);ne=Math.floor(je.width*mt),se=Math.floor(je.height*mt),s.isDataArrayTexture?ue=je.depth:s.isData3DTexture?ue=Math.floor(je.depth*mt):ue=1,Ae=0,Re=0,ve=0}I!==null?(Ne=I.x,Ve=I.y,tt=I.z):(Ne=0,Ve=0,tt=0);const Fe=Pe.convert(T.format),ge=Pe.convert(T.type);let at;T.isData3DTexture?(p.setTexture3D(T,0),at=g.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(p.setTexture2DArray(T,0),at=g.TEXTURE_2D_ARRAY):(p.setTexture2D(T,0),at=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,T.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,T.unpackAlignment);const ke=g.getParameter(g.UNPACK_ROW_LENGTH),gt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Ft=g.getParameter(g.UNPACK_SKIP_PIXELS),dt=g.getParameter(g.UNPACK_SKIP_ROWS),Zt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,je.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,je.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ae),g.pixelStorei(g.UNPACK_SKIP_ROWS,Re),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ve);const Ke=s.isDataArrayTexture||s.isData3DTexture,ht=T.isDataArrayTexture||T.isData3DTexture;if(s.isDepthTexture){const mt=me.get(s),ct=me.get(T),lt=me.get(mt.__renderTarget),An=me.get(ct.__renderTarget);_e.bindFramebuffer(g.READ_FRAMEBUFFER,lt.__webglFramebuffer),_e.bindFramebuffer(g.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Ct=0;Ct<ue;Ct++)Ke&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,me.get(s).__webglTexture,x,ve+Ct),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,me.get(T).__webglTexture,$,tt+Ct)),g.blitFramebuffer(Ae,Re,ne,se,Ne,Ve,ne,se,g.DEPTH_BUFFER_BIT,g.NEAREST);_e.bindFramebuffer(g.READ_FRAMEBUFFER,null),_e.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(x!==0||s.isRenderTargetTexture||me.has(s)){const mt=me.get(s),ct=me.get(T);_e.bindFramebuffer(g.READ_FRAMEBUFFER,jr),_e.bindFramebuffer(g.DRAW_FRAMEBUFFER,Jr);for(let lt=0;lt<ue;lt++)Ke?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,mt.__webglTexture,x,ve+lt):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,mt.__webglTexture,x),ht?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,ct.__webglTexture,$,tt+lt):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,ct.__webglTexture,$),x!==0?g.blitFramebuffer(Ae,Re,ne,se,Ne,Ve,ne,se,g.COLOR_BUFFER_BIT,g.NEAREST):ht?g.copyTexSubImage3D(at,$,Ne,Ve,tt+lt,Ae,Re,ne,se):g.copyTexSubImage2D(at,$,Ne,Ve,Ae,Re,ne,se);_e.bindFramebuffer(g.READ_FRAMEBUFFER,null),_e.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else ht?s.isDataTexture||s.isData3DTexture?g.texSubImage3D(at,$,Ne,Ve,tt,ne,se,ue,Fe,ge,je.data):T.isCompressedArrayTexture?g.compressedTexSubImage3D(at,$,Ne,Ve,tt,ne,se,ue,Fe,je.data):g.texSubImage3D(at,$,Ne,Ve,tt,ne,se,ue,Fe,ge,je):s.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,$,Ne,Ve,ne,se,Fe,ge,je.data):s.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,$,Ne,Ve,je.width,je.height,Fe,je.data):g.texSubImage2D(g.TEXTURE_2D,$,Ne,Ve,ne,se,Fe,ge,je);g.pixelStorei(g.UNPACK_ROW_LENGTH,ke),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,gt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ft),g.pixelStorei(g.UNPACK_SKIP_ROWS,dt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Zt),$===0&&T.generateMipmaps&&g.generateMipmap(at),_e.unbindTexture()},this.copyTextureToTexture3D=function(s,T,U=null,I=null,x=0){return s.isTexture!==!0&&(Vt("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,I=arguments[1]||null,s=arguments[2],T=arguments[3],x=arguments[4]||0),Vt('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(s,T,U,I,x)},this.initRenderTarget=function(s){me.get(s).__webglFramebuffer===void 0&&p.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?p.setTextureCube(s,0):s.isData3DTexture?p.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?p.setTexture2DArray(s,0):p.setTexture2D(s,0),_e.unbindTexture()},this.resetState=function(){P=0,y=0,G=null,_e.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(n),t.unpackColorSpace=nt._getUnpackColorSpace()}}const ri=Zn("camera",()=>{const e=et(75),n=et(window.innerWidth/window.innerHeight),t=et(.1),i=et(1e3),c=et(0),a=et(null),d=et(null),f=et(null),E=et(null);function m(){return a.value===null&&(a.value=new Xt(e.value,n.value,t.value,i.value),a.value.position.z=c.value),a.value}function C(){return d.value===null&&(d.value=new In,f.value=new In,d.value.add(f.value),E.value=new In,f.value.add(E.value),a.value=new Xt(e.value,n.value,t.value,i.value)),d.value}function R(S){if(d.value===null){console.log("camera rig not created yet"),a.value.position.copy(S);return}d.value.position.copy(S),a.value.position.copy(d.value.position),console.log("camera_rig yaw rotation",d.value.children[0].rotation),a.value.rotation.y=d.value.children[0].rotation.y,a.value.rotation.x=d.value.children[0].children[0].rotation.x}return{createCamera:m,createCameraRig:C,camera:a,yaw_object:f,pitch_object:E,camera_rig:d,updateRigPos:R}}),Gt=new ti(0,0,0,"YXZ"),Ht=new He,du={type:"change"},pu={type:"lock"},hu={type:"unlock"},_r=Math.PI/2;class mu extends Po{constructor(n,t=null){super(n,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=_u.bind(this),this._onPointerlockChange=vu.bind(this),this._onPointerlockError=gu.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(n){return n.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(n){if(this.enabled===!1)return;const t=this.object;Ht.setFromMatrixColumn(t.matrix,0),Ht.crossVectors(t.up,Ht),t.position.addScaledVector(Ht,n)}moveRight(n){if(this.enabled===!1)return;const t=this.object;Ht.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Ht,n)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function _u(e){if(this.enabled===!1||this.isLocked===!1)return;const n=this.object;Gt.setFromQuaternion(n.quaternion),Gt.y-=e.movementX*.002*this.pointerSpeed,Gt.x-=e.movementY*.002*this.pointerSpeed,Gt.x=Math.max(_r-this.maxPolarAngle,Math.min(_r-this.minPolarAngle,Gt.x)),n.quaternion.setFromEuler(Gt),this.dispatchEvent(du)}function vu(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(pu),this.isLocked=!0):(this.dispatchEvent(hu),this.isLocked=!1)}function gu(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const wt=ri(),zr=Zn("cameracontrol",()=>{const e=et(new He(0,0,0)),n=et(new He),t=et(new He),i=et(new st),c=et(new st),a=et(new He),d=et(null);et(null);const f=2,E=et({forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1}),m=et(null);function C(){d.value=new mu(wt.createCamera(),document.body),wt.camera=d.value.object,document.getElementById("three-canvas").addEventListener("click",function(){d.value.lock()}),window.addEventListener("keydown",r),window.addEventListener("keyup",D),window.addEventListener("gamepadconnected",R)}function R(v){console.log("gamepad connected================================",v.gamepad.id),m.value=v.gamepad,Mn().add(wt.createCameraRig())}function S(){if(m.value&&(navigator.getGamepads(),m.value=navigator.getGamepads()[0],m.value)){const v=m.value.buttons[0],_=m.value.buttons[1],F=m.value.buttons[2],P=m.value.buttons[3],y=m.value.buttons[4],G=m.value.buttons[5],h=m.value.buttons[6],u=m.value.buttons[7],b=m.value.buttons[8],Y=m.value.buttons[9],H=m.value.buttons[10],q=m.value.buttons[11],Q=m.value.buttons[12],k=m.value.buttons[13],j=m.value.buttons[14],B=m.value.buttons[15],he=m.value.buttons[16],Ee=m.value.axes[0],be=m.value.axes[1],Oe=m.value.axes[2],Ye=m.value.axes[3];v.pressed&&console.log("x"),_.pressed&&console.log("o"),F.pressed&&console.log("sqare"),P.pressed&&console.log("triangle"),y.pressed&&console.log("lbutt"),G.pressed&&console.log("rbutt"),h.pressed?(console.log("ltrigger"),E.value.down=!0):E.value.down=!1,u.pressed?(console.log("rtrigger"),E.value.up=!0):E.value.up=!1,b.pressed&&console.log("share"),Y.pressed&&console.log("options"),H.pressed&&console.log("ldepress"),q.pressed&&console.log("rdepress"),Q.pressed||be<-.1?(console.log("up"),E.value.forward=!0):E.value.forward=!1,k.pressed||be>.1?(console.log("down"),E.value.backward=!0):E.value.backward=!1,j.pressed||Ee<-.1?(console.log("left"),E.value.left=!0):E.value.left=!1,B.pressed||Ee>.1?(console.log("right"),E.value.right=!0):E.value.right=!1,he.pressed&&(console.log("system/home/guide"),d.value.unlock()),c.value.y+=Oe*.1,c.value.x-=Ye*.04}}function A(v){L(v),t.value.add(a.value.clone().multiplyScalar(v)),n.value.add(t.value.clone().multiplyScalar(v)),wt.updateRigPos(n.value),N(n,v),l(v)}function N(v,_){if(!m.value){console.log("no gamepad connected");return}i.value.lerp(c.value,.1),wt.camera_rig.children[0].rotation.y-=i.value.y*_,wt.camera_rig.children[0].children[0].rotation.x-=i.value.x*_}function L(v){E.value.forward&&(e.value.z-=v),E.value.backward&&(e.value.z+=v),E.value.left&&(e.value.x-=v),E.value.right&&(e.value.x+=v),E.value.up&&(e.value.y+=v),E.value.down&&(e.value.y-=v),e.value.lengthSq()>0&&(e.value.normalize(),e.value.applyQuaternion(wt.camera.quaternion),a.value.copy(e.value).multiplyScalar(f),e.value.set(0,0,0))}function l(v){const _=Math.abs(1-v);t.value.multiplyScalar(_),a.value.multiplyScalar(.9-_),c.value.multiplyScalar(_)}function r(v){switch(console.log("key pressed",v.code),v.code){case"KeyW":case"ArrowUp":E.value.forward=!0;break;case"KeyS":case"ArrowDown":E.value.backward=!0;break;case"KeyA":case"ArrowLeft":E.value.left=!0;break;case"KeyD":case"ArrowRight":E.value.right=!0;break;case"Space":case"ShiftRight":E.value.up=!0;break;case"ControlRight":case"ControlLeft":E.value.down=!0;break}}function D(v){switch(v.code){case"KeyW":case"ArrowUp":E.value.forward=!1;break;case"KeyS":case"ArrowDown":E.value.backward=!1;break;case"KeyA":case"ArrowLeft":E.value.left=!1;break;case"KeyD":case"ArrowRight":E.value.right=!1;break;case"Space":case"ShiftRight":E.value.up=!1;break;case"ControlRight":case"ControlLeft":E.value.down=!1;break}}return{updateCameraPosition:A,initControls:C,pollGamepad:S,pointer_controls:d,dampening:l,velocity:t}}),Eu={class:"bg-black/50 overflow-auto"},Su={__name:"MainRender",setup(e){const n=ri(),t=Mn(),i=zr();ni();const c=new Lo;let a=new mr,d=null;Qn(()=>{t.initScene(),f()}),Sr(()=>{d&&cancelAnimationFrame(d)});function f(){const m=document.querySelector("#three-canvas");a=new mr({antialias:!0,canvas:m}),a.setSize(window.innerWidth,window.innerHeight),i.initControls(),d=requestAnimationFrame(E)}function E(m){i.pointer_controls.isLocked===!0&&i.updateCameraPosition(c.getDelta()),a.render(t.render_scene,n.camera),d=requestAnimationFrame(E)}return di(()=>t.render_scene,(m,C)=>{console.log("scene changed",m,C),a.render(m,n.camera),d&&cancelAnimationFrame(d),d=requestAnimationFrame(E)}),di(()=>n.camera,(m,C)=>{console.log("camera changed",m,C),a.render(t.render_scene,m),d&&cancelAnimationFrame(d),d=requestAnimationFrame(E)}),(m,C)=>(Jn(),jn("div",Eu,C[0]||(C[0]=[ea("canvas",{class:"",id:"three-canvas"},null,-1)])))}},Xr=`(function(){"use strict";onmessage=e=>{const[o,s,a]=e.data,n=t(o,s,a);postMessage(n)};function t(e,o,s){return console.log("worker processing claim:",e,o,s),c(e,o,s),"claim processed by worker"}async function c(e,o,s){const a=new FormData;a.append("voxel",e),a.append("is_holding",!0);const n=await fetch(o,{method:"POST",headers:{"X-CSRFToken":s},body:a}),r=await n.json();if(n.ok)return console.log("created claim",r),r;console.error("failed to create claim"),console.error(n)}})();
`,vr=typeof self<"u"&&self.Blob&&new Blob([Xr],{type:"text/javascript;charset=utf-8"});function Mu(e){let n;try{if(n=vr&&(self.URL||self.webkitURL).createObjectURL(vr),!n)throw"";const t=new Worker(n,{name:e==null?void 0:e.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(n)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Xr),{name:e==null?void 0:e.name})}finally{n&&(self.URL||self.webkitURL).revokeObjectURL(n)}}const qr='(function(){"use strict";self.onmessage=async n=>{const s=n.data,e=s[0],o=s[1],c=s[2],t=s[3],a=s[4],r=s[5],i=s[6],l=await f(e,o,c,t,a,r,i);postMessage(l)};async function f(n,s,e,o,c,t,a){const r=await _(Math.floor(n),Math.floor(s),Math.floor(e),o,c),i=h(r,t),l=d(i,a);return u(l,r)}function h(n,s){let e=[];for(const o of n){const c=s.findIndex(t=>t.pk===o.pk);e.push(c)}return e}function d(n,s){let e=[];for(const o of n)o<0?e.push("CREATENEW"):e.push(s[o].object.uuid);return e}function u(n,s){let e={};for(let o=0;o<n.length;o++){const c=n[o],t=s[o];c=="CREATENEW"?e[`${c}_${t.pk}`]={x:t.x,y:t.y,z:t.z,color:t.color}:e[`${c}`]={x:t.x,y:t.y,z:t.z}}return e}async function _(n,s,e,o,c){const t=new URLSearchParams({x:n,y:s,z:e}),a=await fetch(`${o}nearest/?${t}`,{method:"GET",headers:{"X-CSRFToken":c}});if(a.ok)return await a.json();console.error("failed to fetch nearest"),console.error(a)}})();\n',gr=typeof self<"u"&&self.Blob&&new Blob([qr],{type:"text/javascript;charset=utf-8"});function Tu(e){let n;try{if(n=gr&&(self.URL||self.webkitURL).createObjectURL(gr),!n)throw"";const t=new Worker(n,{name:e==null?void 0:e.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(n)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(qr),{name:e==null?void 0:e.name})}finally{n&&(self.URL||self.webkitURL).revokeObjectURL(n)}}const Yr=`(function(){"use strict";self.onmessage=async s=>{const t=s.data,e=t[0],n=t[1],a=await o(e,n);postMessage(a)};async function o(s,t){const e=await fetch(s,{method:"GET",headers:{"X-CSRFToken":t}});if(e.ok)return await e.json();console.error("failed to fetch recent"),console.error(e)}})();
`,Er=typeof self<"u"&&self.Blob&&new Blob([Yr],{type:"text/javascript;charset=utf-8"});function xu(e){let n;try{if(n=Er&&(self.URL||self.webkitURL).createObjectURL(Er),!n)throw"";const t=new Worker(n,{name:e==null?void 0:e.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(n)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Yr),{name:e==null?void 0:e.name})}finally{n&&(self.URL||self.webkitURL).revokeObjectURL(n)}}const Au={__name:"MainCamera",setup(e){const n=ri(),t=zr(),i=ni(),c=Mn(),a=Br(),d=new Mu;new Tu;const f=new xu,E=et(new Date);console.log("last_updated:",E.value.toISOString()),d.onmessage=v=>{console.log(v.data)};let m,C,R,S,A;Qn(()=>{A=setInterval(N,100),m=setInterval(L,200),C=setInterval(l,400),R=setInterval(r,800),S=setInterval(D,4e3)}),Sr(()=>{clearInterval(m),clearInterval(C),clearInterval(R),clearInterval(S),clearInterval(A)});function N(){t.pollGamepad()}function L(){const v=n.camera.position.x,_=n.camera.position.y,F=n.camera.position.z;i.getCollectiblesInRegion(v,_,F)}function l(){for(let v of i.collection_queue){const _=a.pullVoxelMesh(v.pk);_&&(t.dampening(.8),c.remove(_),i.claim_queue.push(v))}i.collection_queue=[]}async function r(){for(let v of i.claim_queue){const _=[v.pk,`${window.location.origin}/apiv1/claims/`,window.csrf_token];console.log("sending pk to claim_worker:",_),d.postMessage(_)}i.claim_queue=[]}async function D(){const v=new URLSearchParams({updated_since:E.value.toISOString()}),_=`${window.location.origin}/apiv1/voxels/recent/?${v}`,F=window.csrf_token,P=[_,F];console.log("sending recent refresh to recent_worker:",P),f.postMessage(P),f.onmessage=y=>{console.log("recent_worker message:",y.data);const G=y.data;for(const h of G){a.voxel_list.push(h);const u=a.drawVoxel(h.x,h.y,h.z,`#${h.color}`);c.add(u)}E.value=new Date}}return(v,_)=>(Jn(),jn("div"))}},Ru=Zn("light",()=>{const e=et([]);function n(t,i,c){const f=new wo(16777215,2);return f.position.set(t,i,c),e.value.push(f),f}return{createLight:n,light_list:e}}),bu={__name:"MainScene",setup(e){const n=Mn(),t=Ru(),i=Br(),c=ni();Qn(async()=>{await i.fetchVoxels(),c.buildHashMap(i.voxel_list),await i.drawVoxels(),a(),await d()});function a(){t.createLight(4,8,16),t.createLight(-4,8,16),t.createLight(0,50,-2)}async function d(){for(let f of t.light_list){const E=f.clone();n.add(E)}for(let f of i.voxel_mesh_list)n.add(f)}return(f,E)=>null}},Lu={__name:"GameView",setup(e){return(n,t)=>(Jn(),jn("div",null,[Rn(Su),Rn(Au),Rn(bu)]))}};export{Lu as default};
